<template>
	<div class="hello">
		<router-link class='route' to='/Login'>{{msg}}</router-link>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: '登录'
			}
		}
	}
</script>

<style scoped>
	.hello{
		text-align: center;
	} 
	.route {
		display: inline-block;
		line-height: 40px;
		text-decoration: none;
		width: 240px;
		height: 40px;
		background-color: #19be6b;
		border-radius: 6px;
		border: none;
		outline: none;
		color: white;
		margin-top: 440px;
		font-size: 15px;
	}
</style>