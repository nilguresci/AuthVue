import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'

import fb from '../Firebase/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        GirisDurum: false,
        Kullanici: {}
    },
    getters: {
        suankiKullanici(state) {
            state.Kullanici = fb.kimlik().currentUser;
            return state.Kullanici;
        }
    },
    mutations: {
        async kayitOl(state, veri) {
            try {
                const kullanici = fb.kimlik().createUserWithEmailAndPassword(veri.email, veri.sifre)
                state.GirisDurum = !!kullanici
                alert(`kayıt tamamlandı ${veri.email}`)
                router.replace('/gizli')

            } catch (error) {
                alert(error)
            }

        },
        async cikisYap(state) {
            try {
                await fb.kimlik().signOut();
                state.GirisDurum = false;
                alert('Çıkış yapıldı');
                router.replace('/')
            } catch (error) {
                alert(error)
            }
        },
        async girisYap(state, veri) {
            try {
                const kullanici = await fb.kimlik().signInWithEmailAndPassword(veri.email, veri.sifre);
                state.GirisDurum = !!kullanici;
                alert(`Hoşgeldiniz ${veri.email}`);
                router.replace('/gizli');
            } catch (error) {
                alert(error)
            }
        }
    },
    actions: {
        Kayit({ commit }, veri) {
            commit('kayitOl', veri)
        },
        Cikis({ commit }) {
            commit("cikisYap")
        },
        Giris({ commit }, veri) {
            commit('girisYap', veri);
        },
    },
    modules: {}
})