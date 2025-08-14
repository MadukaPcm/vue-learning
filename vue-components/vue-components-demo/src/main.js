
import { createApp } from 'vue';
import App from '@/App.vue';

import ContactUs from '@/components/Contact.vue';
import ButtonCounter from './components/ButtonCounter.vue';

const app = createApp(App);

//Global Import.
app.component('button-counter', ButtonCounter);
app.mount('#app');
