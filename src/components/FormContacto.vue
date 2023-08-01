<template>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="nombre"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Nombre"
          placeholder="Ingrese su nombre"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>
        <v-textarea label="Mensaje">

        </v-textarea>
        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="primary"
          size="large"
          type="submit"
          variant="elevated"
        >
          Enviar
        </v-btn>
      </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {
            form: false,
            email: null,
            nombre: null,
            mensaje:null,
            loading: false,
                }
    },
    // computed: {},
    methods: {
        onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
        },
        required (v) {
            return !!v || 'Field is required'
        },
    },
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