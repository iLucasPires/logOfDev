<script lang="ts" setup>
interface iProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "bold" | "black";
  fontCase?: "upper" | "lower" | "capitalize";
  color?: "rainbow" | "base";
  text?: string;
  custom?: string;
}

withDefaults(defineProps<iProps>(), {
  tag: "h1",
  size: "md",
  fontCase: "capitalize",
  weight: "normal",
});

const sizeClasses = {
  sm: "md:text-2xl text-xl",
  md: "md:text-4xl text-3xl",
  lg: "md:text-6xl text-5xl",
  xl: "md:text-8xl text-7xl",
};

const colorClasses = {
  h1: "text-neutral-200",
  h2: "text-neutral-300",
  h3: "text-neutral-400",
  h4: "text-neutral-500",
  p: "text-neutral-500",

  rainbow: "text-rainbow",
  base: "text-neutral-500",
  span: "text-neutral-500",
};

const caseClasses = {
  upper: "uppercase",
  lower: "lowercase",
  capitalize: "capitalize",
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  bold: "font-bold",
  black: "font-black",
};
</script>

<template>
  <component
    :is="tag"
    :class="[
      sizeClasses[size],
      caseClasses[fontCase],
      weightClasses[weight],
      colorClasses[color || tag],
      custom,
    ]"
  >
    {{ text }}
  </component>
</template>
