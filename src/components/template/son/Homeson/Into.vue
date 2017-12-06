<template>
  <div class="Into">
      <div class="top">
        <button class="btn" @click="back"><Icon type="arrow-left-a"></Icon></button>
        <div>订单详情</div>
        <div></div>
      </div>
      <div class="ultop">
          <div>未支付</div>
          <div>实收<span>￥0.00</span></div>
      </div>
      <ul>
          <li>
              <div>订单金额：</div>
              <div>￥500.00</div>
          </li>
          <li>
              <div>交易时间：</div>
              <div>2017-12-06&ensp;20:07:38</div>
          </li>
          <li>
              <div>交易状态：</div>
              <div>已作废</div>
          </li>
          <li>
              <div>订单编号：</div>
              <div>2017120620073840507171</div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Into',
    data(){
        return{
            msg:'Into'
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
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
.ultop{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 20px;
    margin: 0 0 20px 0;
}
.ultop>div{
    line-height: 80px;
    font-size: 15px;
}
ul>li{
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    font-size: 15px;
    padding: 0 20px;
}
</style>
