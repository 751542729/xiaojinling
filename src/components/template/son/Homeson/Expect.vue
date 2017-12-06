<template>
  <div class="Expect">
      <div class="top">
        <button class="btn" @click="back"><Icon type="arrow-left-a"></Icon></button>
        <div>敬请期待</div>
        <div></div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Expect',
    data(){
        return{
            msg:'Expect'
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
</style>
