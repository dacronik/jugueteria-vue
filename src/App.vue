<template>
  <v-app class="bg-blue">
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
