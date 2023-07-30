import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    juguetes:[]
  },
  getters: {
  },
  mutations: {
    ADD_JUGUETE(state,juguete){
      state.juguetes.push(juguete) 
    }
  },
  actions: {
    async getData({commit}){
      try {
        let response = await axios.get('https://juguteria-rest.onrender.com/juguete/')
        const juguetes = response.data;
        juguetes.forEach((juguete) =>{
          //llamado a la mutacion 
          commit('ADD_JUGUETE',juguete)
        })
        //console.log(this.state.juguetes)
      }catch(error){
        console.log(error)
      }
      
    }
  },
  modules: {
  }
})
