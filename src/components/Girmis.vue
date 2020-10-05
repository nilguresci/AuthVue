<template>
<div id="girmis">
    <h4 v-if="GirisDurumu">Giriş Yapılmış</h4>
    <h4 v-else>Giriş Yapılmamış</h4>
    <button v-if="GirisDurumu" class="btn btn-danger" @click="CikisYap">Çıkış</button>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';
import fb from "../Firebase/index.js";
export default {
    name: "Girmis",
    data() {
        return {
            GirisDurumu: false,
        };
    },
    created() {
        fb.kimlik().onAuthStateChanged((kullanici) => {
            this.GirisDurumu = !!kullanici;
        });
    },
    methods: {
        ...mapActions(['Cikis']),
        CikisYap() {
            this.Cikis();
        },
    },
};
</script>
