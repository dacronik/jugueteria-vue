<template>
    <v-container class="cart">
        <v-row justify="center">
            <v-col align-self="center">
                <h1 class="titulo">Productos Agregados</h1>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-center" v-for="header in headers" :key="header.text">
                                {{ header.text }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartProduct" :key="item.name" class="text-center">
                            <td>{{ item.name }}</td>
                            <td>{{ item.count }}</td>
                            <td>${{ item.price.toLocaleString('es-CL') }}</td>
                            <td>${{ item.total.toLocaleString('es-CL') }}</td>
                            <div class="d-flex justify-space-around align-center mt-4">
                                <td><v-icon @click="addStock(item)">mdi-plus-circle</v-icon></td>
                                <td><v-icon @click="removeStock(item)">mdi-minus-circle</v-icon></td>
                                <td><v-icon @click="deleteItem(item)">mdi-delete</v-icon></td>
                            </div>
                        </tr>
                        <div class="text-center">
                            <v-toolbar-title class="ml-4 mt-4 mb-4">Total Compras: <span class="text-success">$ {{ cartTotal.toLocaleString('es-CL') }}</span></v-toolbar-title>
                        </div>
                    </tbody>
                    
                </v-table>
            
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card color="orange">
                        <v-card-title class="text-h5">¿desea eliminar el producto?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel <v-icon color="red">mdi-close</v-icon></v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK <v-icon color="success">mdi-check-bold</v-icon></v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'cart-view',
    // props: {},
    data: function () {
        return {
            dialogDelete:false,
            headers: [
                { text: 'Producto', value: 'name' },
                { text: 'Cantidad', value: 'count' },
                { text: 'Precio', value: 'price' },
                { text: 'Subtotal', value: 'total' },
                { text: 'Acciones', value: 'actions' }

            ],
            deleteId: null
        }
    },
    computed: {
        ...mapGetters(['cartProduct','cartTotal']),

    },
    methods: {
        ...mapActions(['removeCartProduct','addStockCart','removeStockCart']),

        deleteItem(item){
            //console.log(item)
            this.deleteId =item.id
            this.dialogDelete=true
        },

        deleteItemConfirm () {
            this.removeCartProduct(this.deleteId)
            this.closeDelete()
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },
        addStock(item){
            this.addStockCart(item.id)
        },
        removeStock(item){
            this.removeStockCart(item.id)
        }
    }

    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods

    // -- End Lifecycle Methods
}
</script>
    
<style scoped>
    .cart{
        height: 86vh;
    }
</style>