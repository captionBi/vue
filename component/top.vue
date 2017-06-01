<template>
    <div class="weui-tabbar weui-wheader">
            <p>{{isname}}</p>
    </div>
</template>
<script>
    module.exports={
        data:function(){
            return{
               
            }
        },
        computed:{
            isname(){
                return this.$store.getters.Getname
            }
        }
    }
   
</script>