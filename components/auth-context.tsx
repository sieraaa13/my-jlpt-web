"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface UserData {
  name: string;
  expiredAt: number;
}

interface AuthContextType {
  user: UserData | null;
  login: (name: string) => void;
  logout: () => void;
  isLoaded: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isLoaded: false,
});

const STORAGE_KEY = "nihongo_user";
const EXPIRY_HOURS = 12;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cek localStorage saat halaman dibuka
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data: UserData = JSON.parse(raw);
        if (data.expiredAt > Date.now()) {
          setUser(data);
        } else {
          // Expired, hapus
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error("Auth load error:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Auto-check expired tiap 1 menit
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(() => {
      if (user.expiredAt <= Date.now()) {
        logout();
      }
    }, 60 * 1000); // cek tiap 1 menit

    return () => clearInterval(interval);
  }, [user]);

  const login = (name: string) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const data: UserData = {
      name: trimmedName,
      expiredAt: Date.now() + EXPIRY_HOURS * 60 * 60 * 1000,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUser(data);
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
