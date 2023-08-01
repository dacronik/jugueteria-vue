<template>
  <v-app class="fondo">
    <nav-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-view/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
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
    'nav-bar':NavBar,
    'footer-view':Footer,
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Montserrat:wght@400;500;700&display=swap');
  .fondo{
    background-image: url('./assets/img/fondo.jpg');
  }
</style>
