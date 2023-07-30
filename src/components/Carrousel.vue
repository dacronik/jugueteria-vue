
<template>
  <v-carousel
    cycle
    height="200"
    hide-delimiter-background
    show-arrows="hover"
    class="text-black"
  >
  <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
      contain
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
    name: 'carrrusel-comp',
    // props: {},
    data: function(){
        return {
            items: [
            {
                src:require('@/assets/img/consolas.png'),
            },
            {
                src:require('@/assets/img/descuento.png'),
            },
            {
                src:require('@/assets/img/E-sport.png'),
            },
            ],
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