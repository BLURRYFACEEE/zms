<template>
    <div class="goodsList" >
<goods-item v-for="item in goodslist" :goods-item="item"></goods-item>
    </div>
</template>

<script>
export default {
  name: "goodsList",
  components:{
    goodsItem
  },
  props:{
    goodslist:{
      type:Array,
      default:[]
    }
  }
}
import goodsItem from "./goodsItem";
</script>

<style scoped>
.goodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>