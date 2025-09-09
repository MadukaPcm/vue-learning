
<template>
    <h1>Product details......</h1>
    <div v-if="route.params.productId">
        <h2>Product Id: {{ route.params.productId }}</h2>
    </div>
    <div v-else>
        <h2>No product found!</h2>
    </div>
    <!-- <p>Product Id: {{ route.params.productId }}</p> -->
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params);

</script>