<template>
  <div>
    <order-item v-for="item in items" :key="item.id" :item="item"></order-item>
    <app-footer></app-footer>
  </div>
  
</template>

<script>
import Footer from './Footer'
import OrderItem from './OrderItem'
import axios from 'axios'
export default {
  name:"Order",
  components:{
    "app-footer":Footer,
    OrderItem
  },
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getOrderData(){
      axios.get('api/indexList').then(res => {
        if(res.data.errno===0){
          this.items = res.data.data.data.poilist
        }
      }).catch(err => {
        console.log(err);
        
      })
    }
  },
  created(){
    this.getOrderData()
  }
}
</script>

<style>

</style>
