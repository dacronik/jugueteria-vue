<template>
  <v-card
    class="mx-auto"
    max-width="600"
    color="deep-purple-darken-2"
  >
    <v-img
      class="align-end text-white"
      height="400"
      :src="juguete.image_url"
      cover
      content
    >
      
    </v-img>
    <v-card-title class="text-black text-bold">{{ juguete.name }}</v-card-title>
    <v-card-subtitle class="pt-4">
      <strong>${{ juguete.price.toLocaleString('es-CL') }}</strong>
    </v-card-subtitle>

    <v-card-text>
      <div>{{ juguete.description }}</div>
    </v-card-text>

  </v-card>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'show-Cards-comp',
    props: {
        juguete:{
            type:Object,
            required:true
        }
    },
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['juguetes'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>