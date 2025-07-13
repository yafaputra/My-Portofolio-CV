// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Impor router
const app = createApp(App);
app.use(router); // Gunakan router
app.mount('#app');
