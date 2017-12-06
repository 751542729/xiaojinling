<template>
	<div class="form">
		<div class="small">小精灵测试</div>
        <Col class="demo-tabs-style2">
            <Tabs type="card">
                <TabPane label="昨日">
                  <Scroll height="480">
                  <Row class="row">
                    <Col class="lrmon forma" span="12">
                      <Icon class="money" type="social-usd-outline"></Icon>
                        <div class="mon">订单金额(元)
                          <div>0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmon formb" span="12">
                      <Icon class="money" type="social-yen-outline"></Icon>
                        <div class="mon">实收金额(元)
                          <div>0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <Row class="row">
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="ios-paper-outline"></Icon>
                        <div class="mon">订单数
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="social-chrome-outline"></Icon>
                        <div class="mon">退款金额(元)/(笔)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <Row class="row">
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="social-bitcoin-outline"></Icon>
                        <div class="mon">手续费(元)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="ios-briefcase-outline"></Icon>
                        <div class="mon">结算金额(元)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <div class="cen"><Icon class="red" type="android-alert"></Icon> <span>实收金额=订单金额-退款金额&ensp;&ensp;结算金额=实收金额-手续费</span> </div>
                  <div class="green">支付方式统计</div>
                  <div class="wxzf"><div>微信支付</div></div>
                  <Row class="row">
                    <Col span="8"><p>订单金额</p><span>0.00</span></Col>
                    <Col span="8"><p>退款金额/笔数</p><span>0.00/0</span></Col>
                    <Col span="8"><p>实收金额</p><span>0.00</span></Col>
                    <Col span="8"><p>实收笔数</p><span>0.00</span></Col>
                    <Col span="8"><p>手续费</p><span>0.00</span></Col>
                    <Col span="8"><p>结算金额</p><span>0.00</span></Col>
                  </Row>
                  <div class="wxzf"><div>支付宝支付</div></div>
                  <Row class="row">
                    <Col span="8"><p>订单金额</p><span>0.00</span></Col>
                    <Col span="8"><p>退款金额/笔数</p><span>0.00/0</span></Col>
                    <Col span="8"><p>实收金额</p><span>0.00</span></Col>
                    <Col span="8"><p>实收笔数</p><span>0.00</span></Col>
                    <Col span="8"><p>手续费</p><span>0.00</span></Col>
                    <Col span="8"><p>结算金额</p><span>0.00</span></Col>
                  </Row>
                  </Scroll>
                </TabPane>
                <TabPane label="今日">
                  <Scroll height="480">
                  <Row class="row">
                    <Col class="lrmon forma" span="12">
                      <Icon class="money" type="social-usd-outline"></Icon>
                        <div class="mon">订单金额(元)
                          <div>0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmon formb" span="12">
                      <Icon class="money" type="social-yen-outline"></Icon>
                        <div class="mon">实收金额(元)
                          <div>0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <Row class="row">
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="ios-paper-outline"></Icon>
                        <div class="mon">订单数
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="social-chrome-outline"></Icon>
                        <div class="mon">退款金额(元)/(笔)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <Row class="row">
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="social-bitcoin-outline"></Icon>
                        <div class="mon">手续费(元)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="ios-briefcase-outline"></Icon>
                        <div class="mon">结算金额(元)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <div class="cen"><Icon class="red" type="android-alert"></Icon> <span>实收金额=订单金额-退款金额&ensp;&ensp;结算金额=实收金额-手续费</span> </div>
                  <div class="green">支付方式统计</div>
                  <div class="wxzf"><div>微信支付</div></div>
                  <Row class="row">
                    <Col span="8"><p>订单金额</p><span>0.00</span></Col>
                    <Col span="8"><p>退款金额/笔数</p><span>0.00/0</span></Col>
                    <Col span="8"><p>实收金额</p><span>0.00</span></Col>
                    <Col span="8"><p>实收笔数</p><span>0.00</span></Col>
                    <Col span="8"><p>手续费</p><span>0.00</span></Col>
                    <Col span="8"><p>结算金额</p><span>0.00</span></Col>
                  </Row>
                  <div class="wxzf"><div>支付宝支付</div></div>
                  <Row class="row">
                    <Col span="8"><p>订单金额</p><span>0.00</span></Col>
                    <Col span="8"><p>退款金额/笔数</p><span>0.00/0</span></Col>
                    <Col span="8"><p>实收金额</p><span>0.00</span></Col>
                    <Col span="8"><p>实收笔数</p><span>0.00</span></Col>
                    <Col span="8"><p>手续费</p><span>0.00</span></Col>
                    <Col span="8"><p>结算金额</p><span>0.00</span></Col>
                  </Row>
                  <div class="green">收银员统计</div>
                  <Menu width="auto" mode="vertical">
                    <Submenu name="1">
                    <template slot="title">
                      <div><Icon type="person"></Icon>
                        收银员1 
                        </div>
                      <div><p>实收金额/笔</p><span>0.00/0</span></div>
                    </template>
                    <Row class="row">
                    <Col span="8"><p>订单金额</p><span>0.00</span></Col>
                    <Col span="8"><p>退款金额/笔数</p><span>0.00/0</span></Col>
                    <Col span="8"><p>实收金额</p><span>0.00</span></Col>
                    <Col span="8"><p>实收笔数</p><span>0.00</span></Col>
                    <Col span="8"><p>手续费</p><span>0.00</span></Col>
                    <Col span="8"><p>结算金额</p><span>0.00</span></Col>
                  </Row>
                    </Submenu>
                  </Menu>
                  </Scroll>
                </TabPane>
                <TabPane label="其他">
                  <Scroll height="480">
                  <Row class="row">
                    <Col class="lrmon forma" span="12">
                      <Icon class="money" type="social-usd-outline"></Icon>
                        <div class="mon">订单金额(元)
                          <div>0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmon formb" span="12">
                      <Icon class="money" type="social-yen-outline"></Icon>
                        <div class="mon">实收金额(元)
                          <div>0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <Row class="row">
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="ios-paper-outline"></Icon>
                        <div class="mon">订单数
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="social-chrome-outline"></Icon>
                        <div class="mon">退款金额(元)/(笔)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <Row class="row">
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="social-bitcoin-outline"></Icon>
                        <div class="mon">手续费(元)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                    <Col class="lrmoney" span="12">
                      <Icon class="money" type="ios-briefcase-outline"></Icon>
                        <div class="mon">结算金额(元)
                          <div class="monson">0.00</div>
                        </div>
                    </Col>
                  </Row>
                  <div class="cen"><Icon class="red" type="android-alert"></Icon> <span>实收金额=订单金额-退款金额&ensp;&ensp;结算金额=实收金额-手续费</span> </div>
                  <div class="green">支付方式统计</div>
                  <div class="wxzf"><div>微信支付</div></div>
                  <Row class="row">
                    <Col span="8"><p>订单金额</p><span>0.00</span></Col>
                    <Col span="8"><p>退款金额/笔数</p><span>0.00/0</span></Col>
                    <Col span="8"><p>实收金额</p><span>0.00</span></Col>
                    <Col span="8"><p>实收笔数</p><span>0.00</span></Col>
                    <Col span="8"><p>手续费</p><span>0.00</span></Col>
                    <Col span="8"><p>结算金额</p><span>0.00</span></Col>
                  </Row>
                  <div class="wxzf"><div>支付宝支付</div></div>
                  <Row class="row">
                    <Col span="8"><p>订单金额</p><span>0.00</span></Col>
                    <Col span="8"><p>退款金额/笔数</p><span>0.00/0</span></Col>
                    <Col span="8"><p>实收金额</p><span>0.00</span></Col>
                    <Col span="8"><p>实收笔数</p><span>0.00</span></Col>
                    <Col span="8"><p>手续费</p><span>0.00</span></Col>
                    <Col span="8"><p>结算金额</p><span>0.00</span></Col>
                  </Row>
                  </Scroll>
                </TabPane>
            </Tabs>
        </Col>
	</div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      msg: "Form"
    };
  }
};
</script>

<style>
.small {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  border-radius: 5px;
  margin: 0 auto;
  color: #0c9;
}
.demo-tabs-style2
  > .ivu-tabs.ivu-tabs-card
  > .ivu-tabs-bar
  .ivu-tabs-tab-active {
  background-color: #0c9;
  color: #fff;
}
.ivu-tabs-nav-scroll {
  display: flex;
  justify-content: center;
}
.money {
  font-size: 30px;
}
.mon {
  margin-left: 10px;
}
.row {
  text-align: center;
  width: 90%;
  height: 80px;
  margin: 0 auto;
}
.lrmon {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  color: white;
  font-size: 14px;
}
.forma {
  background-color: #c33;
}
.formb {
  background-color: #36c;
}
.lrmoney {
  display: flex;
  align-items: center;
  height: 100%;
  color: gray;
  font-size: 14px;
  padding: 0 12px;
}
.monson {
  color: black;
}
.cen {
  width: 90%;
  color: #bbb;
  margin: 10px auto;
}
.red {
  color: #c33;
}
.green {
  border-left: 12px solid #0c9;
  color: #0c9;
}
.wxzf {
  width: 90%;
  margin: 10px auto;
}
.ivu-menu-submenu-title{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>