"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase, User } from "@/lib/supabase";

interface AuthContextType {
  user: User | null;
  login: (name: string) => Promise<{ success: boolean; error?: string; isNewUser?: boolean }>;
  logout: () => void;
  isLoaded: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => ({ success: false }),
  logout: () => {},
  isLoaded: false,
});

const STORAGE_KEY = "nihongo_user";
const EXPIRY_HOURS = 12;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cek session saat halaman dibuka
  useEffect(() => {
    const loadUser = async () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          setIsLoaded(true);
          return;
        }

        const session = JSON.parse(raw);
        if (session.expiredAt <= Date.now()) {
          localStorage.removeItem(STORAGE_KEY);
          setIsLoaded(true);
          return;
        }

        // Ambil data user dari Supabase
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.userId)
          .single();

        if (data && !error) {
          setUser(data);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (err) {
        console.error("Auth load error:", err);
      } finally {
        setIsLoaded(true);
      }
    };

    loadUser();
  }, []);

  // Auto-check expired tiap 1 menit
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(() => {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        logout();
        return;
      }
      const session = JSON.parse(raw);
      if (session.expiredAt <= Date.now()) {
        logout();
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [user]);

  const login = async (name: string): Promise<{ success: boolean; error?: string; isNewUser?: boolean }> => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      return { success: false, error: "Nama tidak boleh kosong" };
    }

    try {
      // Cek apakah nama sudah ada
      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("name", trimmedName)
        .single();

      let userData: User;

      if (existingUser) {
        // Login: update last_login
        const { data: updated, error: updateError } = await supabase
          .from("users")
          .update({ last_login: new Date().toISOString() })
          .eq("id", existingUser.id)
          .select()
          .single();

        if (updateError) throw updateError;
        userData = updated;
      } else {
        // Register: buat user baru
        const { data: newUser, error: insertError } = await supabase
          .from("users")
          .insert({ name: trimmedName })
          .select()
          .single();

        if (insertError) throw insertError;
        userData = newUser;
      }

      // Simpan session di localStorage
      const session = {
        userId: userData.id,
        expiredAt: Date.now() + EXPIRY_HOURS * 60 * 60 * 1000,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      setUser(userData);

      return {
        success: true,
        isNewUser: !existingUser,
      };
    } catch (err: any) {
      console.error("Login error:", err);
      return {
        success: false,
        error: err.message || "Gagal login. Coba lagi.",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoaded }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// Helper: hitung sisa waktu dari localStorage
export function getRemainingTimeMs(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const session = JSON.parse(raw);
    return Math.max(0, session.expiredAt - Date.now());
  } catch {
    return 0;
  }
}
