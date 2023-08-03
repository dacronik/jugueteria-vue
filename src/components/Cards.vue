<template>
    <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="300"
      max-width="480"
      :src="juguetes.image_url"
      cover
    >
     
    </v-img>
    <v-card-title class="text-black">{{ juguetes.name }}</v-card-title>
    <v-card-subtitle class="pt-4 text-black">
      <strong>${{ juguetes.price.toLocaleString('es-CL') }}</strong>
    </v-card-subtitle>

    <v-card-text>
      <div>Productos en promoción</div>
    </v-card-text>

    <v-card-actions class="d-flex justify-space-between mx-5">
      <v-btn color="orange" @click="enviar(juguetes.id)">
        Ver mas
      </v-btn>
      <v-btn color="orange" v-if="showCartIcon" @click="add">
        <v-icon size="30">mdi-cart-plus</v-icon>
      </v-btn>
    </v-card-actions>
    <div class="text-center">
      <v-snackbar
        v-model="snackbar"
        color="deep-orange-darken-1"
        :timeout="timeout"
      >
        {{ juguetes.name }} Agregado al carrito
        <v-icon>mdi-cart-plus</v-icon>

        <template v-slot:actions>
          <v-btn
            color="blue"
            variant="text"
            @click="snackbar = false"
          >
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'cards-comp',
    props: {
        juguetes:{
            type: Object,
            required: true,
        },
        showCartIcon:{
          type:Boolean,
          default:true
        }
    },
    data: function () {
        return {
          snackbar: false,
          timeout: 2000,
        }
    },
    // computed: {},
    methods: {
      ...mapActions(['addProductCart']),
      enviar(id){
        this.$emit('enviar',id)
      },
      add(){
        let prod={
          id: this.juguetes.id,
          name:this.juguetes.name,
          image:this.juguetes.image_url,
          price:this.juguetes.price,
          count:1
        }
        //mandando onjeto a vuex
        this.addProductCart(prod)
        //activar snackbar
        this.snackbar=true
      }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .titulo{
        color: black;
    }
</style>