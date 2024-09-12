<script setup lang="ts">
import PasswordInput from "../input/PasswordInput.vue";
import BaseInput from "../input/BaseInput.vue";
import ModalDialog from "./ModalDialog.vue";
import ButtonComponent from "../ButtonComponent.vue";
import GoogleIcon from "@/icons/GoogleIcon.vue";
</script>

<template>
  <ModalDialog>
    <template #title>Sign Up</template>
    <form class="flex w-full flex-col gap-4">
      <BaseInput type="text" name="username" placeholder="Username" />
      <BaseInput type="email" name="email" placeholder="Email" />
      <PasswordInput />
    </form>
    <div class="flex w-full flex-col gap-4">
      <ButtonComponent variant="primary" class="w-full">
        Sign Up</ButtonComponent
      >
      <div class="relative">
        <span
          class="rounded full mx-auto block w-fit rounded-full border-[1px] bg-primary-500 px-4 py-1 text-sm before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:h-[1px] before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-secondary-500 before:text-base before:content-['']"
          >Or</span
        >
      </div>

      <ButtonComponent variant="secondary" class="w-full text-secondary-500">
        <template #icon><GoogleIcon /></template>
        Sign up with google</ButtonComponent
      >
    </div>
    <span
      >Already Have an Account ?
      <span role="link" class="font-bold text-accent">Login</span></span
    >
  </ModalDialog>
</template>
