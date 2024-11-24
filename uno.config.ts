import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

const shortcuts = {
  row: "flex flex-row",
  col: "flex flex-col",
  center: "flex items-center justify-center",

  "icon-rainbow": "text-[var(--vp-c-brand-1)]",
  "border-rainbow": "border-[var(--vp-c-brand-1)]",
  "ring-rainbow": "ring-[var(--vp-c-brand-1)]",

  "animate-click":
    "active:(scale-95 brightness-95) transition-all duration-200",

  "divide-primary":
    "light:divide-neutral-400 dark:divide-neutral-800 divide-y-1",
  "border-primary":
    "rounded light:border-neutral-400 dark:border-neutral-800 border-1",
  "btn-primary": "p-2 rounded border-primary row items-center gap-2",

  "bg-primary-20": "light:bg-neutral-100/20 dark:bg-neutral-900/20",

  "bg-primary": "light:bg-neutral-100 dark:bg-neutral-950",
  "btn-rainbow": "!bg-rainbow hover:bg-rainbow",
  "bg-rainbow":
    "bg-gradient-to-r from-[var(--vp-c-brand-1)] to-[var(--vp-c-brand-next)]",
  "text-rainbow": "bg-clip-text !text-transparent bg-rainbow",
};

export default defineConfig({
  shortcuts,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "Exo 2",
        serif: "Exo 2",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
