<template>
  <div>
    <div class="header">
      <div class="personal">
        <div class="personal_img">
          <img src="../assets/img/lazyload.jpeg">
        </div>
        <div class="personal_login" @click="login">
          <span>登录</span>
          <span>个人信息<i class="iconfont icon-qianjin"></i></span>   
        </div>
      </div>
      <div class="setting">
        <i class="iconfont icon-weibiaoti-"></i>
        <i class="iconfont icon-youxiang"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
    </div> 
    <div class="mid">
     <div><i class="iconfont icon-shoucang"></i><span>我的收藏</span></div>
     <div><i class="iconfont icon-zuji"></i><span>我的足迹</span></div>
     <div><i class="iconfont icon-shouhuodizhi"></i><span>收货地址</span></div>
     <div><i class="iconfont icon-yue"></i><span>余额</span></div>
    </div> 
    <div class="bottom"></div>
    <app-footer></app-footer>
  </div>
  
</template>

<script>
import Footer from './Footer'
export default {
  name:"Mine",
  components:{
    "app-footer":Footer,
  },
  methods:{
    login(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped>
.header{
  height:120px;
  width:100%;
  background: #06c1ae;
  display: flex;
}
.personal{
  flex: 2;
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
}
.personal_img img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.personal_login{
  display: flex;
  flex-direction: column;
  color:#fff;
  margin-left: 20px;
  margin-top: 10px;
  justify-content: space-between;
  height: 55px;
}
.personal_login span:nth-child(1){
  font-size:16px;
  font-weight: bold;
}
.personal_login span:nth-child(2){
  font-size:16px;
  color:#fcfefe;
}
.setting{
  display: flex;
  flex: 1;
}
.setting i{
  color:#fff;
  font-size:18px;
  font-weight:bold;
  flex:1;
  margin-top: 10px;
  margin-left: 15px;
}
.mid{
  background: #fff;
  margin-top: 16px; 
}
.mid>div{
  color:#333;
  height:44px;
  margin: 0 15px;
  padding: 0 10px;
  line-height:44px;
}
.mid div:nth-child(n+2){
  border-top:1px solid #eee;
}
.mid i{
  color:#fe970f;
  font-size:20px;
}
.mid span{
  margin-left:10px;
}
</style>
