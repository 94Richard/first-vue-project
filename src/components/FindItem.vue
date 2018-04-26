<template>
  <div class="find-item">
    <div class="find-item-img"><img :src="item.img"></div>
    <div class="find-item-bottom">
      <div class="find-item-title">{{item.title}}</div>
      <div>周边生活</div>
      <div>{{item.view}}看过</div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "FindItem",
  data () {
    return {
 
    }
  },
  props:{
    item:Object,
  }
  
}
</script>
<style scoped>
.find-item{
  padding:15px;
  margin-bottom: 10px;
  height:300px;
  color:#333;
  background: #fff;
}
.find-item-img img{
  width:100%;
  height: 160px;
}
.find-item-img{
  width:100%;
  height: 160px;
}
.find-item-bottom{
  margin-top:10px;
  position: relative;
  height: 100px;
}
.find-item-title{
  font-size:18px;
  font-weight:bold;
}
.find-item-bottom div:nth-child(2){
  font-size: 14px;
  color:#999;
  margin-top: 10px;
}
.find-item-bottom div:nth-child(3){
  font-size: 14px;
  color:#999;
  position: absolute;
  bottom:0;

}
</style>