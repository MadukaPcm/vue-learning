<template>
    <ChildSlotComponent>
        <template v-slot:default>
            <p class="pt-2">Learning SLOTS: default slots.</p>
        </template>
        <template v-slot:moreInto>
            SLOTS: Named Slots...
        </template>
        <template v-slot:learnSlot>
            <button @click="showMessage()">What will we learn ?</button><br />
            <h4 class="text-success">{{ message }}</h4>
        </template>
    </ChildSlotComponent>
</template>

<script setup>
import { ref } from 'vue';
import ChildSlotComponent from './ChildSlotComponent.vue';

const message = ref("");

function showMessage(){
    message.value = "We will learn how to use vue slots!";
}

</script>