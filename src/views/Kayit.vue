<template>
<div id="kayit">
    <h1>Kayıt</h1>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <form @submit.prevent="KayitOl">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address - email adresi</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="kullanici.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else. /bilgileriniz güvende.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password-Şifre</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="kullanici.sifre">
                    </div>

                    <button type="submit" class="btn btn-outline-success btn-block">Kaydol</button>
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
} from 'vuex'
export default {
    name: "Kayit",
    data() {
        return {
            kullanici: {
                email: "",
                sifre: "",
            }
        };
    },
    methods: {
        ...mapActions(['Kayit']),
        KayitOl() {
            this.Kayit(this.kullanici);
        },
    },
}
</script>
