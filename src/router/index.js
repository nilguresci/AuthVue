import Vue from 'vue'
import VueRouter from 'vue-router'
import AnaSayfa from '../views/AnaSayfa.vue'
import Gizli from '../views/Gizli.vue'
import Giris from '../views/Giris.vue'
import Kayit from '../views/Kayit.vue'
import fb from '../Firebase/index.js'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'AnaSayfa',
        component: AnaSayfa
    },
    {
        path: '/giris',
        name: 'Giris',
        component: Giris,
        meta: { girisGerekliDegil: true },
    },
    {
        path: '/kayit',
        name: 'Kayit',
        component: Kayit,
        meta: { girisGerekliDegil: true },
    },
    {
        path: '/gizli',
        name: 'Gizli',
        component: Gizli,
        meta: { girisGerekli: true },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const girisGerekli = to.matched.some(record => record.meta.girisGerekli)
    const girisYapilmis = fb.kimlik().currentUser;
    const girisGerekliDegil = to.matched.some(record => record.meta.girisGerekliDegil)

    if (girisGerekli && !girisYapilmis) {
        alert('Lütfen giriş yapınız.');
        next('/giris');
    } else if (girisGerekliDegil && girisYapilmis) {
        alert('Zaten giriş yapıldı.')
        next('/');
    } else {
        next();
    }
})


export default router