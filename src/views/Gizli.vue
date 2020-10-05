<template>
<div id="gizli">
    <h1>Gizli</h1>
    <hr />
    {{suankiKullanici}}
    <hr />
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    name: "Gizli",
    computed: {
        ...mapGetters(['suankiKullanici']),
    },
}
</script>
