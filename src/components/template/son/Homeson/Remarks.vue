<template>
  <div class="Remarks">
      <div class="top">
        <button class="btn" @click="back"><Icon type="arrow-left-a"></Icon></button>
        <div>备注</div>
        <div></div>
      </div>
      <ul>
          <li @click="del" v-for="(text,index) in texts">{{text}}</li>
      </ul>
      <div class="re">请填写备注</div>
      <textarea maxlength="99" placeholder="请输入备注内容 (可不填)" v-model="msg"></textarea>
      <div class="limit"><span>{{this.msg.length}}</span>/99个字</div>
      <Button :disabled="msg?false:true" @click="textval" class="add" type="success">添加</Button>
      <button class="Determine">确定</button>
  </div>
</template>
<script>
    export default{
        name: 'Remarks',
        data(){
            return{
                msg:'',
                divs:[''],
                texts: localStorage
            }
        },
        methods:{
            back(){
            this.$router.go(-1)
            },
            textval(){
                let lc = localStorage;
                this.divs.push(this.msg)
                let di = this.msg;
                lc.setItem(di,di)
                this.msg=''
            },
            del(event){
                event.currentTarget.hidden=true
                let i = event.target.innerText;
                localStorage.removeItem(i)
                // console.log(localStorage.clear())
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
textarea{
    width: 90%;
    display: block;
    margin: 0 auto;
    border: 1px solid #999;
    resize: none;
    outline: none;
    height: 10rem;
    border-radius: 5px;
    font-size: 15px;
    background-color: #ddd;
}
.re{
    font-size: 16px;
    margin: 20px;
}
.Determine{
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0;
    background-color: #0c9;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
}
.add{
    float: right;
    margin: 10px 20px;
    width: 65px;
    height: 33px;
    font-size: 15px;
}
.add:disabled{
    background-color: #ddd;
    color: #fff;
}
.limit{
    float: right;
    margin: -30px 30px 0 0;
    font-size: 14px;
}
ul>li{
    border-bottom: 1px solid #ddd;
    height: 40px;
    line-height: 40px;
    width: 90%;
    margin: 0 auto;
}
</style>

