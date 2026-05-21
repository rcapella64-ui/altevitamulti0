# Altevita Multi — Versão HTML/CSS/JS/PHP

Versão estática espelhada do site React, pronta para upload em hospedagem comum (Hostinger, KingHost, cPanel, etc.).

## Conteúdo

- `index.php` — página única com todo o conteúdo (mesma estrutura da versão React).
- `styles.css` — estilos (tokens HSL, tipografia Cormorant Garamond + Inter).
- `script.js` — animação `reveal` ao rolar, TopBar com fundo ao rolar, CTA flutuante.
- `assets/altevita-multi-logo.png` — logo do Altevita Multi.

As fontes são carregadas via Google Fonts (mesma família da versão React).

## Como visualizar localmente

Se a hospedagem tem PHP (recomendado, já é o padrão na maioria), basta enviar a pasta inteira para o servidor.

Para testar localmente com PHP:

```bash
cd html-version
php -S localhost:8000
```

Depois abra http://localhost:8000

## Sem PHP?

Se preferir HTML puro, basta acessar a URL com `?html=1` ou converter manualmente — o conteúdo dinâmico (pilares, jornada, entregas, depoimentos) está em arrays PHP no topo do `index.php` apenas para manutenção mais simples.

## CTA

O botão "Agendar conversa com a coordenação" abre o WhatsApp em
`+55 61 9682-9827` com mensagem pré-preenchida.
