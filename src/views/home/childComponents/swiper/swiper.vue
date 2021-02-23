<template>
  <div>
    <div class="swiper-img" v-if="banners.length" ref="swiperImg">
<!--  <a :href="banners[index].link">-->
<!--    <img :src="banners[index].image" @load="swiperImgLoad"/>-->
<!--  </a>-->

      <div class="swiperAllImg" ref="swiperAllImg">
        <a :href="banners[banners.length-2].link" v-if="banners.length">
          <img :src="banners[banners.length-1].image" @load="swiperImgLoad"/>
        </a>
        <a v-for="item in banners" :href="item.link">
          <img :src="item.image" @load="swiperImgLoad"/>
        </a>
        <a :href="banners[0].link">
          <img :src="banners[0].image" @load="swiperImgLoad"/>
        </a>
      </div>
<!--    <button class="button" id="buttonPre" @click="goPre(index)" >←</button>-->
<!--    <button class="button" id="buttonNext" @click="goNext(index)">→</button>-->
      <!--    <h2>{{imgArr[index]+index}}</h2>-->
    </div>

  </div>
</template>

<script>
export default {
name: "swiper",
  props: {
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
    index:1,
    isLoad:false,
    touchStartX:0,
    swiperWidth:0,
    playTimer:null,
    startTimerCheck:false
  }
  },
  mounted: function () {
      this.startTimer();
  },
  updated() {
  this.swiperWidth = document.body.clientWidth
    this.$refs.swiperImg.style.width = this.swiperWidth
    this.$refs.swiperAllImg.style.width = this.swiperWidth*(this.banners.length+2)+'px'
    this.$refs.swiperAllImg.style.transition = 'none'
    this.$refs.swiperAllImg.style.transform =  'translateX(-'+this.swiperWidth+'px)'
    // this.$refs.swiperAllImg.style.transition = 'all 1s ease-in-out'
    this.swapImg()
  },
  destroyed() {
  clearInterval(this.playTimer)
  },
  methods:{
  swapImg(){
    this.$refs.swiperImg.addEventListener('touchstart',(e)=>{
      console.log('start')
      console.log(this.playTimer)
      window.clearInterval(this.playTimer)
      this.touchStartX= e.touches[0].clientX
      this.$refs.swiperAllImg.style.transition = 'none'
    })
    this.$refs.swiperImg.addEventListener('touchmove',(e)=>{
      console.log('move')
      let touchX = e.touches[0].clientX
      console.log('what index ' + this.index)
      if (this.startTimerCheck) {
        this.index--
        this.startTimerCheck = false
      }
      this.$refs.swiperAllImg.style.transform =  'translateX('+(touchX-this.touchStartX-this.swiperWidth*(this.index))+'px)'
    })
    this.$refs.swiperImg.addEventListener('touchend',(e)=>{
      console.log('end')
      this.startTimer()
      this.$refs.swiperAllImg.style.transition = 'all 1s ease-in-out'
      let touchX = e.changedTouches[0].clientX
      // >0向右滑（transform为正px）
      let touchChangeX = touchX-this.touchStartX
      let direction = touchChangeX>0?1:-1
      let leftRightDistance = direction===1?-1:0
      if(Math.abs(touchX-this.touchStartX)>this.swiperWidth/5){
        this.index = this.index - direction
        // .....
        this.$refs.swiperAllImg.style.transform =  'translateX(-'+this.swiperWidth*this.index+'px)'
        if(this.index===0){
          setTimeout(()=>{
            this.$refs.swiperAllImg.style.transition = 'none'
            this.index = this.banners.length
            this.$refs.swiperAllImg.style.transform =  'translateX(-'+this.swiperWidth*this.index+'px)'
          },1000)
          // this.$refs.swiperAllImg.style.transform =  'translateX('+'0px)'
        }else {
          this.$refs.swiperAllImg.style.transition = 'all 1s ease-in-out'
        }
        if(this.index===this.banners.length+1){
          setTimeout(()=>{
            this.$refs.swiperAllImg.style.transition = 'none'
            this.index = 1
            this.$refs.swiperAllImg.style.transform =  'translateX(-'+this.swiperWidth+'px)'
          },1000)
          // this.$refs.swiperAllImg.style.transform =  'translateX('+'0px)'
        }else {
          this.$refs.swiperAllImg.style.transition = 'all 1s ease-in-out'
        }
      }else {
        this.$refs.swiperAllImg.style.transform =  'translateX(-'+this.swiperWidth*this.index+'px)'
      }
    })
  },
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
        this.startTimerCheck = true
        this.$refs.swiperAllImg.style.transform =  'translateX('+-this.swiperWidth*this.index+'px)'
        this.index++
        console.log('this.index'+this.index)
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
    height: 200px;
    transition: all 1s ease-in-out;
  }
.swiper-img{
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  position: relative;
}
.swiper-img img{
  /*display: flex;*/
  /*text-align: center;*/
  /*align-content: center;*/
  width: 375px;
  height: 200px;
  /*width: 100%;*/
  /*height: 100%;*/
}
.swiperAllImg {

}

.button {
  position: absolute;
  top: 40px;
}
#buttonPre{
  left: 0px;
}
#buttonNext{
  right: 0px;
}

</style>
