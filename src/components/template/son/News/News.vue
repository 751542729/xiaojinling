<template>
	<div class="news">
		<div class="small">消息</div>
		<div class="msg">
			<Icon class="ipo" type="ios-paper-outline"></Icon>
			<div>还没有收到消息~</div>
			</div>
	</div>
</template>

<script>
	export default {
		name: 'News',
		data() {
			return {
				msg: 'News'
			}
		}
	}
</script>

<style scoped>
.msg{
	font-size: 20px;
	color: grey;
	margin: 0 auto;
	text-align: center;
	padding-top: 160px;
}
.ipo{
	font-size: 100px;
	color: grey;
}
</style>