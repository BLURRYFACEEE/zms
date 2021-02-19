<template>
  <div id="person">
    <navi-bar class="kind-nav" ><div slot="center">个人中心</div></navi-bar>
    <div class="userInfo">
      <div class="userAvatarALogin">
        <div class="avatar"></div>
        <div class="login">
          <div>登录/注册</div>
          <div class="phone"><img src="../../assets/image/person/phone.png" class="phoneImg"><span>暂无绑定手机号</span></div>
        </div>
        <div class="rightArrow"><img src="../../assets/image/person/rightArrow.png"></div>
      </div>
      <div class="mine">
        <div class="mineArea myMoney"><div class="numArea"><span class="num">0.00</span>元</div><div>我的余额</div></div>
        <div class="mineArea myCount"><div class="numArea"><span class="num">0</span>个</div><div>我的优惠</div></div>
        <div class="mineArea myScore"><div class="numArea"><span class="num">0</span>分</div><div>我的积分</div></div>
      </div>
      <div class="userInfoArea">
        <div class="info"><img src="../../assets/image/person/userInfo.png"><span>我的消息</span></div>
        <div class="info"><img src="../../assets/image/person/shop.png"><span>积分商城</span></div>
        <div class="info"><img src="../../assets/image/person/member.png"><span>会员卡</span></div>
      </div>
      <div class="userInfoArea">
        <div class="info"><img src="../../assets/image/person/cart.png"><span>我的购物车</span></div>
        <div class="info"><img src="../../assets/image/person/app.png"><span>下载购物APP</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import NaviBar from "../../components/common/navigationbar/NaviBar";
export default {
name: "person",
  components: {
  NaviBar
}
}
</script>

<style scoped>
  #person {
    background-color: rgba(0,0,0,0.05);
  }
.naviBar {
  background-color: var(--color-tint);
  color: #efefef;
}
.userAvatarALogin {
  position: relative;
  background-color: var(--color-tint);
  color: #efefef;
}
.login {
  display: inline-block;
  line-height: 100%;
  vertical-align: middle;
}
.avatar {
  display: inline-block;
  height: 60px;
  width: 60px;
  vertical-align: middle;
  margin: 10px 10px 15px 15px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url("../../assets/image/person/avatar.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 2px;

}
  .phoneImg {
    height: 21px;
    vertical-align: middle;
    position: relative;
    left: -3px;
  }
  .phone {
    margin-top: 5px;
  }
  .phone span {
    font-size: 14px;
  }
  .rightArrow{
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .rightArrow img{
    height: 20px;
  }
  .mine {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .mineArea {
    padding: 20px 30px 15px 30px;
    text-align: center;
  }
  .num {
    color: #fc7200;
    font-size: 24px;
    font-weight: 700;
  }
  .numArea {
    margin-bottom: 5px;
  }
  .myMoney {
    border-right: 1px solid #efefef;
  }
  .myCount {
    border-right: 1px solid #efefef;
  }
  .info {
    padding: 10px;
  }
  .userInfoArea {
    background-color: #fff;
    color: #282828;
    margin-bottom: 10px;
  }
  .userInfoArea img {
    width: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .userInfoArea span {
    vertical-align: middle;
  }
</style>
