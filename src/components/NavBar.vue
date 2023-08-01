<template>
  <div>
    <v-navigation-drawer temporary location="left" absolute app v-model="drawer"
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-layout class="mt-4 d-flex flex-column text-center">
        <div class="d-flex justify-center">
          <v-avatar>
            <v-icon size="40" color="deep-orange-darken-1">mdi-rocket-launch</v-icon>
          </v-avatar>
        </div>
        <div class="pb-12">
          <h3 class="sub-titulo">dev-toys</h3>
          <p>toy-store</p>
        </div>

      </v-layout>
      <v-list>

        <v-list-item v-for="(item, i) in itemsNav" :key="i" :value="item" color="primary" :to="item.to">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.name" class="sub-titulo"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark prominent image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-app-bar-nav-icon size="60" @click="drawer = !drawer" color="deep-orange-darken-1">

      </v-app-bar-nav-icon>
      <v-img class="mx-2" :src="require('@/assets/img/logo.png')" max-height="140" max-width="140" contain @click="redirectTo('/')"></v-img>

      <v-spacer></v-spacer>

      <v-badge
          color="green"
          :content="cartCount"
          class="mr-16"
        >
          <v-icon @click="redirectTo('cart')" color="deep-orange-darken-1" size="30">mdi-cart</v-icon>
      </v-badge>
    </v-toolbar>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  name: 'navBar-comp',
  // props: {},
  data: function () {
    return {
      logo: {
        src: 'img/logo.png',
      },
      itemsNav: [
        {
          name: 'Home',
          icon: 'mdi-home',
          to: '/'
        },
        {
          name: 'Productos',
          icon: 'mdi-shopping-search',
          to: "/productos"
        },
        {
          name: 'Contacto',
          icon: 'mdi-account-box',
          to: "/contacto"
        },
        {
          name: 'Acerca',
          icon: 'mdi-account',
          to: "/about"
        },
        {
          name: 'Carrito',
          icon: 'mdi-cart',
          to: "/cart"
        }
      ],
      drawer: true,
      group: null
    }
  },
  computed: {
    ...mapGetters(['cartCount']),
  },
  methods: {
    redirectTo(name){
      this.$router.push(`/${name}`)
    }
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
.sub-titulo {
  font-family: 'Bungee Spice';
}

.nav {
  display: flex;
  flex-direction: column;
  padding-left: 20px;

}

.nav-items {
  font-family: 'Bungee Spice';
  display: flex;
}
</style>