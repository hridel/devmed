export const ARTICLES_PER_PAGE = 5;

export type MenuItem = {
  label: string;
  href: string;
};

export const MainMenuItems: MenuItem[] = [
  { label: "Články", href: "/" },
  { label: "Časopisy", href: "/casopisy" },
  { label: "Specializace", href: "/specializace" },
  { label: "Vzdělávání", href: "/vzdelavani" },
  { label: "Kongresy", href: "/kongresy" },
  { label: "Videa", href: "/videa" },
  { label: "Podcasty", href: "/podcasty" },
  { label: "Praxe", href: "/praxe" },
];

export const SubheaderItems: MenuItem[] = [
  { label: "Hlavní stránka", href: "/" },
  { label: "Z medicíny", href: "/stitky/z-mediciny" },
  { label: "Technologie", href: "/stitky/technologie" },
  { label: "Lifestyle", href: "/stitky/lifestyle" },
  { label: "Rozhovory", href: "/stitky/rozhovory" },
  { label: "Názory", href: "/stitky/nazory" },
  { label: "Infografika", href: "/stitky/infografika" },
];
