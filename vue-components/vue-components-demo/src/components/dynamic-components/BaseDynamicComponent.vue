<template>
    <!-- Using / wrapping component within keep-alive the widgets will not be unmounted [ using include and exlude for specific or multiple ] -->
    <keep-alive :include="['FirstComponent',]" :exclude="['SecondComponent']"> 
        <component :is="isFirstComponent ? FirstComponent : SecondComponent"></component>
    </keep-alive>

    <button class="btn btn-outline-success" @click="isFirstComponent = !isFirstComponent">Toggle Component</button>

    <br />
    <br />
</template>

<script setup>
import { ref } from 'vue';
import FirstComponent from './FirstComponent.vue';
import SecondComponent from './SecondComponent.vue';

const isFirstComponent = ref(true);

</script>