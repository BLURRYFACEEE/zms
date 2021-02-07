<template>
  <div>
    <div class="checkBottom" :class="{active:isChecked}">
      <img src="../../../assets/image/cart/check.svg" >
    </div>
  </div>
</template>

<script>
  export default {
    name: "checkBottom",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
.checkBottom{
  position: relative;
  margin: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  cursor: pointer;
}
.checkBottom img{
  width: 100%;
}
  .active{
    border-color: red;
    background-color: red;
  }
</style>