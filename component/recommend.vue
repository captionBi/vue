<template>
<div class="has_header">
    <xheader></xheader>
    <div class="weui-search-bar" ng-class="{'weui-search-bar_focusing':isShowSearchBar}" id="search_bar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="search" ng-model="searchName" ng-focus="showSearchBar()" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
                <a href="javascript:" ng-click="searchClear()" class="weui-icon-clear" id="search_clear"></a>
            </div>
            <label for="search_input" class="weui-search-bar__label" id="search_text">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
        </form>
        <a href="javascript:"  class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
    </div>

    <xswiper></xswiper>
    <xloadmore></xloadmore>
    <xloading></xloading>
    <xfooter></xfooter>
</div>
</template>

<script>
    var xswiper=require('./swiper.vue')
    var xloadmore=require('./loadmore.vue')
    var xloading=require('./loading.vue')
    var xfooter=require('./xfooter.vue')
    var xheader=require('./top.vue')

    module.exports={
     
            components:{
                xfooter,
                xswiper,
                xloadmore,
                xloading,
                xheader
            }
     
    }
</script>