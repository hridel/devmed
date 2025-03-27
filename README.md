# Popis aplikace

Tato aplikace je postavena na frameworku **Next.js 15**, který je známý svou jednoduchostí, flexibilitou a výkonností pro vývoj moderních webových aplikací a API. Next.js poskytuje výhody jako server-side rendering (SSR), statické generování stránek (SSG) a automatické rozdělování kódu, což vede k rychlejšímu načítání stránek a lepšímu uživatelskému zážitku.

## Package Manager

Pro správu závislostí a balíčků používám **pnpm** (Performant Node Package Manager). Pnpm je rychlejší a efektivnější než tradiční npm, protože využívá hard-linky a deduplikaci balíčků, což vede k menší spotřebě místa na disku a rychlejší instalaci balíčků.

## CSS Framework

Pro stylování aplikace používám **Tailwind CSS 4**. Tailwind CSS je utility-first CSS framework, který umožňuje rychlé a efektivní vytváření responzivních a moderních uživatelských rozhraní.

## Code Quality Tools

Pro zajištění kvality kódu a konzistentního formátování používám následující nástroje:

- **ESLint**: Nástroj pro statickou analýzu kódu, který pomáhá identifikovat a opravit problémy v JavaScriptovém kódu.
- **Prettier**: Nástroj pro automatické formátování kódu, který zajišťuje konzistentní styl napříč celým projektem.

## REST API

Pro komunikaci mezi klientem a serverem jsem zvolil přístup přes **REST API** namísto **GraphQL** z několika důvodů:

1. **Kompatibilita s Next.js App Directory**: REST API se snadno integruje s novou strukturou Next.js App Directory, což umožňuje efektivní využití Server Components.
2. **Lepší podpora pro SEO**: REST API v kombinaci s Next.js umožňuje snadnější implementaci Server-Side Renderingu (SSR) a Static Site Generation (SSG), což výrazně zlepšuje SEO webu.
3. **Optimalizace výkonu**: Next.js nabízí vestavěné optimalizace pro REST API, včetně automatického code splittingu a optimalizace obrázků, což vede k rychlejšímu načítání stránek.
4. **Efektivní cachování**: REST API umožňuje efektivnější implementaci cachování na úrovni jednotlivých endpointů, což je klíčové pro optimalizaci výkonu rozsáhlých webových aplikací.

## Lokální vývoj

Pro lokální vývoj postupujte podle následujících kroků:

1. Naklonujte repozitář:
   ```bash
   git clone <repository-url>
   ```
2. Přejděte do adresáře projektu:
   ```bash
   cd <project-directory>
   ```
3. Nainstalujte závislosti pomocí pnpm:
   ```bash
   pnpm install
   ```
4. Vytvořte soubor `.env` a nastavte potřebné environmentální proměnné. Příklad obsahu souboru `.env`:
   ```env
   API_ITEMS_BASE_URL=""
   IMGS_BASE_URL=""
   DEFAULT_ARTICLE_IMG=""
   ```
5. Spusťte vývojový server:
   ```bash
   pnpm dev
   ```
6. Otevřete prohlížeč a přejděte na adresu `http://localhost:3000`.

`