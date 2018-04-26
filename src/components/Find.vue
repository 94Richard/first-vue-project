<template>
  <div class="find">
    <find-item v-for="item in items" :key="item.id" :item="item"></find-item>
    <app-footer></app-footer>
  </div>
  
</template>

<script>
import Footer from './Footer'
import FindItem from './FindItem'
import axios from 'axios'
export default {
  name:"Find",
  components:{
    "app-footer":Footer,
    FindItem
  },
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getFindData(){
      axios.get('api/findList').then(res => {
        if(res.data.errno===0){
          this.items=res.data.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    this.getFindData()
  }
}
</script>

<style>
.find{
  margin-bottom: 65px;
}
</style>
