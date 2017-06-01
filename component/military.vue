<template>
    <div>
        <xheader></xheader>
       
        <xfooter></xfooter>
    </div>
</template>

<script>
   var xfooter=require('./xfooter.vue')
    var xheader=require('./top.vue')
    module.exports={
        components:{
            xfooter,
            xheader
        }
    }
</script>