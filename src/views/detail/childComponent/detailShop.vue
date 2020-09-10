<template>
<div class="shop">
  <div class="shop-base" >
    <img :src="detailShop.shopLogo">
    <span>{{detailShop.shopName}}</span>
  </div>
  <div class="shop-detail">
    <div class="cell-goods-num">
    <div class="cellNum">{{detailShop.cellNum}}<div>总销量</div></div>
    <div class="goodsNum"> {{detailShop.goodsNum}}<div>全部宝贝</div></div>
    </div>
    <div class="shop-score">
      <table>
        <tr v-for="(item, index) in detailShop.score" :key="index">
          <td>{{item.name}}</td>
          <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
          <td  ><span class="better" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高':'低'}}</span></td>
        </tr>
      </table>
  </div>
    </div>
  <div class="shopButton">
    <div class="enter-shop">进店逛逛</div>
  </div>
</div>
</template>

<script>
export default {
name: "detailShop",
  props:{
  detailShop: {
    type:Object
  }
  }
}
</script>

<style scoped>
.shop-base{
  margin-top: 5px;
  line-height: 50px;
  display: flex;
  align-items: center;
}
.shop-base img{
  width: 30px;
  height: 30px;
  border-radius:50%;
  border: 1px solid #9a9a9a;
  margin-left: 10px;
  margin-right:10px;
}
.cellNum{
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.goodsNum{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shop-detail{
  display: flex;
  justify-content: space-around;
}
.cell-goods-num{
  display: flex;
  border-right: 1px solid rgba(0,0,0,.1);
  padding-right: 10px;
}
.shop-score{
  font-size: 13px;
  color: #333;
  justify-content: space-around;
  padding: 10px;
}
.shop-score td{
  padding: 5px 0;
}
.score{
  color: #42b983;
}
.score-better{
  color: #ff5777;
}
.better{
  background-color: #42b983;
  color: #ffffff;

}
.better-more{
  background-color: #ff5777;
  color: #ffffff;
  display: inline-block;
}
.shopButton{
  margin-top: 10px;
  text-align: center;
}
.enter-shop{
  display: inline-block;
  background-color: #f1e9e9;
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
}
</style>