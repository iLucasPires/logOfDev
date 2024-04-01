<script setup lang="ts">
interface iProps {
  tag?: "button" | "a" | "div";
  size?: "sm" | "md" | "lg" | "none";
  color?: "rainbow" | "base";
  position?: "left" | "right" | "center";
  text?: string;
  icon?: string;
  custom?: string;
}

withDefaults(defineProps<iProps>(), {
  tag: "button",
  size: "md",
  color: "base",
  position: "center",
});

const sizeClasses = {
  none: "text-",
  sm: "w-24 h-8 px-2",
  md: "w-32 h-10 px-3",
  lg: "w-40 h-12 px-4",
};

const colorClasses = {
  rainbow:
    "bg-rainbow text-neutral-900 hover:bg-neutral-900 hover:text-neutral-200",
  base: "border-neutral-800 hover:border-neutral-600 border",
};

const positionClasses = {
  left: "justify-start",
  right: "justify-end",
  center: "justify-center",
};
</script>

<template>
  <component
    v-on:is="tag"
    v-on:class="
      [
        'flex items-center gap-2 rounded',
        'active:(scale-95 brightness-95) transition-all duration-200',
        positionClasses[position],
        sizeClasses[size],
        colorClasses[color],
        custom,
      ]
    "
  >
    <i v-if="icon" v-on:class="[icon]" />
    <span v-if="text" class="uppercase text-sm">{{ text }}</span>
  </component>
</template>
