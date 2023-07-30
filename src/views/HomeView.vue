<template>
    <v-container>
      <v-row justify="center">
        <v-img :src="require('@/assets/img/especial.png')"></v-img>
      </v-row>
    <v-row justify="center" class="mb-4">
      <h2>ven a conocer las ofertas de nuestra tienda, para celebrar a tu niño interior</h2>
    </v-row>
    <v-row class="mb-6">
      <v-col cols="12">
        <carrousel/>
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
import {mapState} from 'vuex';

export default defineComponent({
  name: 'HomeView',

  data: function(){
    return {
      
    }
  },

  components: {
    'card-image':Cards,
    'carrousel':Carrousel,
    
  },
  computed:{
    ...mapState(['juguetes']),
    juguetesFiltrados(){
      return this.juguetes.filter(juguete=>juguete.is_private==false)
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
  h1{
    color: black;
  }
</style>
