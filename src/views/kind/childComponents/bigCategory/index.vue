<template>
  <ul>
    <li v-for="(item,index) in bigCategories" :key="index" :class="{bigCategorySelected:index===currentIndex}" @click="bigKindTagsClick(index)">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    bigCategories:{
      type:Array
    }
  },
  methods:{
    bigKindTagsClick(index){
      this.currentIndex = index
      this.$emit('bigKindTagsClick',index)
    }
  }
}
</script>

<style scoped>
  .bigCategory li{
    text-align: center;
    padding: 15px 16px;
    font-size: 14px;
  }
  .bigCategorySelected {
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    font-weight: 600;
  }
</style>
