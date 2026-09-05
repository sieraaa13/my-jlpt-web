"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/auth-context";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Loader2, ShieldAlert, Users } from "lucide-react";

interface UserRow {
  id: string;
  name: string;
  last_login: string;
}

export default function MasterPage() {
  const { user, isLoaded } = useAuth();
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;
    if (!user?.is_master) {
      setLoading(false);
      return;
    }

    const loadUsers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("id, name, last_login")
        .order("last_login", { ascending: false });

      if (data && !error) setUsers(data);
      setLoading(false);
    };

    loadUsers();
  }, [user, isLoaded]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Data User</h1>
          <p className="text-muted-foreground">Daftar semua user dan waktu login terakhir</p>
        </div>

        {!isLoaded || loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : !user?.is_master ? (
          <Card className="p-12 text-center">
            <ShieldAlert className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h2 className="text-xl font-bold mb-2">Akses Ditolak</h2>
            <p className="text-muted-foreground mb-6">Halaman ini cuma bisa diakses akun master.</p>
            <Link href="/">
              <Button className="rounded-xl">Kembali ke Beranda</Button>
            </Link>
          </Card>
        ) : (
          <Card className="overflow-hidden">
            <div className="px-5 py-3 border-b border-border flex items-center gap-2 bg-muted/30">
              <Users size={16} className="text-primary" />
              <span className="text-sm font-medium">Total: {users.length} user</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Nama</th>
                    <th className="px-5 py-3 font-medium">Terakhir Login</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                      <td className="px-5 py-3 font-medium">{u.name}</td>
                      <td className="px-5 py-3 text-muted-foreground">{formatDate(u.last_login)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
