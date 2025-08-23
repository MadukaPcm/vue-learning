<template>
    <div class="container p-2 m-2">
        <h5>Add New Contact</h5>
        <form @submit.prevent="AddNewContact()">
            <div class="row">
            <div class="col-4 form-input">
                <input type="text" v-model.trim="contact.name" placeholder="Enter contact name" required>
            </div>
            <div class="col-4">
                <input type="email" v-model.trim="contact.email" placeholder="Enter contact email" required>
            </div>
            <div class="col-4">
                <input type="text" v-model.trim="contact.phone" placeholder="Enter contact phone" required>
            </div>
            </div>
            <div class="col-4 p-2 form-control float-center">
            <button class="btn btn-outline-success float-center">Add Contact</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref,reactive,defineEmits } from 'vue';

// Adding new contact ...
const contact = reactive({
  name: "",
  email: "",
  phone: ""
});

const emit = defineEmits(["add-contact"])

function AddNewContact(){
    emit("add-contact",
        {
            name: contact.name, 
            email: contact.email, 
            phone: contact.phone
        }
    );
    console.log(contact);
    contact.name = "";
    contact.email = "";
    contact.phone = "";
}
</script>

<style scoped>

</style>