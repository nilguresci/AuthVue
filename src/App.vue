<template>
<div id="app">
    <girmis />
    <div id="nav">
        <router-link to="/">AnaSayfa</router-link> |
        <router-link to="/giris">Giris</router-link> |
        <router-link to="/kayit">Kayıt</router-link> |
        <router-link to="/gizli">Gizli</router-link>
    </div>
    <router-view />
</div>
</template>

<script>
import girmis from './components/Girmis.vue';
export default {
    name: 'app',
    components: {
        girmis,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
