<template>
  <div class="bottom">
    <div class="left">
        <div class="serve">
          <i class="iconfont icon-kefu"></i>
          <span class="text">客服</span>
        </div>
      <div class="store">
        <i class="iconfont icon-dianpu"></i>
        <span class="text">店铺</span>
      </div>
      <div class="collect">
        <i class="iconfont icon-shoucang3"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="goCart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottom",
    methods:{
      goCart(){
       this.$emit('goCart')
      }
    }
  }
  import("../../../assets/image/detail/bottomBar.css")
</script>

<style scoped>
.bottom{
  height: 58px;
  position: relative;
  display: flex;
  text-align: center;
  background-color: #ffffff;
}
.left{
  display: flex;
  flex: 8;
}

.left div{
  flex: 1;
}
.iconfont{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  font-size: 22px;
}
.iconfont i{
  width: 42px;
}
  .right{
    flex: 7;
    display: flex;
    line-height: 49px;
  }
  .right div{
    flex: 1;
  }
  .cart{
    background-color: #fff281;
    font-size: 14px;
  }
  .buy{
    background-color: #ff8198;
    color: #ffffff;
  }
</style>