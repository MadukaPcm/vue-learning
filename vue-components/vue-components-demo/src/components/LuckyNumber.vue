<template>
    <div class="float-end">
        <button class="btn btn-outline-danger" @click="generateLuckNumber()">
            <span v-if="luckyNumber === 0">
                Generate luckyNumber <br />
                Range { 1 - {{ maxNumber }}}
            </span>
            <span v-else>
                Luck Number {{ luckyNumber }} <br />
                CLick To Generate luckyNumber
            </span>
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps, inject } from 'vue';
const luckyNumber = ref(0);
const maxLuckyNumber = inject("maxLuckyNumber");

function generateLuckNumber(){
    luckyNumber.value = Math.floor(Math.random() * maxLuckyNumber.value);
    console.log("Luck Number: "+luckyNumber.value);
}

</script>