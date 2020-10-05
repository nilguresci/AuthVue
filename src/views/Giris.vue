<template>
<div id="giris">
    <h1>Giriş</h1>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <form @submit.prevent="GirisYap">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address - email adresi</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="kullanici.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else. /bilgileriniz güvende.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password-Şifre</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="kullanici.sifre">
                    </div>

                    <button type="submit" class="btn btn-outline-primary btn-block">Giriş Yap</button>
                </form>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';
export default {
    name: "Giris",
    data() {
        return {
            kullanici: {
                email: "",
                sifre: "",
            }
        };
    },
    methods: {
        ...mapActions(['Giris']),
        GirisYap() {
            this.Giris(this.kullanici);
        },
    },
}
</script>
