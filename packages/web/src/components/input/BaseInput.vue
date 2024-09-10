<script setup lang="ts">
import { ref, useId } from "vue";

defineOptions({
  inheritAttrs: false,
});
defineProps<{ placeholder: string }>();

const id = useId();
const inputValue = ref("");

const handleChange = (e: Event) => {
  const input = e.currentTarget as HTMLInputElement;
  inputValue.value = input.value;
};
</script>

<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      :id="id"
      :value="inputValue"
      class="peer w-full rounded-lg border-2 border-secondary-500 bg-transparent py-3 text-base outline-none autofill:shadow-input-autofill focus:border-accent"
      :class="$slots.icon ? 'pl-3 pr-[44px]' : 'px-3'"
      @change="handleChange"
    />
    <label
      :for="id"
      class="absolute left-3 -translate-y-1/2 bg-primary-500 px-1 capitalize text-secondary-400 transition-all ease-in-out peer-autofill:top-0 peer-autofill:text-sm peer-focus-within:top-0 peer-focus-within:text-sm peer-focus-within:text-accent"
      :class="inputValue.length > 0 ? 'top-0 text-sm' : 'top-1/2'"
      >{{ placeholder }}</label
    >
  </div>
</template>
