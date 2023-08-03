<template>
    <v-container class="home">
      <v-row justify="center" align="center">
        <v-img maxWidth="200" :src="require('@/assets/img/logo.png')"></v-img>
        <h1 class="titulo">Dev-Toys</h1>
      </v-row>
    <v-row justify="center" class="mb-4">
      <h2>ven a conocer las ofertas de nuestra tienda, para celebrar a tu niño interior</h2>
    </v-row>
    <v-row class="mb-6">
      <v-col cols="12">
        <carrousel/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col v-if="!juguetes.length">
        <loading-comp/>
      </v-col>
      
    </v-row>
    <v-row class="mt-4">
      <v-col md="3" cols="12" class="flex" v-for="juguete in juguetesFiltrados" :key="juguete.id">
        <card-image :juguetes="juguete" @enviar="redirecTo" :showCartIcon="false"/>
      </v-col>
    </v-row>
  
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';


// Components
import Cards from '@/components/Cards.vue';
import Carrousel from '@/components/Carrousel.vue';
import Loading from '@/components/Loading.vue';
import {mapState} from 'vuex';

export default defineComponent({
  name: 'HomeView',

  data: function(){
    return {
      loading:false,
    }
  },

  components: {
    'card-image':Cards,
    'carrousel':Carrousel,
    'loading-comp':Loading
    
  },
  computed:{
    ...mapState(['juguetes']),
    juguetesFiltrados(){
      this.loading = true;
      let jugueteFiltrado= this.juguetes.filter(juguete=>juguete.is_private==false)
      this.loading=false
      return jugueteFiltrado
    }
    
  },
  methods:{
    redirecTo(){
      this.$router.push('/productos')
    }
  },
  created(){
    
  }
});
</script>

<style scoped>
  .titulo{
    font-family: Bungee Spice;
    font-size: 4rem;
  }
  
  @media screen and (max-width:500px) {
        .titulo{
            font-size: 2rem;
        }
    }
</style>
