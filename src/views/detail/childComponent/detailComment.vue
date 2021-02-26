<template>
<div v-if="Object.keys(detailComment).length !== 0">
  <div class="comment-top">
    <span>用户评价</span>
    <span><a>更多</a></span>
  </div>
  <div class="comment-middle">
    <div class="comment-author">
      <img :src="'http:'+detailComment.user.avatar">
      <span>{{detailComment.user.uname}}</span>
    </div>
    <div class="comment-detail">
      <div class="content"><p>{{detailComment.content}}</p></div>
      <div class="detail-detail">
        <span>{{detailComment.created | showData}}  </span>
        <span>{{detailComment.style}}</span>
      </div>
      <div class="detail-img" >
        <img :src="'http:'+item" v-for="item in detailComment.images">
      </div>
    </div>
    <div>

    </div>
  </div>
</div>
</template>

<script>
export default {
name: "detailComment",
  props:{
  detailComment: {
    type:Object
  }
  },
  filters:{
  showData:function (value) {
    let date = new Date(value*1000)
    return formatDate(date,'yyyy-MM-dd')
  }
  }
}
import {formatDate} from "../../../common/utils";
</script>

<style scoped>
.comment-top{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999999;
  padding: 5px 0;
}
.comment-top span{
  margin: 0 5px;
}
.comment-author{
  display: flex;
  align-items: center;
}
.comment-author img{
  width: 40px;
  height: 40px;
  margin: 7px;
  border-radius: 50%;
  border: 1px solid #99ffd1;
}
.comment-middle{
  padding: 0 5px;
}
.detail-detail{
  margin-top: 5px;
}
.comment-detail p{
  font-size: 15px;
}
.detail-detail span{
  font-size: 12px;
}
.detail-img{
  margin-top: 10px;
}
.detail-img img{
  height: 80px;
  width: 80px;
  margin-right: 5px;
}
</style>
