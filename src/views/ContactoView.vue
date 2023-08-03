<template>
    <v-container class="mt-12">
        <v-row justify="center">
            <v-col cols="12" class="d-flex justify-center">
                <h1 class="titulo">Contactanos</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <contacto/>
            </v-col>
        </v-row>
        <v-row justify="center">
            <h1 class="titulo">Encuentranos</h1>
        </v-row>
        <v-row justify="center">
            <h3>En Av. Luis Thayer Ojeda #350 a pasos del metro tobalaba</h3>
        </v-row>
        <v-row justify="center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.081822178329!2d-70.60427102353587!3d-33.42111109601162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6b90203b37%3A0x5d36a1b1dad9e6a4!2sAv.%20Luis%20Thayer%20Ojeda%20350-230%2C%207510068%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1690825615423!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </v-row>
    </v-container>
</template>

<script>
import FormContacto from '@/components/FormContacto.vue';
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'contacto': FormContacto
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style>

    .titulo {
        font-family: 'Bungee Spice';
        font-size: 4rem;
    }
    @media screen and (max-width:500px) {
        .titulo{
            font-size: 2rem;
        }
    }
</style>