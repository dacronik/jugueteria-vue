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
          :rules="[required,emailValid]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>
        <v-textarea 
        label="Mensaje" 
        v-model="mensaje"
        :rules="[required]">

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
import axios from 'axios'
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
        async onSubmit () {
        if (!this.form) return

        this.loading = true
        
        try{
          //enviando datos al formulario de la api
          await axios.post('https://jugueteria.onrender.com/contacto/',{
            customer_name: this.nombre,
            customer_email: this.email,
            message: this.mensaje
          });
          
          // limpiar los datos del formulario
          this.nombre = null;
          this.email = null;
          this.mensaje= null;
          // mostrar mensaje de exito
          console.log('!Mensaje enviado con exito')
        } catch(error){
          //mostrar mensaje de error
          console.log(error)
          
        } finally{
          this.loading = false;
        }

        setTimeout(() => (this.loading = false), 2000)
        },
        required (v) {
            return !!v || 'Campo es requerido'
        },
        emailValid(v) {
          return /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido';
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