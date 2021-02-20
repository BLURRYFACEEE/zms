<template>
  <div>
    <div class="swiper-img" v-if="banners.length" ref="swiperImg">
<!--        <img :src="banners[index]"/>-->

      <div class="swiperAllImg" ref="swiperAllImg">
          <img v-for="item in banners" :src="item" @load="swiperImgLoad"/>
          <img :src="banners[0]" @load="swiperImgLoad"/>
      </div>
<!--      <button class="button" id="buttonPre" @click="goPre(index)" >←</button>-->
<!--      <button class="button" id="buttonNext" @click="goNext(index)">→</button>-->
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
      isLoad:false,
      swiperWidth:0
    }
  },
  mounted: function () {
    this.startTimer();
  },
  updated() {
    this.swiperWidth = document.body.clientWidth
    this.$refs.swiperImg.style.width = this.swiperWidth
    this.$refs.swiperAllImg.style.width = this.swiperWidth*(this.banners.length+1)+'px'
  },
  destroyed() {
    clearInterval(this.playTimer)
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
        if(this.index===this.banners.length+1){
          this.$refs.swiperAllImg.style.transition = 'none'
          this.index=0
        }else {
          this.$refs.swiperAllImg.style.transition = 'all 1s ease-in-out'
        }
        this.$refs.swiperAllImg.style.transform =  'translateX('+-this.swiperWidth*this.index+'px)'
        this.index++
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
  .swiperAllImg {
    width: 1875px;
    height: 300px;
    transition: all 1s ease-in-out;
  }
.swiper-img{
  width: 100%;
  height: 300px;
  flex-shrink: 0;
  position: relative;
}
.swiper-img img{
  /*display: flex;*/
  /*text-align: center;*/
  /*align-content: center;*/
  width: 375px;
  height: 300px;
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
