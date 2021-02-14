<template>
  <div id="home">
    <navi-bar class="home-nav" ><div slot="center">购物街</div></navi-bar>
    <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl1" v-show="tabControlShow"></tab-control>
    <better-scroll
        class="container"
        ref="betterScroll"
        :probe-kind="3"
        @toHomePosition="backTopHide"
        :pull-up-check="true"
        @pullingUp="pullUpDo"
    >
    <swiper :banners="banner" @swiperImgDone="swiperImgDone"></swiper>
    <recommended :recommends="recommends"></recommended>
    <feature-view />
      <tab-control :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" ></tab-control>
      <goods-list :goodslist="showGoodsList"></goods-list>
    </better-scroll>
    <back-top class="back-top" @click.native="backTopClick" v-show="backTopActive"></back-top>
  </div>

</template>

<script>

export default {
name: "home",
  components: {
  swiper, NaviBar,recommended,FeatureView,TabControl,goodsList,betterScroll,backTop
  },
  data(){
    return{
      banner:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      goodsType:'pop',
      backTopActive:false,
      tabControlHeight:0,
      tabControlShow:false,
      saveY:0
    }
  },
  created() {
    this.getSwiperData()

    this.getPageDate('pop')
    this.getPageDate('new')
    this.getPageDate('sell')

  },
  // @#@#@#@# 防抖 节流
  mounted() {
    const refresh = debounce(this.$refs.betterScroll.refresh,50)
    this.$bus.$on('imgHomeCheck',()=>{
      // this.$refs.betterScroll.refresh()
      refresh()
    })
  },
  activated() {
  this.$refs.betterScroll.backTop(0,this.saveY,10)
    this.$refs.betterScroll.refresh()
  },
  deactivated() {
  this.saveY = this.$refs.betterScroll.getScrollY()
  },
  methods:{
    // debounce(func,delay){
    //   let timer = null
    //   return function (...args){
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(() =>{
    //       func.apply(this,args)
    //     },delay)
    //   }
    // },

    //事件监听
    tabClick(res){
      switch (res){
        case 0:
          this.goodsType = 'pop'
          break
        case 1:
          this.goodsType = 'new'
          break
        case 2:
          this.goodsType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = res
      this.$refs.tabControl2.currentIndex = res
    },
    backTopClick(){
      // console.log('haha');
      this.$refs.betterScroll.backTop(0,0)
    },
    //两个功能 1.backTop是否出现 2.tabcontrol是否吸顶
    backTopHide(position){
      // console.log(position);
      this.backTopActive = ( position.y < -1000)
      this.tabControlShow = ( position.y <= -this.tabControlHeight && position.y !== 0)

    },
    pullUpDo(){
      this.getPageDate(this.goodsType)

      // this.$refs.betterScroll.scroll.refresh()
    },
    swiperImgDone(){
      // console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabControlHeight = this.$refs.tabControl2.$el.offsetTop
    },

    //网络请求
    getSwiperData(){
      getSwiperData().then(res=>{
        // console.log(res);
        this.banner = res.data.banner.list
        this.recommends = res.data.recommend.list
        // console.log(this.banner[0].image);
        // console.log(res);
        // console.log(this.banner);
      })
    },
    getPageDate(type){
      const page = this.goods[type].page+1
      getPageDate(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        // 为了刷新pullup
        this.$refs.betterScroll.scroll.finishPullUp()
      })
    },

  },
  computed:{
  showGoodsList(){
    return this.goods[this.goodsType].list
  }
  }
}
import NaviBar from "../../components/common/navigationbar/NaviBar";
import betterScroll from "../../components/common/better-scroll/betterScroll";
import TabControl from "../../components/content/TabControl";
import goodsList from "../../components/content/goods/goodsList";
import backTop from "../../components/content/backTop/backTop";

import {debounce} from "../../common/utils";

import swiper from "./childComponents/swiper/swiper";
import recommended from "./childComponents/recommended/recommended";
import FeatureView from "./childComponents/FeatureView";

import {getSwiperData,
    getPageDate
} from '../../network/home'
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #efefef;

  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 9;*/

}
.tab-control{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 9;
}
.container{
  /*height: calc(100% - 93px);*/
  height: 100vh;
  /*margin-top: 44px;*/
  margin-bottom: 44px;
  overflow: hidden;

  /*position: absolute;*/
  /*top: 44px;*/
  /*bottom: 49px;*/
}
.back-top{
  /*position: fixed;*/
  /*right: 100px;*/
  /*bottom: 20px;*/
}
.fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
