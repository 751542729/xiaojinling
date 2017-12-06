<template>
  <div class="Lookup">
      <div class="top">
        <button class="btn" @click="back"><Icon type="arrow-left-a"></Icon></button>
        <div>会员管理</div>
        <button class="btn2" @click="add">添加</button>
      </div>
      <div class="input">
          <Input class="look" placeholder='请输入姓名或手机号搜索'>
             <span slot="prepend"><Icon type="ios-search-strong"></Icon></span>
             <span slot="append"><Icon type="ios-barcode-outline"></Icon></span>
          </Input>
          <Button class="btnll" size='large' type="text">取消</Button>
      </div>
  </div>
</template>
<script>
    export default{
        name:'Lookup',
        data(){
            return{
                msg:'Lookup'
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            add(){
                this.$router.push('/Card')
            }
        }
    }
</script>
<style>
.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid #bbb;
    height: 4rem;
    font-size: 18px;
    padding: 0 20px;
}
.btn{
    border: none;
    outline: none;
    background-color: #fff;
    color: #999;
    font-size: 20px;
}
.btn2{
    border: none;
    outline: none;
    background-color: #fff;
    font-size: 14px;
}
.input{
    background-color: #eee;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ivu-input-wrapper{
    width: 80%;
    font-size: 24px;
}
.ivu-input-group-prepend{
    background-color: #fff;
    border: none;
    outline: none;
    color: #bbb;
}
.ivu-input-group-append{
    background-color: #fff;
    border: none;
    outline: none;
    color: #bbb;
}
.ivu-input{
    border: none;
    outline: none;
}
.btnll{
    color: #aaa;
}
</style>
