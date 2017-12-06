<template>
	<div class="big">
		<div class="go"><button class="icon" @click="back"><Icon type="arrow-left-a"></Icon></button>登录</div>
		<Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
			<FormItem prop="user">
				<Input type="text" v-model="formInline.user" placeholder="用户名">
				<Icon type="ios-person-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="password">
				<Input type="password" v-model="formInline.password" placeholder="密码">
				<Icon type="ios-locked-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem>
				<Button type="success" long @click="handleSubmit('formInline')">登录</Button>
			</FormItem>
		</Form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					password: ''
				},
				ruleInline: {
					user: [{
						required: true,
						message: '请填写用户名',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: '请填写密码',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '密码长度不能小于6位。',
							trigger: 'blur'
						}
					]
				}
			}
		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if(valid) {
						this.$Message.success('成功!');
						this.$router.replace('/Homeson')
					} else {
						this.$Message.error('失败');
					}
				})
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	.go{
		position: fixed;
		width: 100%;
		top: 0;
		height: 45px;
		font-size: 16px;
		text-align: center;
		line-height: 45px;
		border-bottom: 1px solid;
	}
	.icon{
		position: absolute;
		left: 20px;
		line-height: 44px;
		font-size: 20px;
		border: none;
		outline: none;
		background-color: white;
		color: grey;
	}
	.big{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.form{
		width: 65%;
		height: 300px;
		margin-top: 280px;		
	}
</style>