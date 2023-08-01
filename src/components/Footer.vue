<template>
    <v-footer class="d-flex flex-column pa-0">
        <div class="bg-deep-orange-darken-1 d-flex w-100 align-center px-4 justify-center">
            <strong>Sigueme en mis Redes Sociales</strong>
            <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" :icon="icon.name" variant="plain" size="small" @click="redirectTo(icon.to)"></v-btn>
        </div>

        <div class="px-4 py-2 bg-black text-center w-100 mb-0">
            {{ new Date().getFullYear() }} — <strong>creado por Gerardo Ortiz</strong>
        </div>
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
                    to: 'https://twitter.com/DacronikOr'
                },
                {
                    name:'mdi-linkedin',
                    to:'https://www.linkedin.com/in/gerardo-ortiz-montecinos-desarrollador/'
                },
                {
                    name:'mdi-instagram',
                    to:'https://www.instagram.com/dacronik/'
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

<style scoped></style>