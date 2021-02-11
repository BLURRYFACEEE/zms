<template>
  <div id="buycar">
    <naviga-bar class="buycarNavigaBar">
      <div slot="center">
        购物车({{getCartListLength}})
      </div>
    </naviga-bar>
    <cartList class="cartList"></cartList>
    <cart-button></cart-button>
<!--    <div class="load"><span>计算中~</span></div>-->
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
    position: relative;
  }
.buycarNavigaBar{
  background-color: var(--color-tint);
  color: #ffffff;
}
  .cartList{

  }
  .load {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 40px;
    box-sizing: content-box;
    width: 60px;
    height: 60px;
    background-color: #42b983;
    z-index: 2;
  }
</style>
