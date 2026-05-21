<?php
// Altevita Multi — versão estática (HTML/CSS/JS/PHP)
// Conteúdo definido em arrays PHP para fácil manutenção.

$pillars = [
  ['name' => 'Psicologia',           'phrase' => 'Para que cada história continue sendo contada.'],
  ['name' => 'Nutrição',             'phrase' => 'Para que cada refeição seja celebração, não prescrição.'],
  ['name' => 'Fisioterapia',         'phrase' => 'Para que o corpo continue sendo casa.'],
  ['name' => 'Terapia Ocupacional',  'phrase' => 'Para que os dias tenham cor, forma e propósito.'],
  ['name' => 'Fonoaudiologia',       'phrase' => 'Para que cada palavra e cada refeição sigam seguras.'],
];

$journey = [
  ['roman' => 'I',   'title' => 'A Escuta',           'text' => 'Os primeiros dias são para conhecer. Para escutar quem você ama, em silêncio e sem pressa. Cada olhar do time se aproxima, com delicadeza.'],
  ['roman' => 'II',  'title' => 'O Plano Único',      'text' => 'Um plano nasce, escrito a muitas mãos. Pensado para uma única pessoa. Entregue, em mãos, a você.'],
  ['roman' => 'III', 'title' => 'O Cuidado Contínuo', 'text' => 'Os dias seguem, acompanhados de perto. E, todo mês, uma carta chega à sua casa — para contar como ela ou ele tem florescido.'],
  ['roman' => 'IV',  'title' => 'O Reencontro',       'text' => 'A cada três meses, o time inteiro se reúne com você. Para celebrar caminhos. Para ajustar gestos. Para seguir, juntos.'],
];

$deliverables = [
  ['label' => 'I.',   'name' => 'O Dossiê',              'text' => 'Uma pasta entregue em suas mãos. Dentro, o plano único pensado para quem você ama, com a palavra de cada olhar do time. Para guardar. Para reler. Para mostrar a quem também ama.'],
  ['label' => 'II.',  'name' => 'A Carta Mensal',        'text' => 'Toda última sexta-feira do mês, uma carta chega. Com as pequenas conquistas. Com as palavras de quem esteve ao lado. Um gesto que vira ritual.'],
  ['label' => 'III.', 'name' => 'O Encontro Trimestral', 'text' => 'A cada três meses, o time se reúne com você em casa ou por vídeo. Não para falar de números. Para conversar sobre alguém querido.'],
];

$testimonials = [
  ['quote' => 'Foi a primeira vez que parei de checar o celular à noite.', 'name' => 'Marina',  'relation' => 'filha do Sr. Antônio'],
  ['quote' => 'Minha mãe voltou a sorrir nas fotos.',                       'name' => 'Ricardo', 'relation' => 'filho da Sra. Helena'],
  ['quote' => 'O encontro trimestral mudou minha relação com o cuidado dela.', 'name' => 'Camila', 'relation' => 'filha da Sra. Beatriz'],
];

