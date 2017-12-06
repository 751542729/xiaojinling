<template>
	<div id="app">
		<Home v-show="$route.meta.bl"></Home>
		<router-view/>
	</div>
</template>

<script>
	import Home from '@/components/public/Home'
	export default {
		name: 'app',
		components: {
			Home
		}
	}
</script>

<style>
	#app {

	}
</style>