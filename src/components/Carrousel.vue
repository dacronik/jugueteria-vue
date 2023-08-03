
<template>
  <v-carousel
    cycle
    height="250"
    hide-delimiter-background
    show-arrows="hover"
    class="text-black"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      >
      <img :src="item.src" 
      :alt="'image'+i"
      class="carrousel-image">
    </v-carousel-item>
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
    .carrousel-image{
        width: 100%;
        height: 100%;
    } 
    @media screen and (max-width:400px) {
        .carrousel-image{
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>