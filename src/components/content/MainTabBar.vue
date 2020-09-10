<template>
  <tabbar>
    <tabBarItem path="/home">
      <img slot="item-icon" src="../../../src/assets/image/tabbar/home.png" >
      <img slot="item-icon-active" src="../../../src/assets/image/tabbar/_home.png" >
      <div slot="item-text">首页</div>
    </tabBarItem>
    <tabBarItem path="/kind">
      <img slot="item-icon" src="../../../src/assets/image/tabbar/kind.png" >
      <img slot="item-icon-active" src="../../../src/assets/image/tabbar/_kind.png" >
      <div slot="item-text">分类</div>
    </tabBarItem>
    <tabBarItem path="/buycar">
      <img slot="item-icon" src="../../../src/assets/image/tabbar/buycar.png" >
      <img slot="item-icon-active" src="../../../src/assets/image/tabbar/_buycar.png" >
      <div slot="item-text">购物车</div>
    </tabBarItem>
    <tabBarItem path="/person">
      <img slot="item-icon" src="../../../src/assets/image/tabbar/person.png" >
      <img slot="item-icon-active" src="../../../src/assets/image/tabbar/_person.png" >
      <div slot="item-text">我的</div>
    </tabBarItem>
  </tabbar>
</template>

<script>
export default {
name: "MainTabBar",
components: {
  tabbar,
  tabBarItem
}
}
import tabbar from "../../components/common/tabbar/tabbar";
import tabBarItem from "../../components/common/tabbar/tabBarItem";
</script>

<style scoped>

</style>
