<template>
  <div class="type-items">
    <div class="type-item" v-for="item in items">
      <img :src="item.pic">
      <span>{{item.text}}</span>
    </div>
  </div>
   
  
</template>

<script>
export default {
  data(){
    return {
      items:[
        {pic:require('../assets/types/types (7).png'),text:"美食"},
        {pic:require('../assets/types/types (0).png'),text:"美团超市"},
        {pic:require('../assets/types/types (1).png'),text:"生鲜果蔬"},
        {pic:require('../assets/types/types (5).png'),text:"甜点饮品"},
        {pic:require('../assets/types/types (4).png'),text:"正餐优选"},
        {pic:require('../assets/types/types (2).png'),text:"美团专送"},
        {pic:require('../assets/types/types (3).png'),text:"能量西餐"},
        {pic:require('../assets/types/types (6).png'),text:"精品小吃"}
      ]
    }
  },

  components:{
    
  }
}
</script>

<style scoped>
  .type-items{
    margin-bottom: 20px;
    overflow: hidden;
    background: #fff;
    padding-bottom: 20px;
  }
  .type-item {
    float:left;
    width:25%;
    padding-top:14px;  
  }
  .type-item img{
    display: block;
    width:50%;
    margin: 0 auto 20px;
  }
  .type-item span{
    display: block;
    text-align: center;
    font-size:14px;
  }
</style>
