<template>
  <v-app class="fondo">
    <v-main>
      <nav-bar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
      ...mapActions(['getData']),
  },
  created(){
    this.getData();
  },

  components:{
    'nav-bar':NavBar
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Montserrat:wght@400;500;700&display=swap');
  .fondo{
    background-image: url('./assets/img/fondo.jpg');
  }
</style>
