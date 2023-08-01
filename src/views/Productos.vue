<template>
    <v-container>
        <v-row>
            <h1 class="ma-6 titulo-productos">Conoce nuestros Productos</h1>
            <v-icon color="orange-darken-4" size="80">mdi-rocket-launch</v-icon>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="3" lg="3" v-for="juguete in juguetes" :key="juguete.id">
                <card-productos :juguetes="juguete" @enviar="showCard"/>
            </v-col>
        </v-row>
        <div>
            <v-dialog
              transition="dialog-bottom-transition"
              width="auto"
              v-model="dialog"
            >
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar
                    color="primary"
                    :title="jugueteShowCards.name"
                  ></v-toolbar>
                  <v-card-text>
                    <!--ingresando el componente showCards-->
                    <show-cards :juguete="jugueteShowCards"/>
                    
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                        variant="text"
                        @click="isActive.value = false"
                    >Cerrar</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
        </div>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'; 
import Cards from '@/components/Cards.vue';
import ShowCards from '@/components/ShowCards.vue';
export default {
    name: 'productos-view',
    // props: {},
    data: function(){
        return {
            dialog:false,
            isActive:false,
            jugueteShowCards:[],
        }
    },
    computed: {
        ...mapState(['juguetes'])
    },
    methods: {
        showCard(id){
            this.dialog= true;
            this.jugueteShowCards=this.juguetes.find(juguete=>juguete.id==id)
            //console.log(this.jugueteShowCards)
        }
    },
    // watch: {},
    components: {
        'card-productos': Cards,
        'show-cards': ShowCards
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .titulo-productos{
        font-family: 'Bungee Spice';
    }
</style>