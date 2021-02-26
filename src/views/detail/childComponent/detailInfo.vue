<template>
<div class="detail-info">
  <div class="info-desc">
    <div class="descDecorate"></div>
    <div><p>{{detailInfo.desc}}</p></div>
    <div class="descDecorateTailDiv"><div class="descDecorateTail"></div></div>
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
.descDecorate {
  display: inline-block;
  width: 20%;
  border-bottom: 1px solid #000;
  margin-left: 10px;
}
.info-desc p{
  margin: 10px 20px;
  font-size: 15px;
}
.descDecorate::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #000;
}
.descDecorateTailDiv {
  height: 20px;
}
.descDecorateTail {
  float: right;
  width: 20%;
  border-bottom: 1px solid #000;
  margin-right: 10px;
}
/*.descDecorateTail::before {*/
/*  content: '';*/
/*  display: inline-block;*/
/*  width: 8px;*/
/*  height: 8px;*/
/*  background-color: #000;*/
/*}*/
.descDecorateTail::after {
  content: '';
  float: right;
  width: 8px;
  height: 8px;
  background-color: #000;
  margin-bottom: 4px;
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
  .info-title {
    margin-bottom: 5px;
  }
</style>
