
<template>
    <h1>Product List page...</h1>
    <p>List of products...</p>
    <div v-for="(product, id) in products" :key="id">
        <router-link :to="`/productDetail/${product.id}/`"> <span>{{ product.name }}</span></router-link>
    </div>
</template>

<script setup>

const products = [
    {id: 1, name: "Product 1", category: "Category A"},
    {id: 2, name: "Product 2", category: "Category B"},
    {id: 3, name: "Product 3", category: "Category C"}
]
</script>