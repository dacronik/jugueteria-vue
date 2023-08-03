import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    juguetes:[],
    cart:[]
  },
  getters: {
    cartProduct(state){
      return state.cart.map(prod=>{
        let myProd = prod
        myProd.total = prod.count * prod.price
        return myProd
      })
    },
    cartCount(state){
      return state.cart.length
    },
    cartTotal(state,getters){
      return getters.cartProduct.reduce((total,prod)=>{
        return total + prod.total
      },0)
    }
  },
  mutations: {
    ADD_JUGUETE(state,juguete){
      state.juguetes.push(juguete) 
    },
    ADD_PRODUCT_TO_CART(state,product){
      //validar si el producto exite
      let exist =state.cart.some(prod=>prod.id==product.id)
      if(!exist){
        //el producto no existe
        state.cart.push(product)
      }
      else{
        //el producto existe
        state.cart.forEach(prod=>{
          if(prod.id==product.id){
            prod.count+=1;
          }
        })
      }
    },
    REMOVE_PRODUCT_CART(state,idProduct){
      let index=state.cart.findIndex(prod=>prod.id == idProduct)
      state.cart.splice(index,1)
    },

    ADD_STOCK_CART(state, idProduct){
      state.cart.forEach(prod=>{
        if(prod.id == idProduct){
          prod.count+=1;
        }
      })
    },
    REMOVE_STOCK_CART(state, idProduct){
      state.cart.forEach(prod=>{
        if(prod.id == idProduct && prod.count >1){
          prod.count-=1;
        }
      })
    },

  },
  actions: {
    async getData({commit}){
      try {
        let response = await axios.get('https://jugueteria.onrender.com/juguete/')
        const juguetes = response.data;
        juguetes.forEach((juguete) =>{
          //llamado a la mutacion 
          commit('ADD_JUGUETE',juguete)
        })
        //console.log(this.state.juguetes)
      }catch(error){
        console.log(error)
      }
    },
    addProductCart({commit},product){
      commit('ADD_PRODUCT_TO_CART',product)
    },
    removeCartProduct({commit},idProduct){
      commit('REMOVE_PRODUCT_CART',idProduct)
    },
    addStockCart({commit},idProduct){
      commit('ADD_STOCK_CART',idProduct)
    },
    removeStockCart({commit},idProduct){
      commit('REMOVE_STOCK_CART',idProduct)
    },

  },
  modules: {
  }
})
