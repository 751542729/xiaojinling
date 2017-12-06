import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/template/Login/Login'
import Home from '@/components/public/Home'
import Homeson from '@/components/template/son/Homeson/Homeson'
import Form from '@/components/template/son/Form/Form'
import News from '@/components/template/son/News/News'
import My from '@/components/template/son/My/My'
import Payment from '@/components/template/son/Homeson/Payment'
import Remarks from '@/components/template/son/Homeson/Remarks'
import Lookup from '@/components/template/son/Homeson/Lookup'
import Card from '@/components/template/son/Homeson/Card'
import Order from '@/components/template/son/Homeson/Order'
import Into from '@/components/template/son/Homeson/Into'
import Member from '@/components/template/son/Homeson/Member'
import Expect from '@/components/template/son/Homeson/Expect'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',   
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/Login',
    	name:'Login',
    	component: Login,meta:{bl:false}
    },
    {
    	path:'/Home',
    	name:'Home',
    	component: Home
    },
    {
    	path:'/Homeson',
    	name:'Homeson',
    	component: Homeson,meta:{bl:true}
    },
    {
    	path:'/Form',
    	name:'Form',
    	component: Form,meta:{bl:true}
    },
    {
    	path:'/News',
    	name:'News',
    	component: News,meta:{bl:true}
    },
    {
    	path:'/My',
    	name:'My',
    	component: My,meta:{bl:true}
    },{
    	path:'/Payment',
    	name:'Payment',
    	component: Payment,meta:{bl:false}
    },{
    	path:'/Remarks',
    	name:'Remarks',
    	component: Remarks,meta:{bl:false}
    },{
    	path:'/Lookup',
    	name:'Lookup',
    	component: Lookup,meta:{bl:false}
    },{
    	path:'/Card',
    	name:'Card',
    	component: Card,meta:{bl:false}
    },{
    	path:'/Order',
    	name:'Order',
    	component: Order,meta:{bl:false}
    },{
    	path:'/Into',
    	name:'Into',
    	component: Into,meta:{bl:false}
	},{
    	path:'/Member',
    	name:'Member',
    	component: Member,meta:{bl:false}
    },{
    	path:'/Expect',
    	name:'Expect',
    	component: Expect,meta:{bl:false}
    }
  ]
})
