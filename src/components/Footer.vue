<template>
    <v-footer
      color="blue-darken-3"
      dark
    >
      <v-row
        justify="center"
        class="my-4 text-center"
      >
        <v-col cols="12"
          ><h4 class="footer-text">Sigueme en mis Redes Sociales</h4></v-col
        >
        <v-col cols="12">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            text
            color="deep-orange-darken-1"
            @click="redirectTo(icon.to)"
            class="mr-4"
          >
            <v-icon size="24" :color="icon.color">{{ icon.name }}</v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          class="align-center"
          >&copy; 2023 creado por Gerardo Ortiz</v-col
        >
      </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'footer-comp',
    // props: {},
    data: function () {
        return {
            icons: [
                
                {
                    name:'mdi-twitter',
                    to: 'https://twitter.com/DacronikOr',
                    color:'light-blue-lighten-2'
                },
                {
                    name:'mdi-linkedin',
                    to:'https://www.linkedin.com/in/gerardo-ortiz-montecinos-desarrollador/',
                    color:'light-blue-darken-4'
                },
                {
                    name:'mdi-instagram',
                    to:'https://www.instagram.com/dacronik/',
                    color:'red-accent-4'
                },
            ],
        }
    },
    // computed: {},
    methods: {
        redirectTo(url){
            window.open(url, '_blank');
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
    .footer-text{
        font-family: 'Bungee Spice';
    }

</style>