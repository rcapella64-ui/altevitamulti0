import { useEffect, useState } from "react";
import logo from "@/assets/altevita-multi-logo.png";

export const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-hairline/60" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-10 py-4">
        <a href="#capa" className="flex items-center gap-3" aria-label="Altevita Multi">
          <img src={logo} alt="Altevita Multi" className="h-9 w-auto opacity-90" />
        </a>
        <a
          href="#convite"
          className="hidden sm:inline-flex items-center gap-3 text-[0.68rem] tracking-[0.28em] uppercase text-ink-soft hover:text-leaf-deep transition-colors duration-500"
        >
          <span className="hairline w-8 hidden md:block" aria-hidden />
          Agendar conversa
        </a>
      </div>
    </header>
  );
};
