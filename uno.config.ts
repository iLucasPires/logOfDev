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
import { presetExtra } from "unocss-preset-extra";

export default defineConfig({
  shortcuts: {
    "maxp": "p-5 2xl:px-100",
    "bg-rainbow": "bg-gradient-to-r from-[var(--vp-c-brand-1)] to-[var(--vp-c-brand-next)]",
    "text-rainbow": "bg-clip-text text-transparent bg-rainbow",
    "icon-rainbow": "text-[var(--vp-c-brand-1)]",
    "border-rainbow": "border-[var(--vp-c-brand-1)]",
    "ring-rainbow": "ring-[var(--vp-c-brand-1)]",
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetExtra(),
    presetWebFonts({
      fonts: {
        sans: "Exo 2",
        serif: "Exo 2",
      },
    }),
  ],
  theme: { colors: {} },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
