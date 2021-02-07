<template>
  <div id="buycar">
    <naviga-bar class="buycarNavigaBar">
      <div slot="center">
        购物车({{getCartListLength}})
      </div>
    </naviga-bar>
    <cartList class="cartList"></cartList>
    <cart-button></cart-button>
  </div>
</template>

<script>
export default {
name: "buycar",
  components:{
    navigaBar,cartList,cartButton
  },
  computed:{
    ...mapGetters(['getCartListLength','getCartList'])
  }
}
import navigaBar from '../../components/common/navigationbar/NaviBar'
import { mapGetters } from 'vuex'
import cartList from "./childComponents/cartList";
import cartButton from "./childComponents/cartButton";
</script>

<style scoped>

  #buycar{
    height: 100vh;
  }
.buycarNavigaBar{
  background-color: var(--color-tint);
  color: #ffffff;
}
  .cartList{

  }
</style>
