<template>
<div>
  <navi-bar>
    <div slot="left" class="left" @click="backToHome">
    <img src="../../../assets/image/common/back.svg">
    </div>
    <div slot="center" class="center">
    <div class="center-item" v-for="(item,index) in titles" :class="{active:index === currentIndex}"
    @click="detailBarClick(index)"
    >
      {{item}}
    </div>
  </div>
  </navi-bar>
</div>
</template>

<script>
export default {
name: "detailBar",
  components:{
    NaviBar
  },
  data(){
  return{
    titles:['商品','参数','评论','推荐'],
    currentIndex:0
  }
  },
  methods:{
    backToHome(){
      this.$router.go(-1)
    },
    detailBarClick(index){
      this.currentIndex = index
      this.$emit('detailBarEmit',index)
    }
  }
}
import NaviBar from "../../../components/common/navigationbar/NaviBar";
</script>

<style scoped>
.left{
  margin-top: 5px;
}
.left img{
  height: 20px;
  width: 20px;

}
.center{
  display: flex;
}
.center-item{
  flex: 1;
}
.active{
  color: var(--color-tint);
}
</style>