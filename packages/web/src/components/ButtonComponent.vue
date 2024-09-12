<script setup lang="ts">
const variants = {
  primary: "bg-accent",
  secondary: "border-2 border-accent",
};

defineOptions({
  inheritAttrs: false,
});
defineProps<{ variant: keyof typeof variants }>();
</script>

<template>
  <button
    v-bind="$attrs"
    class="overflow-hidden rounded-full text-base text-primary-500"
    :class="variants[variant]"
  >
    <div
      class="items-center justify-center gap-2 bg-opacity-0 py-3 capitalize transition-colors hover:bg-opacity-10"
      :class="[
        $slots.icon ? 'flex pl-4 pr-6' : 'px-6',
        variant == 'secondary' ? 'bg-primary-700' : 'bg-primary-500',
      ]"
    >
      <slot v-if="$slots.icon" name="icon"></slot>
      <slot></slot>
    </div>
  </button>
</template>
