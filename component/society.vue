<template>
    <div class="page badge js_show">
        <xheader></xheader>
        <div class="page__bd" style="margin-top: 52px" @click='contentss()'>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                        <img src="../images/haizeiwang.jpg" style="width: 50px;display: block">
                    </div>
                    <div class="weui-cell__bd">
                        <p>海贼王</p>
                        <p style="font-size: 13px;color: #888888;">冒险</p>
                    </div>
                </div>


                <router-view></router-view>
                

            </div>
        </div>
        <xfooter></xfooter>
    </div>
</template>

<script>
   var xfooter=require('./xfooter.vue')
    var xheader=require('./top.vue')
    module.exports={
        methods:{
            contentss(){
                window.location.href = "#/society/datas";
            }
        },
        components:{
            xfooter,
            xheader
        }
    }
</script>