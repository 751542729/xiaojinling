<template>
  <div class="Payment">
      <div class="top">
        <button class="btn" @click="back"><Icon type="arrow-left-a"></Icon></button>
        <div>收银1</div>
        <router-link class="Remarks" to="/Remarks">备注</router-link>
      </div>
      <div class="v">
          <div class="an">
				<div @click="jump">
					<Icon class="head" type="android-happy"></Icon>
				</div>
				<div>
				   <h3>请选择会员</h3>
				</div>
		  </div>
          <input type="tel" @click="clear" class="in" placeholder="请输入消费总额" :value="msg">
          </div>
          <div class="num">
              <div class="shuzi">
                <input type="button" @click="com(1)" value="1" class="number">
                <input type="button" @click="com(2)" value="2" class="number">
                <input type="button" @click="com(3)" value="3" class="number">
                <input type="button" @click="com(4)" value="4" class="number">
                <input type="button" @click="com(5)" value="5" class="number">
                <input type="button" @click="com(6)" value="6" class="number">
                <input type="button" @click="com(7)" value="7" class="number">
                <input type="button" @click="com(8)" value="8" class="number">
                <input type="button" @click="com(9)" value="9" class="number">
                <input type="button" @click="com('.')" value="." class="number">
                <input type="button" @click="com(0)" value="0" class="number">
                <button @click="backspace" value="x" class="number"><Icon type="backspace"></Icon></button>
              </div>
              <div class="zhifu">
                  <div>支付宝</div>
                  <div>微信</div>
                  <div>会员卡</div>
              </div>
          </div>
  </div>
</template>
<script>
export default {
    name:'Payment',
    data(){
        return{
            msg: ''
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        com(num){
            this.msg+=num
        },
        clear(){
            this.msg='';
        },
        backspace(){
            this.msg=this.msg.substring(0,this.msg.length-1)
        },
        jump(){
            this.$router.push('/Lookup')
        }
    }
}    
</script>
<style scoped>
html,body{
    font-size: 62.5%;
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #bbb;
    background: #0c9;
    height: 4rem;
    font-size: 18px;
    color: #fff;
    padding: 0 20px;
}
.ivu-icon-arrow-left-a{
    font-size: 20px;
}
.btn{
    border: none;
    outline: none;
    background-color: #0c9;
    color: #fff;
}
.router-link-active{
    color: #fff;
}
.head{
    margin: 0 20px;
    font-size: 28px;
}
.v{
    height: 13rem;
    background-color: #0c9;
}
.an{
	display: flex;
	align-items: center;
	color: #fff;
    padding: 20px;
    font-size: 14px;
}
.in{
    margin: 10px 5%;
    width: 90%;
    height: 70px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 15px;
    font-size: 24px;
    background-color: #49C87B;
    color: #fff;
    caret-color: #fff;
}
.in::placeholder{
    color: #777;
}
.number{
    width: 32%;
    height: 5rem;
    border: 1px solid #ddd;
    outline: none;
    margin: 0 0 3px 0;
    font-size: 28px;
    background-color: #ddd;
}
.number:last-child{
    color: #555;
}
.number:active{
    background: #ccc;
}
.num{
    display: flex;
}
.shuzi{
    width: 78%;
    height: 24rem;
}
.zhifu{
    font-size: 20px;
    width: 24%;
}
.zhifu>div{
    margin: 0 0 3px -3px;
    width: 100%;
    height: 6.74rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
}
.zhifu>div:active{
    background-color: #ccc;
}
.Remarks{
    color: #fff;
}
</style>
