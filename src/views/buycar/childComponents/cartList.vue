<template>
  <div class="cartList">
    <better-scroll class="content">
      <div>
        <cartr-list-item v-for="(item,index) of getCartList" :key="index" :cart-list="item"></cartr-list-item>
<!--        <div>{{getCartList}}</div>-->
      </div>
    </better-scroll>

  </div>
</template>

<script>
  export default {
    name: "cartList",
    computed:{
      ...mapGetters(['getCartList'])
    },
    components:{
      betterScroll,cartrListItem
    }
  }
  import { mapGetters } from 'vuex'
  import betterScroll from "../../../components/common/better-scroll/betterScroll";
  import cartrListItem from "./cartrListItem";
</script>

<style scoped>
.cartList{
  height: 100vh;
  overflow: hidden;
}
  .content{
    height: calc( 100% - 44px - 49px )
  }
</style>
