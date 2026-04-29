import { useEffect, useState } from "react";

export const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // Aparece após sair da capa, esconde no fim (perto do convite)
      setShow(y > window.innerHeight * 0.9 && y < max - window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#convite"
      aria-label="Agendar conversa com a coordenação"
      className={`fixed z-40 bottom-6 right-6 sm:bottom-10 sm:right-10 inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 bg-leaf-deep text-paper text-[0.68rem] tracking-[0.28em] uppercase shadow-[0_18px_50px_-20px_hsl(var(--leaf-deep)/0.6)] hover:bg-leaf transition-all duration-700 ${
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-leaf-soft" aria-hidden />
      Agendar conversa
    </a>
  );
};
