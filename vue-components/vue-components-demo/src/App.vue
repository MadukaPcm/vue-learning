<template>
  <div class="container">
    <AddContactForm
    @add-contact="onAddNewContact($event)"
    ></AddContactForm>
    <div class="container">{{ message }}</div>
    <span class="p-2">
      Contacts owner name: <input v-model="ownerName"></input>
    </span>
    <div v-for="contact in contacts" :key="contact.name">
      <Contact
      :name="contact.name"
      :email="contact.email"
      :phone="contact.phone"
      :owner="contact.owner"
      :isFavourite="contact.isFavourite"
      @update-favourite="contact.isFavourite = onUpdateFavourite($event,contact.owner)"
      ></Contact>
    </div>
    <!-- <button-counter></button-counter> -->
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue';
// Local import
import Contact from '@/components/Contact.vue';
import AddContactForm from '@/components/AddContactForm.vue';

const message = ref('Hello Vue!');
const ownerName = ref("");

const contacts = reactive([
  {
    name: "Maduka Pcm",
    email: "madukapcm@gmail.com",
    phone: 620141533,
    owner: ownerName,
    isFavourite: true,
  },
  {
    name: "Kessi Maduka",
    email: "kessimaduka@gmail.com",
    phone: 7550141533,
    owner: ownerName,
    isFavourite: false,
  },
  {
    name: "Maduka Lugoye",
    email: "madukalugoye@gmail.com",
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