<template>
  <div>
    <div class="swiper-img" v-if="banners.length">
        <img :src="banners[index]"/>
      <button class="button" id="buttonPre" @click="goPre(index)" >←</button>
      <button class="button" id="buttonNext" @click="goNext(index)">→</button>
      <!--    <h2>{{imgArr[index]+index}}</h2>-->
    </div>

  </div>
</template>

<script>
export default {
name: "detailSwiper",
  props:{
    interval: {
      type: Number,
      default: 3000
    },
    banners:{
      type:Array,
      default: []
    }
  },
  data(){
    return{
      index:0,
      isLoad:false
    }
  },
  mounted: function () {
    this.startTimer();
  },
  methods:{
    swiperImgLoad(){
      if(!this.isLoad){
        this.$emit('swiperImgDone')
        this.isLoad = true
      }

    },
    startTimer: function () {
      this.playTimer = window.setInterval(() => {
        this.index++
        // console.log(this.index);
        if(this.index===this.banners.length){
          this.index=0
        }
      }, this.interval)
    },
    goPre(num){
      this.index--
      if(num===0){
        this.index=this.banners.length-1
      }
    },
    goNext(num){
      this.index++
      if(num===this.banners.length){
        this.index=0
      }
    }
  }
}

</script>

<style scoped>
.swiper-img{
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  position: relative;
}
.swiper-img img{
  display: flex;
  text-align: center;
  align-content: center;
  width: 100%;
  height: 100%;
}

.button {
  position: absolute;
  top: 100px;
}
#buttonPre{
  left: 0px;
}
#buttonNext{
  right: 0px;
}

</style>