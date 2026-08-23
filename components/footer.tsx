export function Footer() {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎌</span>
              <span className="text-2xl font-bold">
                <span className="text-primary">Nihon</span>
                <span className="text-accent">GO!</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Platform belajar bahasa Jepang terbaik dengan metode interaktif dan karakter anime yang menyenangkan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                📺
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Pelajaran</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Hiragana</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Katakana</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kanji</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tata Bahasa</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 NihonGO! Semua hak dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
