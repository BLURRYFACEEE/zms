import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      let oldProductCheck = null;
      for (let item of state.cartList){
        if(item.iid === payload.iid){
          oldProductCheck = item
        }
      }
      if(oldProductCheck){
        oldProductCheck.count+=1
      }
      else{
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
    }

)
export default store