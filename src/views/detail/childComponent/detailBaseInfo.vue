<template>
<div v-if="Object.keys(detailGoods).length !== 0" class="base-detail">
  <div class="title">{{detailGoods.title}}</div>
  <div class="price">
    <span class="nowPrice">￥{{detailGoods.nowPrice}}</span>
    <span class="oldPrice">{{detailGoods.oldPrice}}</span>
    <span class="discount">{{detailGoods.discount}}</span>
  </div>
  <div class="detail-detail">
    <span>{{detailGoods.columns[0]}}</span>
    <span>{{detailGoods.columns[1]}}</span>
    <span>{{detailGoods.columns[2]}}</span>
  </div>
  <div class="service" >
    <span v-for="item in detailGoods.services">
    <img :src="'http:'+item.icon" v-show="item.icon">
    <span>{{item.name}}</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
name: "detailBaseInfo",
  props:{
  detailGoods:{
    type:Object,
  }
  }
}
</script>

<style scoped>
.base-detail {
  margin-top: 2px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title{
  margin: 2px 2px 2px 2px;
  color: #222;
  font-size: 14px;
  font-family:"微软雅黑";
}
.price{
  margin-top: 5px;
}
.nowPrice{
  color: var(--color-high-text);
  font-size: 18px;
}
.oldPrice{
  text-decoration:line-through;
  font-size: 14px;
}
.discount{
  border-radius: 12px;
  padding: 3px;
  background: var(--color-high-text);
  color: #eeeeee;
  font-size: 10px;
  position: relative;
  top: -5px;
}
.detail-detail{
  margin-top: 2px;
  line-height: 20px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  justify-content: space-between;
 }
.detail-detail span{
  font-size: 12px;
}
.service{
  display: flex;
  font-size: 8px;
  line-height: 30px;
  justify-content: space-between;
}
.service img{
  height: 10px;
  width: 10px;
}
</style>
