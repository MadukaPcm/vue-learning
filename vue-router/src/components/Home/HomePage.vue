<template>
    <h1>Home-page...</h1>

    <button @click="goToContactPage()">Contact Us</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToContactPage(){
    router.push("/contact");
}
</script>