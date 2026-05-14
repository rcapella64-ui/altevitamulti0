import { Reveal } from "@/components/Reveal";
import { TopBar } from "@/components/TopBar";
import { FloatingCTA } from "@/components/FloatingCTA";
import logo from "@/assets/altevita-multi-logo.png";

const pillars = [
  { name: "Psicologia", phrase: "Para que cada história continue sendo contada." },
  { name: "Nutrição", phrase: "Para que cada refeição seja celebração, não prescrição." },
  { name: "Fisioterapia", phrase: "Para que o corpo continue sendo casa." },
  { name: "Terapia Ocupacional", phrase: "Para que os dias tenham cor, forma e propósito." },
  { name: "Fonoaudiologia", phrase: "Para que cada palavra e cada refeição sigam seguras." },
];

const journey = [
  {
    roman: "I",
    title: "A Imersão",
    text: "Os primeiros 15 dias são dedicados a conhecer profundamente quem você ama. Cada especialista observa, escuta, registra.",
  },
  {
    roman: "II",
    title: "O Plano Único",
    text: "Um dossiê é construído. Assinado por cada especialista. Entregue em mãos a você.",
  },
  {
    roman: "III",
    title: "O Cuidado Contínuo",
    text: "A jornada se desenrola. Encontros frequentes. Uma carta mensal chega à sua casa.",
  },
  {
    roman: "IV",
    title: "O Reencontro",
    text: "A cada três meses, o time inteiro se reúne com você. Para celebrar caminhos. Para ajustar rumos.",
  },
];

const deliverables = [
  {
    label: "I.",
    name: "O Dossiê",
    text: "Uma pasta entregue em suas mãos. Dentro: o plano único pensado para quem você ama, assinado por cada especialista. Para guardar. Para reler. Para mostrar.",
  },
  {
    label: "II.",
    name: "A Carta Mensal",
    text: "Toda última sexta-feira do mês, uma carta chega. Com a evolução. Com as conquistas. Com palavras de cada especialista do time. Um ritual.",
  },
  {
    label: "III.",
    name: "O Encontro Trimestral",
    text: "A cada três meses, o time se reúne com você — presencialmente ou por vídeo. Não para reportar números. Para celebrar caminhos.",
  },
];

const testimonials = [
  { quote: "Foi a primeira vez que parei de checar o celular à noite.", name: "Marina", relation: "filha do Sr. Antônio" },
  { quote: "Minha mãe voltou a sorrir nas fotos.", name: "Ricardo", relation: "filho da Sra. Helena" },
  { quote: "O encontro trimestral mudou minha relação com o cuidado dela.", name: "Camila", relation: "filha da Sra. Beatriz" },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="tracking-eyebrow text-leaf-deep">{children}</span>
);

const SectionNumber = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-baseline gap-4 text-ink-muted">
    <span className="font-serif-italic text-sm">{n}</span>
    <span className="hairline w-10 translate-y-[-4px]" aria-hidden />
    <span className="tracking-eyebrow">{label}</span>
  </div>
);

