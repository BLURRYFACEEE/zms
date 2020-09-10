<template>
<div id="detail">
  <detail-bar class="detail-bar" @detailBarEmit="detailBarGet" ref="bar"></detail-bar>
  <BScroll class="content" ref="Bscroll" :probe-kind="3" @toHomePosition="getScrollHeight">
    <ul>
      <li v-for="item in $store.state.cartList">
        {{item}}
      </li>
    </ul>
    <detail-swiper :banners="banner"></detail-swiper>
    <detail-base-info :detail-goods="goods"></detail-base-info>
    <detail-shop :detail-shop="shop"></detail-shop>
    <detail-info :detail-info="detailInfo" @imgLoadDone="imgLoadDone"></detail-info>
    <detail-param :param-info="paramInfo" ref="param"></detail-param>
    <detail-comment :detail-comment="commentInfo" ref="comment"></detail-comment>
    <goods-list :goodslist="recommends" ref="recommend"></goods-list>
  </BScroll>
  <back-top class="back-top" @click.native="backTopClick" v-show="backTopActive"></back-top>
  <detail-bottom @goCart="cartCheck"></detail-bottom>
</div>
</template>

<script>


import {debounce} from "../../common/utils";

export default {
name: "Detail",
  components: {DetailBaseInfo, Swiper, detailBar,detailSwiper,detailShop,BScroll,detailInfo,detailParam,detailComment,goodsList,detailBottom,backTop},
  data(){
  return{
    iid:null,
    banner: [],
    goods: {},
    shop: {},
    detailInfo: {},
    paramInfo: {},
    commentInfo:{},
    recommends:[],
    pagePos:[],
    currentHeight:0,
    backTopActive:false,
  }
},
  created(){
  this.iid = this.$route.params.iid
    // console.log(this.$route.params.iid);
    // console.log('???');
    detail(this.iid).then((res)=>{
      console.log(res);
      // 2.1.获取结果
      const data = res.result;
      this.banner = data.itemInfo.topImages

      // 2.3.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 2.4.获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 2.5.获取商品信息
      this.detailInfo = data.detailInfo
      // 2.6.保存参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      // 2.7.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }

    })
    detailRecommend().then(res=>{
      this.recommends = res.data.list
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.Bscroll.refresh,50)
    this.$bus.$on('imgDetailCheck',()=>{
      // this.$refs.betterScroll.refresh()
      refresh()
    })
  },
  methods:{
    imgLoadDone(){
      this.$refs.Bscroll.refresh()
      this.pagePos = []
      this.pagePos.push(0)
      this.pagePos.push(this.$refs.param.$el.offsetTop)
      this.pagePos.push(this.$refs.comment.$el.offsetTop)
      this.pagePos.push(this.$refs.recommend.$el.offsetTop)
      this.pagePos.push(Number.MAX_VALUE)
      // console.log(this.pagePos);
    },
    detailBarGet(index){
      // console.log(index);
      this.$refs.Bscroll.backTop(0,-this.pagePos[index],500)
    },
    getScrollHeight(position){
      this.currentHeight = -position.y
      // console.log(this.currentHeight);
      // this.$refs.bar.currentIndex = this.pagePos.length-1
      for (let i = 0;i<this.pagePos.length;i++){
        // 空间换时间 用最大的数来限制满足所以条件
        // if(i < (this.pagePos.length-1) && this.currentHeight >= this.pagePos[i] && this.currentHeight < this.pagePos[i+1] || (i === (this.pagePos.length-1) && this.currentHeight >= this.pagePos[i] )){
        if( this.currentHeight >= this.pagePos[i] && this.currentHeight < this.pagePos[i+1]  ){
          // console.log(i);
          this.$refs.bar.currentIndex = i
        }else if(this.currentHeight <=0){
          this.$refs.bar.currentIndex = 0
        }

      }
      this.backTopActive = ( position.y < -1000)
    },
    backTopClick(){
      // console.log('haha');
      this.$refs.Bscroll.backTop(0,0)
    },
    cartCheck(){
      const cartInfo = {}
      cartInfo.img = this.banner[0]
      cartInfo.title = this.goods.title
      cartInfo.desc = this.goods.desc
      cartInfo.price = this.goods.nowPrice
      cartInfo.iid = this.iid
      this.$store.commit('addCart',cartInfo)
    }
  }
}
import Swiper from "../home/childComponents/swiper/swiper";
import BScroll from "../../components/common/better-scroll/betterScroll"
import goodsList from "../../components/content/goods/goodsList";
import backTop from "../../components/content/backTop/backTop";

import detailBar from "./childComponent/detailBar";
import detailSwiper from "./childComponent/detailSwiper";
import DetailBaseInfo from "./childComponent/detailBaseInfo";
import detailShop from "./childComponent/detailShop";
import detailInfo from "./childComponent/detailInfo";
import detailParam from "./childComponent/detailParam";
import detailComment from "./childComponent/detailComment";
import detailBottom from "./childComponent/detailBottom";

import {detail,Goods,Shop,GoodsParam,detailRecommend} from "../../network/detail";
</script>

<style scoped>
#detail{
  position: relative;
  background-color: #ffffff;
  z-index: 1;
  height: 100vh;
}
.detail-bar{
position: relative;
  z-index: 9;
  background-color: #ffffff;
}
.content{
  height: calc(100% - 44px - 49px);
}
</style>