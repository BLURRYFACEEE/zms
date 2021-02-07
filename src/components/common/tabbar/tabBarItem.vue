<template>
  <div class="tabbar_item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name: "tabBarItem",
  props:{
  path:String,
  activeColor:{
    type:String,
    default:'red'
  }
  },
data(){
  return{
    // isActive: false
  }
},
  computed:{
  isActive(){
    return this.$route.path.indexOf(this.path) !== -1
  },
    activeStyle(){
    return this.isActive ?{color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }

}
</script>

<style scoped>
.tabbar_item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar_item img{
  width: 48px;
  height: 24px;
}
.active{
  color: red;
}

</style>