const Index = () => {
  return (
    <main className="bg-paper text-ink overflow-x-hidden">
      <TopBar />
      <FloatingCTA />

      {/* CAPA */}
      <section
        id="capa"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <Reveal>
          <p className="tracking-eyebrow text-leaf-deep mb-12">
            Altevita — Um Programa Reservado
          </p>
        </Reveal>

        <Reveal delay={1}>
          <img
            src={logo}
            alt="Altevita Multi"
            className="mx-auto h-36 sm:h-44 w-auto opacity-95 mb-10"
          />
        </Reveal>

        <Reveal delay={2}>
          <h1 className="font-serif-display text-[18vw] sm:text-[14rem] leading-[0.85] text-ink mb-10">
            Equipe Multi
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className="font-serif-italic text-2xl sm:text-3xl text-ink-soft max-w-xl">
            Para quem você ama,
            <br />
            o cuidado mais completo que existe.
          </p>
        </Reveal>
      </section>

      {/* SEÇÃO 1 — A VERDADE QUE NINGUÉM DIZ */}
      <section className="section-pad">
        <div className="container-narrow">
          <Reveal>
            <SectionNumber n="i" label="A verdade que ninguém diz" />
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif-display text-3xl sm:text-5xl text-ink mt-12 leading-[1.15]">
              Toda família que coloca um pai ou uma mãe sob cuidados se faz, em silêncio, a mesma pergunta:
              <span className="font-serif-italic text-leaf-deep"> estou fazendo o suficiente?</span>
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-10 text-lg text-ink-soft leading-relaxed">
              O Altevita Multi nasceu para que essa pergunta tenha, finalmente, uma resposta.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-20 text-center">
              <p className="ornament tracking-eyebrow text-leaf-deep mb-8 inline-block">resposta</p>
              <p className="font-serif-display text-6xl sm:text-8xl text-ink">
                Sim. <span className="font-serif-italic text-leaf-deep">Você está.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 2 — O QUE MUDA QUANDO O CUIDADO É COMPLETO */}
      <section className="section-pad deep-bg">
        <div className="container-prose">
          <Reveal>
            <SectionNumber n="ii" label="O que muda quando o cuidado é completo" />
          </Reveal>
          <div className="mt-16 grid md:grid-cols-12 gap-10 items-baseline">
            <Reveal delay={1} className="md:col-span-5">
              <p className="font-serif-display text-5xl sm:text-7xl leading-[0.95]">
                Há cuidado.
              </p>
              <p className="font-serif-display text-5xl sm:text-7xl leading-[0.95] mt-4 text-leaf-deep font-serif-italic">
                E há cuidado completo.
              </p>
            </Reveal>
            <Reveal delay={2} className="md:col-span-6 md:col-start-7">
              <p className="text-lg text-ink-soft leading-relaxed">
                A diferença está no que se vê e, sobretudo, no que se sente.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — PARA POUCOS. POR ESCOLHA. */}
      <section className="section-pad">
        <div className="container-narrow text-center">
          <Reveal>
            <Eyebrow>Para poucos. Por escolha.</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif-display text-4xl sm:text-6xl mt-12 leading-[1.1]">
              O Multi não é para todos.
              <br />
              <span className="font-serif-italic text-leaf-deep">É para quem escolhe</span>
              <br />o mais alto padrão de cuidado da Altevita.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-16 mx-auto w-px h-16 bg-leaf/40" aria-hidden />
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-10 text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
              Um programa reservado a famílias que entendem que presença, evolução e sofisticação no cuidado não são detalhes são tudo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 4 — OS CINCO OLHARES */}
      <section className="section-pad ink-bg">
        <div className="container-prose">
          <Reveal>
            <p className="tracking-eyebrow text-leaf-soft text-center">iv — os cinco olhares</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-center mt-8 mb-20 text-paper">
              Os cinco olhares
              <br />
              <span className="font-serif-italic text-leaf-soft">sobre quem você ama.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-16">
            {pillars.map((p, i) => (
              <Reveal key={p.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="border-t border-paper/20 pt-8">
                  <p className="tracking-eyebrow text-leaf-soft mb-6">0{i + 1}</p>
                  <h3 className="font-serif-display text-3xl sm:text-4xl mb-6 text-paper">{p.name}</h3>
                  <p className="font-serif-italic text-xl sm:text-2xl text-paper/80 leading-snug">
                    {p.phrase}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — UM TIME INTEIRO. UMA ÚNICA PESSOA. */}
      <section className="section-pad">
        <div className="container-narrow text-center">
          <Reveal>
            <SectionNumber n="v" label="Um time inteiro. Uma única pessoa." />
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif-display text-3xl sm:text-5xl mt-14 leading-[1.15]">
              Toda semana, os cinco especialistas do Multi se reúnem em torno de um único objetivo:
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-serif-italic text-4xl sm:text-6xl text-leaf-deep mt-10">
              o morador.
              <br />
              O seu.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-12 text-lg text-ink-soft leading-relaxed">
              Não há dois planos iguais porque não há duas histórias iguais.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 6 — A JORNADA */}
      <section className="section-pad deep-bg">
        <div className="container-prose">
          <Reveal>
            <p className="tracking-eyebrow text-leaf-deep">vi — a jornada</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif-display text-5xl sm:text-7xl mt-6 mb-20">
              A jornada.
            </h2>
          </Reveal>

          <ol className="space-y-16">
            {journey.map((step, i) => (
              <Reveal as="li" key={step.roman} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-hairline pt-10">
                  <div className="md:col-span-2">
                    <span className="font-serif-italic text-leaf-deep text-5xl sm:text-6xl">{step.roman}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif-display text-3xl sm:text-4xl">{step.title}</h3>
                  </div>
                  <p className="md:col-span-6 text-lg text-ink-soft leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SEÇÃO 7 — O QUE VOCÊ RECEBE */}
      <section className="section-pad">
        <div className="container-prose">
          <Reveal>
            <p className="tracking-eyebrow text-leaf-deep text-center">vii — o que você recebe</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif-display text-4xl sm:text-6xl mt-8 mb-20 text-center">
              O que você recebe.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-hairline">
            {deliverables.map((d, i) => (
              <Reveal key={d.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="bg-paper">
                <div className="p-8 sm:p-10 h-full flex flex-col">
                  <span className="font-serif-italic text-leaf-deep text-3xl mb-6">{d.label}</span>
                  <h3 className="font-serif-display text-3xl mb-6">{d.name}</h3>
                  <p className="text-base text-ink-soft leading-relaxed">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <p className="font-serif-italic text-3xl sm:text-4xl text-center mt-20 text-leaf-deep">
              Cuidado que você sente. <br className="sm:hidden" />E também vê.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 8 — O QUE UMA FAMÍLIA LEVA */}
      <section className="section-pad ink-bg">
        <div className="container-narrow">
          <Reveal>
            <p className="tracking-eyebrow text-leaf-soft">viii — o que uma família leva</p>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif-display text-3xl sm:text-5xl mt-12 leading-[1.18] text-paper">
              Você não está adicionando serviços a um contrato.
              <br />
              <br />
              <span className="text-paper/70">Você está</span> escolhendo dormir mais tranquilo à noite.
              <br />
              <span className="text-paper/70">Escolhendo</span> ter o que mostrar aos seus irmãos.
              <br />
              <span className="text-paper/70">Escolhendo</span> saber, com certeza, que está fazendo o melhor possível por quem te criou.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-20 pt-12 border-t border-paper/20 text-center">
              <p className="font-serif-italic text-4xl sm:text-6xl text-paper">
                O Multi entrega, no fundo,
                <br />
                uma única coisa:{" "}
                <span className="text-leaf-soft">paz.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 9 — A DIFERENÇA QUE NÃO SE EXPLICA */}
      <section className="section-pad">
        <div className="container-prose">
          <Reveal>
            <p className="tracking-eyebrow text-leaf-deep text-center">ix — a diferença que não se explica</p>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif-display text-3xl sm:text-5xl text-center mt-10 mb-4 leading-[1.15]">
              Famílias que escolhem o Multi
              <br />
              <span className="font-serif-italic text-leaf-deep">raramente voltam atrás.</span>
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-center text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed mt-8">
              Não porque assinaram um contrato. Porque encontraram um padrão de cuidado que não se troca.
            </p>
          </Reveal>

          <div className="mt-24 grid md:grid-cols-3 gap-12 md:gap-10">
            {testimonials.map((t, i) => (
              <Reveal as="blockquote" key={t.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex flex-col items-start">
                  <span className="font-serif-display text-leaf text-7xl leading-none mb-2" aria-hidden>
                    “
                  </span>
                  <p className="font-serif-italic text-xl sm:text-2xl text-ink leading-snug mb-8">
                    {t.quote}
                  </p>
                  <span className="hairline w-10 mb-4" aria-hidden />
                  <footer className="text-sm text-ink-muted">
                    <span className="text-ink">{t.name}</span>, {t.relation}
                  </footer>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 — O CONVITE */}
      <section id="convite" className="section-pad deep-bg">
        <div className="container-narrow text-center">
          <Reveal>
            <Eyebrow>x — o convite</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif-display text-5xl sm:text-7xl mt-12 leading-[1.05]">
              Algumas decisões
              <br />
              não se explicam.
              <br />
              <span className="font-serif-italic text-leaf-deep">Se sentem.</span>
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-12 text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
              Converse com a coordenação da Altevita. Conheça o Multi. E descubra se ele é, também, o que você deseja para quem você ama.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a
              href="#capa"
              onClick={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent("Altevita Multi — Agendar conversa com a coordenação");
                window.location.href = `mailto:coordenacao@altevita.com.br?subject=${subject}`;
              }}
              className="group inline-flex items-center gap-5 mt-16 px-10 py-5 bg-leaf-deep text-paper hover:bg-leaf transition-colors duration-700"
            >
              <span className="tracking-eyebrow">Agendar conversa com a coordenação</span>
              <span className="w-10 h-px bg-paper/70 group-hover:w-16 transition-all duration-700" aria-hidden />
            </a>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO FINAL */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-paper">
        <div className="text-center max-w-3xl">
          <Reveal>
            <p className="ornament tracking-eyebrow text-leaf-deep mb-16 inline-block">manifesto</p>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif-display text-4xl sm:text-6xl leading-[1.15] text-ink">
              Há lugares onde se envelhece.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-serif-display text-4xl sm:text-6xl leading-[1.15] text-ink mt-6">
              E há a <span className="font-serif-italic text-leaf-deep">Altevita Multi</span> —
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="font-serif-display text-4xl sm:text-6xl leading-[1.15] text-ink mt-6">
              onde se vive plenamente,
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p className="font-serif-italic text-4xl sm:text-6xl text-leaf-deep mt-6">
              até o fim.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-24 flex flex-col items-center gap-6">
              <span className="hairline w-16" aria-hidden />
              <img src={logo} alt="Altevita Multi" className="h-14 w-auto opacity-90" />
              <p className="tracking-eyebrow text-ink-muted mt-2">Grupo Altevita</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
