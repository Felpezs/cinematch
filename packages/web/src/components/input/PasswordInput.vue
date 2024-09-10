<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import CloseIcon from "../../icons/CloseIcon.vue";
import { ref } from "vue";

const inputType = ref("password");
const handlePassword = () => {
  if (inputType.value == "password") inputType.value = "text";
  else inputType.value = "password";
};
</script>

<template>
  <div class="relative">
    <BaseInput placeholder="Password" name="password" :type="inputType" />
    <CloseIcon
      width="20"
      height="20"
      class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      @click="handlePassword"
    />
  </div>
</template>
