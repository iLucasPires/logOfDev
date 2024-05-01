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
  "row": "flex flex-row",
  "col": "flex flex-col",
  "w-rel": "w-full md:w-screen-md lg:w-screen-lg xl:w-screen-xl",
  "icon-rainbow": "text-[var(--vp-c-brand-1)]",
  "border-rainbow": "border-[var(--vp-c-brand-1)]",
  "ring-rainbow": "ring-[var(--vp-c-brand-1)]",
  
  "animate-click": "active:(scale-95 brightness-95) transition-all duration-200",

  "btn-rainbow": "bg-rainbow text-white hover:bg-rainbow-dark",
  "btn-neutral": "border border-neutral-800 text-neutral-400 p-2 rounded-md",
  "bg-rainbow": "bg-gradient-to-r from-[var(--vp-c-brand-1)] to-[var(--vp-c-brand-next)]",
  "text-rainbow": "bg-clip-text text-transparent bg-rainbow",

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
