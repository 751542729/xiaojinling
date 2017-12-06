<template>
  <div class="Order">
    <div class="top">
        <button class="btn" @click="back"><Icon type="arrow-left-a"></Icon></button>
        <div>我的订单</div>
        <div class="iss"><Icon type="ios-search-strong"></Icon></div>
    </div>
    <div class="topcen">
        <div>
            <p>今日订单总额</p>
            <p>￥<span>0.00</span></p>
        </div>
        <div>
            <p>今日订单笔数</p>
            <p>0</p>
        </div>
        <div>
            <p>今日实收金额</p>
            <p>￥<span>0.00</span></p>
        </div>
    </div>
    <div class="nav">
    <Dropdown trigger="click">
        <a href="javascript:void(0)">
            消费订单
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>消费订单</DropdownItem>
            <DropdownItem>充值订单</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="click">
        <a href="javascript:void(0)">
            全部状态
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>全部状态</DropdownItem>
            <DropdownItem>已支付</DropdownItem>
            <DropdownItem>已作废</DropdownItem>
            <DropdownItem>未支付</DropdownItem>
            <DropdownItem>退款中</DropdownItem>
            <DropdownItem>已退款</DropdownItem>
            <DropdownItem>手动确认</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="click">
        <a href="javascript:void(0)">
            全部款台
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>收银台01</DropdownItem>
            <DropdownItem>收银台02</DropdownItem>
            <DropdownItem>收银台03</DropdownItem>
            <DropdownItem>收银台04</DropdownItem>
            <DropdownItem>收银台05</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="click">
        <a href="javascript:void(0)">
            全部支付方式
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>全部支付方式</DropdownItem>
            <DropdownItem>银行卡支付</DropdownItem>
            <DropdownItem>支付宝付款</DropdownItem>
            <DropdownItem>微信支付</DropdownItem>
            <DropdownItem>会员卡支付</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    </div>
    <ul>
        <li @click="into">
            <div>未支付</div>
            <div>
                <p>2017-12-06&ensp;20:07:59</p>
                <p>2017120620075922368822</p>
            </div>
            <div>￥<span>0.00</span></div>
            <div class="last">已作废</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Order',
    data(){
        return{
            msg:'Order'
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        into(){
            this.$router.push('/Into')
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
.iss{
    font-size: 22px;
}
.topcen{
    background-color: #f33;
    width: 90%;
    height: 80px;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.topcen>div{
    color: #fff;
    text-align: center;
}
.nav{
    height: 30px;
    display: flex;
    background-color: #eee;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
}
ul>li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    border-bottom: 0.5px solid #ddd;
}
.last{
    border: 1px solid #999;
    border-radius: 5px;
    padding: 2px 10px;
    background-color: #eee;
}
</style>

