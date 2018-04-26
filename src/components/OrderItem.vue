<template>
  <div class="order-item">
    <div class="top">
      <img :src="item.pic_url">
      <div>{{item.name}}</div>
      <div>{{item.status==1?"订单已完成":"未下单"}}</div>
    </div>
    <div class="mid">
      <div class="menu">
        "香辣爆炒牛肚煲仔饭"
      <span>X1</span>
      </div>
      <div class="cost">总计1个菜，实付12元</div>
    </div>
    <div class="bottom">
      <div class="purchasing">再来一单</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderItem",
  props:{
    item:Object
  }
}
</script>
<style scoped>
.order-item{
  height:180px;
  padding:15px 5px;
  background: #fff;
}
.top{
  height:50px;
  line-height:50px;
  padding:0 15px;
}
.top img{
  width:40px;
  height:40px;
  float:left;
  margin-top: 5px;
  margin-right: 10px;
  border-radius: 50%;
}
.top div:nth-child(2){
  float: left;
  font-size: 16px;
  font-weight: bold;
  color:#333;
  text-overflow: ellipsis;
  white-space: nowrap
}
.top div:nth-child(3){
  color:#999;
  font-size: 14px;
  float:right;
}
.mid{
  position: relative;
  height:70px;
  margin-left: 62px;
  margin-right: 15px;
  padding-top: 10px; 
  line-height: 25px;
  font-size:12px;
  color:#666;
}
.mid span{
  float:right;
  color:#151515;
}
.cost{
  float:right;
  font-size:14px;
}
.mid::after{
  content: "";
  position: absolute;
  width:100%;
  top:0;
  border-top:.5px solid #07111b1a;

}
.bottom{
  height:30px;
  position: relative;
  padding:0 15px;
}
.purchasing{
  float:right;
  width: 76px;
  height:24px;
  line-height:24px;
  text-align:center;
  margin: 9px 0;
  border:1px solid #ccc;
  font-size:14px;
}
.bottom::after{
  content: "";
  width:100%;
  position: absolute;
  top:0;
  left:0;
  border-top: .5px solid #ccc;
  

}
</style>