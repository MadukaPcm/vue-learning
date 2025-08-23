<template>
    <component :is="isFirstComponent ? FirstComponent : SecondComponent"></component>

    <button class="btn btn-outline-success" @click="isFirstComponent = !isFirstComponent">Toggle Component</button>
</template>

<script setup>
import { ref } from 'vue';
import FirstComponent from './FirstComponent.vue';
import SecondComponent from './SecondComponent.vue';

const isFirstComponent = ref(true);

</script>