<template>
  <div id="index">
    <div id="swipe">
      <mt-swipe>
        <mt-swipe-item v-for="item in swipeData" v-bind:key="item.id">
          <img v-bind:src="item.pic">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <type-item></type-item>

    <div class="nearby">
      <div class="title-bar">
        <span>附近商家</span>
      </div>
      <seller-list-item v-for="item in indexList" 
                        :key="item.name" 
                        :item="item">        
      </seller-list-item>
    </div>
    <app-footer></app-footer>
  </div> 

</template>

<script>
import Header from './Header'
import Footer from './Footer'
import TypeItem from './TypeItem'
import axios from 'axios'
import SellerListItem from './SellerListItem'
export default {
    name:'Index',
    data(){
      return{
        swipeData:[
          {pic:require('../assets/index/bannertemp.e8a6fa63.jpg'),id:1},       
          {pic:require('../assets/index/bannertemp.e8a6fa63.jpg'),id:2},
          {pic:require('../assets/index/bannertemp.e8a6fa63.jpg'),id:3},
          {pic:require('../assets/index/bannertemp.e8a6fa63.jpg'),id:4},
        ],
        indexList:''
      }
      
    },
    components:{
      "app-header":Header,
      "app-footer":Footer,
      TypeItem,
      SellerListItem

    },
    methods:{
      _initIndexListData () {
      axios.get('/api/indexList').then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.indexList = res.data.data.data.poilist
        }
      }).catch(err => {
        console.log(err)
      })
    }
    },
    created () {
    // 初始化列表数据
    this._initIndexListData()
  }
}
</script>

<style scoped>
  #swipe {
    height: 170px;
    text-align:center;
    overflow: hidden;
    font-size: 30px;
  }
  #swipe img{
    width:100%;
    height:100%;
  }
  .title-bar{
    height:40px;
    line-height:40px;
    text-align: center;
  } 
  .title-bar span{
    position: relative;
    font-weight:700;
    
  }
  span::before{
    content: '';
    position: absolute;
    width:30px;
    border:.5px solid #000;
    top: 8px;
    left: -45px;
  }
  span::after{
    content: '';
    position: absolute;
    width:30px;
    border:.5px solid #000;
    top: 8px;
    right: -45px;
  }
  .nearby {
    background: #fff;
  }
</style>
