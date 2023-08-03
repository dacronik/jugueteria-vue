<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-progress-circular
            :size="180"
            :width="27"
            color="deep-orange-darken-1"
            indeterminate
            ></v-progress-circular>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'loading-comp',
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
    
</style>