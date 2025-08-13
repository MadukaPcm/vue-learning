
<template>
    <div class="bg-info rounded p-2 m-2">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out! \n{{ email }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('madukapcm@gmail.com');

</script>

<style scoped>

</style>