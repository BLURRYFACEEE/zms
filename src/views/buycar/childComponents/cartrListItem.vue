<template>
  <div class="cartListItem">
    <check-bottom class="check" :is-checked="cartList.checked" @click.native="checkBottomClick"></check-bottom>
    <div class="cartPic"><img :src="cartList.img"></div>
    <div class="cartDetail">
      <div class="cartTitle">
        {{cartList.title}}2222222222222222222222222
      </div>
      <div class="cartDesc">{{cartList.desc}}</div>
      <div class="cartItemBottom">
        <div class="cartPrice left">￥{{cartList.price}}</div>
        <div class="cartNum right">x{{cartList.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartrListItem",
    props:{
      cartList:{
        type:Object
      }
    },
    components:{
      checkBottom
    },
    methods:{
      checkBottomClick(){
        this.cartList.checked = !this.cartList.checked
      }
    }
  }
  import checkBottom from "../../../components/common/checkBottom/checkBottom";
</script>

<style scoped>
  .cartListItem{
    width: 100%;
    display: flex;
    padding: 5px;
  }
  .check{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
.cartPic {

}
.cartPic img{
  width: 80px;
  border-radius: 10px;
}
.cartDetail{
  font-size: 17px;
  color: #333333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
  .cartTitle,.cartDesc{
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cartItemBottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .cartPrice{
    color: #fc7200;
  }
</style>