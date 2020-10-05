import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fb from './Firebase/index.js'

Vue.config.productionTip = false

let app;

fb.kimlik().onAuthStateChanged(kullanici => {
    if (kullanici) {
        console.log('Giris yapıldı')
        store.state.GirisDurum = true;
    } else {
        console.log('Giris yapılmadı')
        store.state.GirisDurum = false;
    }
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})