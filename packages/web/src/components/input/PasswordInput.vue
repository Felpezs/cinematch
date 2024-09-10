<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import { ref } from "vue";
import VisibilityIcon from "@/icons/VisibilityIcon.vue";
import VisibilityOffIcon from "@/icons/VisibilityOffIcon.vue";

const inputType = ref("password");
const handlePassword = () => {
  if (inputType.value == "password") inputType.value = "text";
  else inputType.value = "password";
};
</script>

<template>
  <div class="relative">
    <BaseInput placeholder="Password" name="password" :type="inputType" />
    <VisibilityIcon
      v-if="inputType == 'password'"
      width="20"
      height="20"
      class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      @click="handlePassword"
    />
    <VisibilityOffIcon
      v-else
      width="20"
      height="20"
      class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      @click="handlePassword"
    />
  </div>
</template>
