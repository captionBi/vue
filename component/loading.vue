
<template>
    <div id="loadingToast" v-show="isLoading">
        <div class="weui-mask_transparent"></div>
        <div class="weui-mask"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
            }
        },
        computed:{
            isLoading(){
              return this.$store.getters.GetLoading
            }
        },
        mounted:function(){
     
        console.log(this.$store.getters.GetLoading)
        }
    }
</script>
        
 
