
<template>
    <div class="bg-info rounded p-2 m-2 mb-4">
        <div class="row">
            <div class="col-5">
                <h1>Name: {{ name }}</h1>
                <p>Email: {{ email }}</p>
                <p>Phone: {{ phone }}</p>
            </div>
            <div class="col-3">
                <button @click="toggleFavourite()" :class="[isFavourite ? 'btn btn-warning form-control' : 'btn btn-secondary form-control']">
                    {{ isFavourite ? 'Remove' : 'Add' }} to favourite
                </button>
            </div>
            <div class="col-4">
                <LuckyNumber></LuckyNumber>
            </div>
        </div>
        <span class="float-end small p-2">** This contact info belongs to {{ owner ?? '' }}</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import LuckyNumber from './LuckyNumber.vue';

// const props = defineProps(["name","email","phone","owner"]); Receiving props with no validation.
const props = defineProps({
    name: {type: String,required: true},
    email: {type: String, required: true}, 
    phone: {type: Number, required: true}, 
    owner: { type: String, required: false},
    isFavourite: {type: Boolean, required:true},
})

// Defing/initializing emits..
const emit = defineEmits(["update-favourite"])

function toggleFavourite(){
    emit("update-favourite",{isFavourite: props.isFavourite, name: props.name})
}

</script>

<style scoped>

</style>