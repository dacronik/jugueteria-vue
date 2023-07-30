<template>
    <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="250"
      width="280"
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
      <v-btn color="orange" v-if="showCartIcon">
        <v-icon size="30">mdi-cart-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

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
        return {}
    },
    // computed: {},
    methods: {
      enviar(id){
        this.$emit('enviar',id)
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