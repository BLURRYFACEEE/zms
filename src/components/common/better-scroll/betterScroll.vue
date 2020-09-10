<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "betterScroll",
  data(){
    return{
       scroll:null,
    }
  },
  props:{
    probeKind: {
      type:Number,
      default:0
    },
    pullUpCheck:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeKind,
      pullUpLoad:this.pullUpCheck
    })
    // toHomePositon也是事件
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('toHomePosition',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    backTop(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      console.log('=====');
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y :0
    }
  }

}
import BScroll from 'better-scroll'
</script>

<style scoped>

</style>