
<template>
    <div class="weui-tabbar">
        <a  href="#/recommend" class="weui-tabbar__item" :class="{'weui-bar__item_on':item==0}" @click="itemOn('推荐')">
            <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">推荐</p>
        </a>
        <a  href="#/yule" class="weui-tabbar__item" :class="{'weui-bar__item_on':item==1}" @click="itemOn('娱乐')">
            <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">娱乐</p>
        </a>
        <a  href="#/society" class="weui-tabbar__item" :class="{'weui-bar__item_on':item==2}" @click="itemOn('社会')">
            <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">社会</p>
        </a>
        <a  href="#/military" class="weui-tabbar__item" :class="{'weui-bar__item_on':item==3}" @click="itemOn('军事')">
            <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">军事</p>
        </a>
    </div>
</template>
<script>
    var $ =require('jquery');
    module.exports={
        data(){
            return{
                name:'',
                item:''

            }
        },
        methods:{
            itemOn(e){
                this.name=e;
                if(e==='推荐'){
                    this.item=0;
                }else if(e==='娱乐'){
                    this.item=1;
                }else if(e==='社会'){
                    this.item=2;
                }else if(e==='军事'){
                    this.item=3;
                }
                this.$store.commit('isname',this.name);
            }
        },
        mounted(){
          this.$store.commit('isname',this.name);

              if(this.$route.path.indexOf('recommend')==1){
                     this.$store.commit('isname','推荐');
                     this.item=0;

               }else if(this.$route.path.indexOf('yule')==1){
                     this.$store.commit('isname','娱乐');
                      this.item=1;

               }else if(this.$route.path.indexOf('society')==1){
                     this.$store.commit('isname','社会');
                     this.item=2;

               }else if(this.$route.path.indexOf('military')==1){
                     this.$store.commit('isname','军事');
                     this.item=3;

               }  
        }
    }
   
</script>