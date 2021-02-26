<template>
<div class="detail-info">
  <div class="info-desc">
    <p>{{detailInfo.desc}}</p>
  </div>
  <div class="info-part" v-for="item in detailInfo.detailImage">
    <div class="info-title" >
      <p>{{item.key}}</p>
    </div>
    <div class="info-image" v-for="item2 in item.list">
      <img :src="'http:'+item2" @load="imgLoadCheck">
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "detailInfo",
  props:{
  detailInfo:{
    type:Object
  }
  },
  data(){
  return{
    count:0,
    imgNum:0
  }
  },
  methods:{
    imgLoadCheck(){
      if(++this.count === this.imgNum){
        this.$emit('imgLoadDone')
        console.log('qifei');
      }

    }
  },
  watch:{
  detailInfo(){
    this.imgNum = this.detailInfo.detailImage[0].list.length
  }
  }
}
</script>

<style scoped>
.detail-info{
  margin-top: 5px;
}
.info-image{
  display: flex;
  margin-bottom: 1px;
  border-bottom: 1px solid #99ffd1;
}
.info-image img{
  width: 100%;
  /*height: 512px;*/
}
</style>
