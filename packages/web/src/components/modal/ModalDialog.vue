<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import CloseIcon from "../../icons/CloseIcon.vue";

const dialog = useTemplateRef("dialog");

onMounted(() => {
  if (dialog.value) dialog.value.showModal();
});
</script>

<template>
  <dialog
    ref="dialog"
    class="left-1/2 top-1/2 w-[450px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-12 rounded-md bg-primary-500 p-12 text-secondary-500 open:flex"
  >
    <CloseIcon
      class="pointer absolute right-[31px] top-[53px]"
      role="button"
      tabindex="0"
      @click="dialog?.close()"
      @keypress="dialog?.close()"
    />
    <h2 class="text-center text-xl font-bold">
      <slot name="title"></slot>
    </h2>
    <slot>texo</slot>
  </dialog>
</template>
