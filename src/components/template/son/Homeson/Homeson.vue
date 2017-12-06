<template>
	<div class="homeson">
			<ul class="green">
				<li><router-link class="a" to="/Payment"><Icon class="con" type="document-text"></Icon>付款</router-link></li>
				<li><router-link class="a" to="/Card"><Icon class="con" type="card"></Icon>办卡</router-link></li>
			</ul>
			<ul class="white">
				<li><router-link to="/Order"><Icon class="con" type="ios-paper-outline"></Icon></Icon>订单</router-link></li>
				<li><router-link to="/Expect"><Icon class="con" type="social-yen-outline"></Icon></Icon>到账</router-link></li>
				<li><router-link to="/Member"><Icon class="con" type="social-vimeo-outline"></Icon>会员</router-link></li>
			</ul>
			<ul class="white">
				<li><router-link to="/"><Icon class="con" type="ios-person-outline"></Icon>员工</router-link></li>
				<li><router-link to="/"><Icon class="con" type="ios-people-outline"></Icon>交接班</router-link></li>
				<li><router-link to="/"><Icon class="con" type="ios-help-outline"></Icon>帮助</router-link></li>
			</ul>
	</div>
</template>

<script>
	export default {
		name: 'Homeson',
		data() {
			return {
				msg: 'Homeson'
			}
		}
	}
</script>

<style scoped>
.green{
	width: 100%;
	height: 200px;
	background-color: #0c9;
	display: flex;
}
.green>li{
	width: 50%;
	height: 100%;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.green>li .a .con{
	display: block;
	text-align: center;
	font-size: 40px;
}
.a{
	color: white;
}
.white{
	width: 100%;
	display: flex;
}
.white>li{
	width: 33.3333333333333333333333333%;
	height: 130px;
	border: 0.1px solid #ddd;
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
}
a{
	color: gray;
}
.white>li .con{
	display: block;
	text-align: center;
	font-size: 30px;
}
</style>