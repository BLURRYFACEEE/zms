<template>
  <div class="cartButton">
<!--  电脑模拟手机点击开启后快点会有bug，手机操作完美  -->
    <check-bottom class="cartButtonBottom" :is-checked="checkAll" @click.native="checkAllClick"></check-bottom>
    <span class="checkAll">全选</span>
    <div class="cartButtonSum"><span>合计:￥{{totalPrice.toFixed(2)}}</span></div>
    <div class="cartButtonCalc">去计算({{totalNum}})</div>
  </div>
</template>

<script>
  export default {
    name: "cartBottom",
    components:{
      checkBottom
    },
    computed:{
      totalPrice(){
        return this.$store.getters.getCartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue += item.count * item.price
        },0)
      },
      totalNum(){
        return this.$store.getters.getCartList.filter(item=>{
          return item.checked
        }).length
      },
      checkAll(){
        console.log('checkAll')
        if ( this.$store.getters.getCartListLength === 0 ){
            return false
        }
        // return !this.$store.getters.getCartList.filter(item=>{
        //   return !item.checked
        // }).length
          return !this.$store.getters.getCartList.find(item=>{
            return !item.checked
          })
        // return this.$store.getters.getCartList.every(item=>{
        //   return item.checked
        // })
      },
    },
    methods:{
      checkAllClick(){
        console.log('checkAllClick')
        if (this.checkAll){
          console.log('checkAllCheck')
            this.$store.getters.getCartList.forEach(item=>{
              item.checked= false
            })
        }
        else {
            // this.$store.getters.getCartList.filter(item=>{
            //   return !item.checked
            // }).forEach(item=>{
            //   item.checked = true
          // })
            this.$store.getters.getCartList.forEach(item=>{
              item.checked = true
            })
        }
      }
    }
  }
  import checkBottom from "../../../components/common/checkBottom/checkBottom";
</script>

<style scoped>
.cartButton{
  position: fixed;
  bottom: 54px;
  height: 36px;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
}
.cartButtonBottom{
  margin: 5px;
}
.cartButtonSum{
  margin-left: 30px;
  }
.cartButtonCalc{
  position: absolute;
  height: 100%;
  width: 100px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #f6f6f6;
}
</style>
