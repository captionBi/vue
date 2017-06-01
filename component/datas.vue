<template>
    <div>
    
        <a href='#/fenpei' class="weui-cell weui-cell_access" @click='fenpei()'>
            <div class="weui-cell__bd">
                <span style="vertical-align: middle">各大实力的分配</span>
            </div>
            <div class="weui-cell__ft"></div>
        </a>

        <div class="weui-cell weui-cell_access" @click='introduce()'>
            <div class="weui-cell__bd">
                <span style="vertical-align: middle">剧情介绍</span>
            </div>
            <div class="weui-cell__ft">详细信息</div>
        </div>

        <div class="weui-cell weui-cell_access" @click='team()'>
            <div class="weui-cell__bd">
                <span style="vertical-align: middle">草帽的团队</span>
            </div>
            <div class="weui-cell__ft"></div>
        </div>

 
        
    </div> 
</template>

<script>
    var xfooter=require('./xfooter.vue')
    var xheader=require('./top.vue')
    module.exports={
        methods:{
            fenpei(){
                var luyou=this.$route.path
                window.location.href = "#/fenpei";
               
            },
            introduce(){
                console.log('bb');
                window.location.href = "#/introduce";
            },
            team(){
                console.log('cc');
                window.location.href = "#/team";
            }
        }
    }
</script>  