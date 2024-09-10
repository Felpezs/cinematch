<script setup lang="ts">
const variants = {
  primary: "bg-accent",
  secondary: "bg-accent bg-opacity-10 border-2 border-accent",
};

defineProps<{ variant: keyof typeof variants }>();
</script>

<template>
  <button
    class="text-primary-500 rounded-full py-3 text-base"
    :class="[
      variants[variant],
      $slots.icon ? 'flex items-center justify-center gap-2 pl-4 pr-6' : 'px-6',
    ]"
  >
    <slot v-if="$slots.icon" name="icon"></slot>
    <slot></slot>
  </button>
</template>
