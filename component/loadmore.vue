<template>
    <div class="weui-panel weui-panel_access" style="margin-top: 0px; margin-bottom: 53px;">
        <div class="weui-panel__hd">图文组合列表</div>
        <div class="weui-panel__bd" >
            <a  v-for="n in newss" class="weui-media-box weui-media-box_appmsg" :name="n.id" :href="'#/detail/' + n.id">
                <div class="weui-media-box__hd">
                    <img :src="n.img" class="weui-media-box__thumb"  alt="" />
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{n.title}}</h4>
                    <p class="weui-media-box__desc">{{n.id}}</p>
                </div>
            </a>
        </div>
        <div class="weui-panel__ft">
            <a href="javascript:void(0);" @click="loadmore()" class="weui-cell weui-cell_access weui-cell_link">
                <div class="weui-cell__bd">查看更多</div>
                <span class="weui-cell__ft"></span>
            </a>
        </div>
    </div>
</template>

<script>
    module.exports={

    data:function(){
        return{
            newss:[],
            page:1,
            isLoading:false,
            limit:10
        }
    },
    methods:{
        loadmore:function(){
             var self=this;
             self.isLoading=true;
             this.$store.commit('Loading',this.isLoading)
            $.ajax({
                type:'get',
                //url:'../story.php',//这样写找不到路劲
                //url:'http://localhost/day19/vue/story.php',//跨域 两种方法 在php添加请求头 或者利用jsonp
                url:'https://cnodejs.org/api/v1/topics',
                dataType:'json',
                data:{
                    page:this.page,
                    limit:10
                }
            }).then(function(data){
                //console.log(data);
                self.newss=self.newss.concat(data.data);
                //console.log(self.newss);
                self.isLoading=false;
                self.$store.commit('Loading',self.isLoading)
                self.page++;

            })
        }
    },
    mounted(){
        this.loadmore()
    }
}
</script>