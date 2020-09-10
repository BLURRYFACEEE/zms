<template>
  <div class="tabControl">
<div class="tabControl-item" v-for="(item,index) in title"
:class="{active:index === currentIndex}" @click="clicktab(index)"
>
  <span>{{item}}</span>

</div>
  </div>
</template>

<script>
export default {
name: "TabControl",
  props:{
  title:{
    type:Array,
    default:()=>[]
  },
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    clicktab:function(index) {
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tabControl{
  display: flex;
}
.tabControl-item{
  flex: 1;
  align-content: center;
  text-align: center;
  padding: 5px;
}

.active{
  color: var(--color-tint);
}
.active span{
  border-bottom: 2px solid var(--color-high-text);
}
</style>