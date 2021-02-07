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
    cartAddNum(state,payload){
      payload.count++
    },
    cartAddGood(state,payload){
      state.cartList.push(payload)
    }
  },
  actions:{
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
        // let oldProductCheck = null;
        // payload.checked = true
        let oldProductCheck = context.state.cartList.find(item => item.iid === payload.iid)
        // for (let item of state.cartList){
        //   if(item.iid === payload.iid){
        //     oldProductCheck = item
        //   }
        // }
        if(oldProductCheck){
          // oldProductCheck.count+=1
          context.commit('cartAddNum',oldProductCheck)
          resolve('购物车+1！')
        }
        else{
          payload.count = 1
          context.commit('cartAddGood',payload)
          // state.cartList.push(payload)
          resolve('已经加入购物车！')
        }
      })
    }
  }
    }

)
export default store