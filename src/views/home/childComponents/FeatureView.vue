<template>
<div class="feature">
  <a href="http://act.mogujie.com/zzlx67">
    <img src="../../../assets/image/home/feature_bg.jpg">
  </a>
</div>
</template>

<script>
export default {
name: "FeatureView",
  props:{
  featureTitle:{
    type:Array,
    default:()=>[]
  }
  }
}
</script>

<style scoped>

.feature{
  width: 100%;
}

.feature img{
  width: 100%;
}

</style>