$whatsapp = 'https://wa.me/556196829827?text=' . rawurlencode('Olá! Tenho interesse em conhecer o Altevita Multi e gostaria de agendar uma conversa.');
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Altevita Multi — Para quem você ama, o cuidado mais completo que existe.</title>
  <meta name="description" content="Altevita Multi: um programa reservado de cuidado completo, escrito a muitas mãos por psicologia, nutrição, fisioterapia, terapia ocupacional e fonoaudiologia." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- TopBar -->
  <header class="topbar">
    <div class="topbar-inner">
      <a href="#capa" aria-label="Altevita Multi">
        <img class="topbar-logo" src="assets/altevita-multi-logo.png" alt="Altevita Multi" />
      </a>
      <a class="topbar-cta tracking-eyebrow" href="#convite">
        <span class="hairline" aria-hidden="true"></span>
        Agendar conversa
      </a>
    </div>
  </header>

  <!-- Floating CTA -->
  <a class="floating-cta" href="#convite" aria-label="Agendar conversa com a coordenação">
    <span class="dot" aria-hidden="true"></span>
    Agendar conversa
  </a>

  <main>

    <!-- CAPA -->
    <section id="capa" class="capa">
      <p class="reveal tracking-eyebrow text-leaf-deep eyebrow">ALTEVITA MULTI — UM PROGRAMA RESERVADO</p>
      <img class="reveal reveal-delay-1 logo-big" src="assets/altevita-multi-logo.png" alt="Altevita Multi" />
      <h1 class="reveal reveal-delay-2">Multi</h1>
      <p class="reveal reveal-delay-3 lead">Para quem você ama,<br />o cuidado mais completo que existe.</p>
    </section>

    <!-- SEÇÃO 1 -->
    <section class="section-pad">
      <div class="container-narrow">
        <div class="reveal section-num">
          <span class="roman">i</span>
          <span class="hairline" aria-hidden="true"></span>
          <span class="tracking-eyebrow">A verdade que ninguém diz</span>
        </div>
        <p class="reveal reveal-delay-1 h-display size-3xl sm-size-5xl mt-12">
          Toda família que confia o cuidado de um pai ou de uma mãe a outras mãos se faz, em silêncio, a mesma pergunta:
          <span class="font-serif-italic text-leaf-deep"> estou fazendo o suficiente?</span>
        </p>
        <p class="reveal reveal-delay-2 lead-prose mt-10">O Altevita Multi nasceu para que essa pergunta, enfim, encontre repouso.</p>
        <div class="reveal reveal-delay-3 resposta">
          <p class="ornament tracking-eyebrow text-leaf-deep mb-8">resposta</p>
          <p class="h-display size-6xl sm-size-8xl">Sim. <span class="font-serif-italic text-leaf-deep">Você está.</span></p>
        </div>
      </div>
    </section>

    <!-- SEÇÃO 2 -->
    <section class="section-pad deep-bg">
      <div class="container-prose">
        <div class="reveal section-num">
          <span class="roman">ii</span>
          <span class="hairline" aria-hidden="true"></span>
          <span class="tracking-eyebrow">O que muda quando o cuidado é completo</span>
        </div>
        <div class="grid-12">
          <div class="reveal reveal-delay-1 md-col-5">
            <p class="h-display size-5xl sm-size-7xl" style="line-height:0.95;">Há cuidado.</p>
            <p class="h-display size-5xl sm-size-7xl font-serif-italic text-leaf-deep mt-4" style="line-height:0.95;">E há cuidado completo.</p>
          </div>
          <div class="reveal reveal-delay-2 md-col-6">
            <p class="lead-prose">A diferença está no que se vê e, sobretudo, no que se sente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO 3 -->
    <section class="section-pad">
      <div class="container-narrow text-center">
        <p class="reveal tracking-eyebrow text-leaf-deep">Para poucos. Por escolha.</p>
        <p class="reveal reveal-delay-1 h-display size-4xl sm-size-6xl mt-12">
          O Multi não é para todos.<br />
          <span class="font-serif-italic text-leaf-deep">É para quem deseja</span><br />
          o cuidado mais inteiro que existe.
        </p>
        <div class="reveal reveal-delay-2 v-rule" aria-hidden="true"></div>
        <p class="reveal reveal-delay-3 lead-prose mt-10" style="max-width:36rem;margin-left:auto;margin-right:auto;">
          Um programa reservado a famílias que entendem que presença, escuta e delicadeza não são detalhes são tudo.
        </p>
      </div>
    </section>

    <!-- SEÇÃO 4 — Os cinco olhares -->
    <section class="section-pad ink-bg">
      <div class="container-prose">
        <p class="reveal tracking-eyebrow text-leaf-soft text-center">iv — os cinco olhares</p>
        <h2 class="reveal reveal-delay-1 h-display size-4xl sm-size-6xl text-center mt-8 mb-20 text-paper">
          Os cinco olhares<br />
          <span class="font-serif-italic text-leaf-soft">sobre quem você ama.</span>
        </h2>
        <div class="pillars">
          <?php foreach ($pillars as $i => $p):
            $delay = ($i % 4) + 1; ?>
            <div class="reveal reveal-delay-<?= $delay ?> pillar">
              <p class="tracking-eyebrow num">0<?= $i + 1 ?></p>
              <h3><?= htmlspecialchars($p['name'], ENT_QUOTES, 'UTF-8') ?></h3>
              <p><?= htmlspecialchars($p['phrase'], ENT_QUOTES, 'UTF-8') ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <!-- SEÇÃO 5 -->
    <section class="section-pad">
      <div class="container-narrow text-center">
        <div class="reveal section-num" style="justify-content:center;">
          <span class="roman">v</span>
          <span class="hairline" aria-hidden="true"></span>
          <span class="tracking-eyebrow">Um time inteiro. Uma única pessoa.</span>
        </div>
        <p class="reveal reveal-delay-1 h-display size-3xl sm-size-5xl mt-14">
          Toda semana, os cinco olhares do Multi se encontram em torno de uma única intenção:
        </p>
        <p class="reveal reveal-delay-2 font-serif-italic text-leaf-deep size-4xl sm-size-6xl mt-10">
          Cuidar de quem você ama.
        </p>
        <p class="reveal reveal-delay-3 lead-prose mt-12">Não há dois planos iguais porque não há duas histórias iguais.</p>
      </div>
    </section>

    <!-- SEÇÃO 6 — A Jornada -->
    <section class="section-pad deep-bg">
      <div class="container-prose">
        <p class="reveal tracking-eyebrow text-leaf-deep">vi — a jornada</p>
        <h2 class="reveal reveal-delay-1 h-display size-5xl sm-size-7xl mt-6 mb-20">A jornada.</h2>
        <ol class="journey">
          <?php foreach ($journey as $i => $step):
            $delay = ($i % 4) + 1; ?>
            <li class="reveal reveal-delay-<?= $delay ?> journey-step">
              <span class="roman"><?= $step['roman'] ?></span>
              <h3><?= htmlspecialchars($step['title'], ENT_QUOTES, 'UTF-8') ?></h3>
              <p class="lead-prose"><?= htmlspecialchars($step['text'], ENT_QUOTES, 'UTF-8') ?></p>
            </li>
          <?php endforeach; ?>
        </ol>
      </div>
    </section>

    <!-- SEÇÃO 7 — O que você recebe -->
    <section class="section-pad">
      <div class="container-prose">
        <p class="reveal tracking-eyebrow text-leaf-deep text-center">vii — o que você recebe</p>
        <h2 class="reveal reveal-delay-1 h-display size-4xl sm-size-6xl text-center mt-8 mb-20">O que você recebe.</h2>
        <div class="deliverables">
          <?php foreach ($deliverables as $i => $d):
            $delay = ($i % 4) + 1; ?>
            <div class="reveal reveal-delay-<?= $delay ?> item">
              <span class="label"><?= htmlspecialchars($d['label'], ENT_QUOTES, 'UTF-8') ?></span>
              <h3><?= htmlspecialchars($d['name'], ENT_QUOTES, 'UTF-8') ?></h3>
              <p class="lead-prose" style="font-size:1rem;"><?= htmlspecialchars($d['text'], ENT_QUOTES, 'UTF-8') ?></p>
            </div>
          <?php endforeach; ?>
        </div>
        <p class="reveal reveal-delay-3 font-serif-italic text-leaf-deep size-3xl sm-size-5xl text-center mt-20">
          Cuidado que você sente. E também vê.
        </p>
      </div>
    </section>

    <!-- SEÇÃO 8 -->
    <section class="section-pad ink-bg">
      <div class="container-narrow">
        <p class="reveal tracking-eyebrow text-leaf-soft">viii — o que uma família leva</p>
        <p class="reveal reveal-delay-1 h-display size-3xl sm-size-5xl mt-12 text-paper" style="line-height:1.18;">
          Você não está contratando um cuidado.<br /><br />
          <span class="text-paper-70">Você está</span> escolhendo dormir mais tranquilo à noite.<br />
          <span class="text-paper-70">Escolhendo</span> ter o que contar aos seus irmãos.<br />
          <span class="text-paper-70">Escolhendo</span> saber, no fundo do peito, que está fazendo o melhor possível por quem te criou.
        </p>
        <div class="reveal reveal-delay-2 mt-20" style="padding-top:3rem;border-top:1px solid hsl(var(--paper) / 0.2);text-align:center;">
          <p class="font-serif-italic text-paper size-4xl sm-size-6xl">
            O Multi entrega, no fundo,<br />uma única coisa: <span class="text-leaf-soft">paz.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- SEÇÃO 9 — Depoimentos -->
    <section class="section-pad">
      <div class="container-prose">
        <p class="reveal tracking-eyebrow text-leaf-deep text-center">ix — a diferença que não se explica</p>
        <p class="reveal reveal-delay-1 h-display size-3xl sm-size-5xl text-center mt-10 mb-4">
          Famílias que escolhem o Multi<br />
          <span class="font-serif-italic text-leaf-deep">raramente voltam atrás.</span>
        </p>
        <p class="reveal reveal-delay-2 lead-prose text-center mt-8" style="max-width:40rem;margin-left:auto;margin-right:auto;">
          Não por um contrato. Por um cuidado que, uma vez sentido, não se troca.
        </p>
        <div class="testimonials">
          <?php foreach ($testimonials as $i => $t):
            $delay = ($i % 4) + 1; ?>
            <blockquote class="reveal reveal-delay-<?= $delay ?> testimonial">
              <span class="mark" aria-hidden="true">“</span>
              <p class="quote"><?= htmlspecialchars($t['quote'], ENT_QUOTES, 'UTF-8') ?></p>
              <span class="line" aria-hidden="true"></span>
              <footer><span class="who"><?= htmlspecialchars($t['name'], ENT_QUOTES, 'UTF-8') ?></span>, <?= htmlspecialchars($t['relation'], ENT_QUOTES, 'UTF-8') ?></footer>
            </blockquote>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <!-- SEÇÃO 10 — Convite -->
    <section id="convite" class="section-pad deep-bg">
      <div class="container-narrow text-center">
        <p class="reveal tracking-eyebrow text-leaf-deep">x — o convite</p>
        <p class="reveal reveal-delay-1 h-display size-5xl sm-size-7xl mt-12" style="line-height:1.05;">
          Algumas decisões<br />não se explicam.<br />
          <span class="font-serif-italic text-leaf-deep">Se sentem.</span>
        </p>
        <p class="reveal reveal-delay-2 lead-prose mt-12" style="max-width:36rem;margin-left:auto;margin-right:auto;">
          Converse com quem cuida da Altevita. Conheça o Multi de perto. E descubra se é também isto que você sonha para quem você ama.
        </p>
        <a class="reveal reveal-delay-3 cta-link" href="<?= htmlspecialchars($whatsapp, ENT_QUOTES, 'UTF-8') ?>" target="_blank" rel="noopener">
          <span class="tracking-eyebrow">Agendar conversa com a coordenação</span>
          <span class="arrow" aria-hidden="true"></span>
        </a>
      </div>
    </section>

    <!-- MANIFESTO -->
    <section class="manifesto">
      <div class="inner">
        <p class="reveal ornament tracking-eyebrow text-leaf-deep mb-16">manifesto</p>
        <p class="reveal reveal-delay-1 h-display">Há lugares onde se envelhece.</p>
        <p class="reveal reveal-delay-2 h-display mt-6">E há a <span class="font-serif-italic text-leaf-deep">Altevita Multi</span> —</p>
        <p class="reveal reveal-delay-3 h-display mt-6">onde se vive plenamente,</p>
        <p class="reveal reveal-delay-4 font-serif-italic text-leaf-deep size-4xl sm-size-6xl mt-6">até o fim.</p>
        <div class="reveal reveal-delay-4 sign">
          <span class="hairline" aria-hidden="true"></span>
          <img src="assets/altevita-multi-logo.png" alt="Altevita Multi" />
          <p class="tracking-eyebrow text-ink-muted mt-2">Grupo Altevita</p>
        </div>
      </div>
    </section>

  </main>

  <script src="script.js"></script>
</body>
</html>
