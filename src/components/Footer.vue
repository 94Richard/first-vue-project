<template>
  <ul class="footer-bar">
    <router-link class="index" to="/" tag="li" exact>
      <i class="icon-sell"></i>
      <span>首页</span>
    </router-link>
    <router-link class="find" to="/find" tag="li">
      <i class="icon-find"></i>
      <span>发现</span>
    </router-link>
    <router-link class="order" to="/order" tag="li">
      <i class="icon-order"></i>
      <span>订单</span>
    </router-link>
    <router-link class="mine" to="/mine" tag="li">
      <i class="icon-mine"></i>
      <span>我的</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name:'TabBar',
  data(){
    return {
      selected:'tab1'
    }
  },
  components:{
  } 
}
</script>

<style scoped>
  .footer-bar{
    position: fixed; 
    bottom: 0; 
    display: flex;
    width: 100%;
    height:50px;
    background: #fcfcfc;
    text-align: center    
  }
  .footer-bar li{
    display: block;
    flex:1;
    color:#999;
  }
  i{  
    display: block;
    width: 24px;
    height: 24px;
    margin: 3px auto;
    background: url('../assets/tab-bar/tab-icons.png') no-repeat;
    background-size: 25px
  }
  .footer-bar span{
    display: block;
    font-size:12px;
  }
  .icon-find {
    background-image: url('../assets/tab-bar/find.png')
  }
  .icon-sell{
    background-position: 0 -75px;
  }
  .icon-order{
    background-position: 0 -25px;
  }
  .icon-mine{
    background-position: 0 -125px;
  }
  .router-link-active .icon-find {
    background-image: url('../assets/tab-bar/find1.png')
  }
  .router-link-active .icon-sell{
    background-position: 0 -50px;
  }
  .router-link-active .icon-order{
    background-position: 0 0;
  }
  .router-link-active .icon-mine{
    background-position: 0 -100px;
  }
</style>


