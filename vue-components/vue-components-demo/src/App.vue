<template>
  <div class="container">
    <div class="row p-2 mb-2">
      <div class="col-6">
        Owner Name: <input v-model="ownerName" />
      </div>
      <div class="col-6">
        Max Lucky Number: <input v-model.number="maxNumber" />
      </div>
    </div>
    <AddContactForm
    @add-contact="onAddNewContact($event)"
    ></AddContactForm>
    <div class="row">
      <div class="col col-12" v-for="contact in contacts" :key="contact.name">
        <Contact
        :name="contact.name"
        :email="contact.email"
        :phone="contact.phone"
        :owner="contact.owner"
        :isFavourite="contact.isFavourite"
        @update-favourite="contact.isFavourite = onUpdateFavourite($event,contact.owner)"
        ></Contact>
        </div>
    </div>

    <BaseDynamicComponent></BaseDynamicComponent>
  </div>
</template>

<script setup>
import { ref,reactive, provide } from 'vue';
// Local import
import Contact from '@/components/Contact.vue';
import AddContactForm from '@/components/AddContactForm.vue';
import BaseDynamicComponent from './components/dynamic-components/BaseDynamicComponent.vue';

const message = ref('Hello Vue!');
const ownerName = ref("");

const maxNumber = ref(100);
provide("maxLuckyNumber", maxNumber);

const contacts = reactive([
  {
    name: "Mussa Balaa Konte",
    email: "mussabalaakonte@gmail.com",
    phone: 7550141533,
    owner: ownerName,
    isFavourite: false,
  },
  {
    name: "Mtoto Mdogo",
    email: "mtotomdogo@gmail.com",
    phone: 620141544,
    owner: ownerName,
    isFavourite: true,
  },
  {
    name: "Fundi Omary",
    email: "fundi.omary@gmail.com",
    phone: 620141582,
    owner: ownerName,
    isFavourite: false,
  }
]);

function onUpdateFavourite(oldValueFromChildComponent,ownerName){
  console.log("Name: "+oldValueFromChildComponent.name);
  console.log("Owner name: "+ownerName);
  return !oldValueFromChildComponent.isFavourite;
}

// on-adding new contact from in Emit action.
function onAddNewContact(newContactObjectFromForm){
  newContactObjectFromForm.isFavourite = true;
  newContactObjectFromForm.owner = ownerName.value;
  contacts.push(newContactObjectFromForm);
}


</script>

<style scoped>

</style>  