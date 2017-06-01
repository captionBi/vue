import $ from "jquery"
window.$=$;
import Vue from "vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex';
Vue.use(VueRouter);
Vue.use(Vuex);


require("./css/weui.css")
require("./css/base.css")
require("./css/swiper.css")



var xrecommend=require('./component/recommend.vue')
var xmilitary=require('./component/military.vue')
var xyule=require('./component/yule.vue')
var xdetail=require('./component/details.vue')
var xsociety=require('./component/society.vue')
var xdatas=require('./component/datas.vue')
var xfenpei=require('./component/fenpei.vue')
var xintroduce=require('./component/introduce.vue')
var xteam=require('./component/team.vue')

console.log(xteam)

var store=new Vuex.Store({
    state:{
        isLoading:'',
        xname:''
    },
    mutations:{
        Loading(state,data){
            
            state.isLoading=data;
        },
        isname(state,data){
            
            state.xname=data;
        }
    },
    getters:{
        GetLoading(state){
            return state.isLoading
        },
        Getname(state){
            return state.xname
        }
    }
});

var router=new VueRouter({
    routes:[{
        path:'/recommend',
        component:xrecommend
    },{
        path:'/society',
        component:xsociety,
        children:[{
            path:'datas',
            component:xdatas
        }]
    },{
        path:'/detail/:id',
        component:xdetail
    },{
        path:'/fenpei',
        component:xfenpei,
    },{
        path:'/introduce',
        component:xintroduce
    },{
        path:'/team',
        component:xteam
    },{
        path:'/military',
        component:xmilitary
    },{
        path:'/yule',
        component:xyule
    },{
        path:'/',
        redirect:'/recommend'
    }]
})



            

new Vue({
    el:'#demo',
    router,
    store,
    components:{
     
    },
    template:`
        <div>
           
            <router-view></router-view>
            
        </div>
    `,
    data:{
        name:'test'
    }
})
