<template>
  <div>
    <div class="swiper-img" v-if="banners.length" ref="swiperImg">
<!--  <a :href="banners[index].link">-->
<!--    <img :src="banners[index].image" @load="swiperImgLoad"/>-->
<!--  </a>-->
      <div class="swiperAllImg" ref="swiperAllImg">
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
