<template>
    <div>
        <div class="error">
            <v-icon color="deep-orange-darken-1" size="200">mdi-rocket-launch</v-icon>
            <h1>Error 404</h1>
            <h1>Page NotFound</h1>
            <router-link to="/"><button>Regresar</button></router-link>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'not-found-view',
    // props: {},
    data: function(){
        return {}
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
    .error{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 85vh;
    }
    .error button{
        background-color: #F4511E;
        padding: 20px;
        font-size: 32px;
    }
</style>