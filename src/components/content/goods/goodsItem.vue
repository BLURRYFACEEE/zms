<template>
<div class="goodsItem" @click="itemClick">
  <img :src="showImg" @load="imgLoadCheck">
  <div class="goodsInfo">
  <p>{{ goodsItem.title }}</p>
  <span class="price">{{goodsItem.price}}</span>
  <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</div>
</template>

<script>
export default {
name: "goodsItem",
  props:{
  goodsItem:{
    type:Object,
    default:()=>{}
  },
  },
  computed:{
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imgLoadCheck(){
      // console.log('zms');
      if (this.$route.path.indexOf('/home')){
        this.$bus.$emit('imgHomeCheck')
      }
      else if(this.$route.path.indexOf('/detail')){
        this.$bus.$emit('imgDetailCheck')
      }
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goodsItem{
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goodsItem img{
  width: 100%;
}

.goodsInfo{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  text-align: center;
  /*overflow: hidden;*/
  font-size: 12px;
}
.goodsInfo p{

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.goodsInfo .price{
  color: var(--color-tint);
  margin-right: 20px;
}

.goodsInfo .collect{
  position: relative;
}
.goodsInfo .collect::before{
  content: '';
  top: 0;
  width: 14px;
  height: 14px;
  position: absolute;
  left: -15px;
  background: url("../../../assets/image/common/collect.svg") 0 0/14px 14px;
}
</style>