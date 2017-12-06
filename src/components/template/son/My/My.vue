<template>
	<div class="my">
			<div class="an">
				<div>
					<Icon class="head" type="android-happy"></Icon>
				</div>
				<div>
				   <h2>小精灵测试</h2>
				   <span>账号：</span><span>shouying01</span>
				</div>
			</div>
			<ul class="contant">
				<li><Icon class="myicon" type="social-buffer-outline"></Icon><div>我的服务商</div></li>
				<li><Icon class="myicon" type="social-codepen-outline"></Icon><div>签约信息</div></li>
				<li><Icon class="myicon" type="android-expand"></Icon><div>店码</div></li>
				<li><Icon class="myicon" type="android-settings"></Icon><div>设置</div></li>
				<li><Icon class="myicon" type="ios-chatbubble-outline"></Icon><div>关于版本号：1.21</div></li>
				<li><Icon class="myicon" type="ios-telephone-outline"></Icon><div>客服热线：4000-122-155</div></li>
				<li><Icon class="myicon" type="ios-redo-outline"></Icon><div>退出账号</div></li>
			</ul>
	</div>
</template>

<script>
	export default {
		name: 'My',
		data() {
			return {
				msg: 'My'
			}
		}
	}
</script>

<style scoped>
.head{
	font-size: 50px;
}
.an{
	display: flex;
	align-items: center;
	background-color: #0c9;
	height: 150px;
	color: #fff;
}
.an>div:nth-of-type(1){
	margin: 0 20px;
}
.contant>li{
	height: 50px;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;
}
.contant>li>.myicon{
	font-size: 24px;
	margin: 0 20px;
	color: #0c9;
}
.contant>li>div{
	font-size: 15px;
	color: #aaa;
}
</style>