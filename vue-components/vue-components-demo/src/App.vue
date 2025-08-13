<template>
  <div class="container">
    <div class="container">{{ message }}</div>
    <contact-us></contact-us>

    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Local import
import ButtonCounter from '@/components/ButtonCounter.vue';

const message = ref('Hello Vue!');

</script>

<style scoped>

</style>  