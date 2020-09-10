<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "tabbar"
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100,100,100,.1);
}

</style>
