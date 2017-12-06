<template>
<div class="Card">
    <div class="top">
        <button class="btn" @click="back"><Icon type="arrow-left-a"></Icon></button>
        <div>添加会员</div>
        <div></div>
    </div>
    <Form :model="formItem" :label-width="80">
        <FormItem label="手机号">
            <Input v-model="formItem.tel" placeholder="请输入11位手机号"></Input>
        </FormItem>
        <FormItem label="姓名">
            <Input v-model="formItem.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="性别">
            <RadioGroup v-model="formItem.sex">
                <Radio label="男">男</Radio>
                <Radio label="女">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="会员等级">
            <Select v-model="formItem.v" placeholder="请选择会员等级">
                <Option value="升级会员">升级会员</Option>
            </Select>
        </FormItem>
            <Button :disabled="(formItem.tel&&formItem.name&&formItem.sex&&formItem.v)?false:true" class="add" type="success" long>确认添加</Button>
    </Form>
</div>
</template>
<script>
    export default {
        name:'Card',
        data () {
            return {
                formItem: {
                    tel: '',
                    name: '',
                    sex: '',
                    v:''
                }
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
.ivu-form{
    padding: 20px 26px 0 0;
}
.add{
    display: block;
    width: 80%;
    margin: 0 auto;
}
</style>
