<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="tab1">
        <i class='icon-sell'></i>
        外卖    
    </mt-tab-item>   
    <mt-tab-item id="tab2">
        <i class="icon-order"></i>
        订单 
    </mt-tab-item>
    <mt-tab-item id="tab3">
        <i class="icon-find"></i>
        发现   
    </mt-tab-item>
    <mt-tab-item id="tab4">
        <i class="icon-mine"></i>
        我的      
    </mt-tab-item>
  </mt-tabbar>
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
  .mint-tab-item.is-selected{
    background: #fafafa;
  }
  
  i{
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
    background: url('../assets/tab-bar/tab-icons.png') no-repeat;
    background-size: 25px
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
  .is-selected .icon-find {
    background-image: url('../assets/tab-bar/find1.png')
  }
  .is-selected .icon-sell{
    background-position: 0 -50px;
  }
  .is-selected .icon-order{
    background-position: 0 0;
  }
  .is-selected .icon-mine{
    background-position: 0 -100px;
  }
</style>


