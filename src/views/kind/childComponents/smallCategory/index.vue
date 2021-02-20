<template>
<better-scroll class="container">
  <ul class="clear-fix">
    <li v-for="(item,index) in smallCategory" class="smallCategory left">
      <a :href="item.link">
        <img :src="item.image">
        <div class="title">{{item.title}}</div>
      </a>
    </li>
  </ul>
</better-scroll>
</template>

<script>
import betterScroll from "../../../../components/common/better-scroll/betterScroll";
export default {
  name: "index",
  props:{
    smallCategory: {
      type:Array
    }
  },
  components:{
    betterScroll
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
  .container {
    height: calc(100vh - 100px);
    margin-bottom: 44px;
    overflow: hidden;
  }
</style>
