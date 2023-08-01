<template>
    <div>
      <v-toolbar
        dark
        prominent
        image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-app-bar-nav-icon>
            
        </v-app-bar-nav-icon>
        <v-img
            class="mx-2"
            :src="require('@/assets/img/logo.png')"
            max-height="140"
            max-width="140"
            contain
        ></v-img>
  
        <v-spacer></v-spacer>
          <v-btn class="text-white" to="/">Home</v-btn>
          <v-btn class="text-white" to="/productos">Productos</v-btn>
          <v-btn class="text-white" to="/contacto">Contacto</v-btn>
          <v-btn class="text-white" to="/about">Acerca</v-btn>
          <v-btn class="text-white" to="/cart">Carrito</v-btn>
      
      </v-toolbar>
    </div>
  </template>


<script>
export default {
    name: 'navBar-comp',
    // props: {},
    data: function(){
        return {
            logo:{
                src: 'img/logo.png'
            }
        }
    },
    // computed: {},
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