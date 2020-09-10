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
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul>
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
  height: 80vh;
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
