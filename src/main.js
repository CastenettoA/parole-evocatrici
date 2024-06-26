import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueGtag from "vue-gtag"; 


// my components
import Footer from './components/Footer.vue';
import HeaderLogo from './components/HeaderLogo.vue';


const app = createApp(App);
app.use(VueSweetalert2);
app.use(router);
app.component('FooterMain', Footer);
app.component('HeaderLogo', HeaderLogo);
app.use(VueGtag, { config: { id: "G-RDH96P8321" }})
app.mount('#app');
