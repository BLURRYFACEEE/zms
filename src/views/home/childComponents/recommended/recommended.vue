<template>
<div class="recommended">
  <div v-for="item in recommends" class="recommended-item">
  <a :href="item.link">
    <img :src="item.image">
    <div>{{item.title}}</div>
  </a>

  </div>
</div>
</template>

<script>
export default {
name: "recommended",
  props:{
  recommends:{
    type:Array,
    default:()=>[]
  }
  }
}
</script>

<style scoped>
.recommended{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 8px 0;
  border-bottom: 8px solid #eee;
}
.recommended-item{
  flex: 1;
}
.recommended img{
  width: 90%;
}
</style>