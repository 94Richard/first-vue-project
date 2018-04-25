<template>
  <div class="seller-list-item">
    <div class="seller-left">
      <img :src="item.pic_url">
    </div>
    <div class="seller-right">
      <h3>{{item.name}}</h3>
      <div class="star-line">
        <div class="star-count">
          <div class="star"></div>
          <span>月售{{item.month_sale_num}}</span>
        </div>
        <div class="distance_wrap">
          <span class="delivery_time">{{item.mt_delivery_time}}</span>
          <span>{{item.distance}}</span>
        </div>        
      </div>
      <div class="seller_third_line">
          <span class="start">{{item.min_price_tip}}</span>
          <span class="delivery">{{item.shipping_fee_tip}}</span>
          <span>{{item.average_price_tip}}</span>
      </div>
      <div class="discounts" v-for="sup in item.discounts2">
      <p>
        <img :src="sup.icon_url">
        {{sup.info}}
      </p>      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['item'],
  methods:{},
  mounted(){
  }
}


</script>

<style scoped>
  .seller-list-item{
    padding:10px 0;
    margin-bottom: 5px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .seller-list-item::after{
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    bottom:0;
    border-top: 1px solid #eeefef;
  }
  .seller-left{
    flex:0 0 90px;
  }
  .seller-left img{
    display: block;
    width:70px;
    margin: 0 auto;
  }
  .seller-right{
    flex:1;
  }
  .star-line{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 7px;
    padding-right:15px;
  }
  .star-count{
    display: flex;
  }
  .star{
    width:62px;
    height:14px;
  }
  .distance_wrap{
    display: flex;
    align-items: flex-end;
  }
  .delivery_time::after{
    content: "|";
    margin:0 3px;
    color:#ddd;
  }
  .seller_third_line{
    display: flex;
    font-size:12px;
    margin-top: 5px;
  }
  .start::after,.delivery::after{
    content: '|';
    margin: 0 3px;
    color:#ddd;
  }
  .discounts{
    font-size: 13px;
    color: #b0b0b0;
    margin-top: 7px;
  }
  .discounts img{
    width: 16px;
    height: 16px;
    margin-right: 5px;
    vertical-align: top;
  }
</style>