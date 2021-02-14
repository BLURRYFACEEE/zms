<template>
  <ul class="clear-fix">
    <li v-for="(item,index) in smallCategory" class="smallCategory left">
      <img :src="item.image">
      <div class="title">{{item.title}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "index",
  props:{
    smallCategory: {
      type:Array
    }
  }
}
</script>

<style scoped>
  img {
    height: 60px;
    padding-bottom: 5px;
  }
  .title {
    font-size: 14px;
  }
  .smallCategory {
    padding: 15px;
    text-align: center;
    width: 90px;
    height: 120px;
  }
</style>
