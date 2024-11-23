<template>
  <component :is="$attrs.layout || 'section'" class="px-5 space-y-8 w-rel">
    <div class="space-y-2">
      <h1 class="text-rainbow uppercase font-black" v-if="$slots.title">
        <slot name="title" />
      </h1>
      <p class="w-4/5" v-if="$slots.desc">
        <slot name="desc" />
      </p>
    </div>

    <div class="space-y-8">
      <slot />
    </div>
  </component>
</template>
