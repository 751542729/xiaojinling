<template>
	<div class="home">
		<ul>
			<li><router-link to='/Homeson'><Icon class="con" type="home"></Icon>主页</router-link></li>
			<li><router-link to='/Form'><Icon class="con" type="pie-graph"></Icon>报表</router-link></li>
			<li><router-link to='/News'><Icon class="con" type="chatbubble-working"></Icon>消息</router-link></li>
			<li><router-link to='/My'><Icon class="con" type="android-person"></Icon>我的</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
			}
		}
	}
</script>

<style>
.home{
	position: relative;
}
.home>ul{
	width: 100%;
	height: 75px;
	display: flex;
	position: fixed;
	bottom: 0px;
	border-top: 1px solid;
	font-size: 16px;
	align-items: center;
	background-color: white;
	z-index: 99999;
}
.home>ul>li{
	width: 25%;
	text-align: center;
}
.home>ul>li .con{
	display: block;
	font-size: 30px;
}
a{
	color: grey;
}
a:hover{
	color: #0c9;
}
.router-link-active{
	color: #0c9;
}
</style>