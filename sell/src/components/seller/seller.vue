<template>
  <div class="seller" ref="sellerContent">
    <div class="seller-content">
      <div class="seller-header">
        <div class="favourite" @click="change">
         <span class="icon-heart" :class="{love:sign,bad:!sign}"></span> 
         <p class="txt">{{msg}}</p>
        </div>
        <div class="sellerinfo">
          <h1 class="name">{{seller.name}}</h1>
          <div class="starwrap">
            <star :size="36" :score="seller.score"></star>
          </div>
          <span class="rating-count">({{seller.ratingCount}})</span>
          <span class="month-count">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="numBox clearfix">
          <li class="block">
            <h5 class="desc">起送价</h5>
            <span class="num">{{seller.minPrice}}</span>元
          </li>
          <li class="block">
            <h5 class="desc">商家配送</h5>
            <span class="num">{{seller.deliveryPrice}}</span>元
          </li>
          <li class="block">
            <h5 class="desc">平均配送时间</h5>
            <span class="num">{{seller.deliveryTime}}</span>分钟
          </li>
        </ul>
      </div>
      <split></split>
      <div class="activity">
        <h1 class="title">公告与活动</h1>
        <p class="text">{{seller.bulletin}}</p>
        <ul class="Sinfo">
          <li class="Sitem" v-for="(item,index) in seller.supports">
            <span class="Sicon" :class="'icon'+index"></span> {{item.description}}
          </li>
        </ul>
      </div>
      <split></split>
      <div class="sellerLive">
        <div class="title">商家实景</div>
        <div class="picWrapper" ref="picWrapper" id="picW">
          <ul class="picBox clearfix" ref="picBox">
            <li v-for="item in seller.pics"><img width="120" height="90" :src="item" /></li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="sellerInfos">
        <div class="title">商家信息</div>
        <ul>
        	<li v-for="item in seller.infos" class="itemInfo">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import star from 'components/star/star.vue'; //引入star组件
  import split from 'components/split/split.vue'; //引入分隔小组件
  import BScroll from 'better-scroll'; //引入滚动组件
  import shopcart from 'components/shop/shopcart.vue'//引入购物车组件,费父子组件通信出现问题未解决，暂时无法实现
  import Vue from 'vue'

  export default {
    props: {
      seller: {
        type: Object,
      }
    },
    components: {
      star, //注册star组件
      split,
      shopcart,
    },
    created() {
      //bscroll组件必须在生命周期渲染完毕dom之后才生效，否则高度计算错误无法滚动
      this.$nextTick(() => {
        if(!this.sellerScroll) {
          this.sellerScroll = new BScroll(this.$refs.sellerContent, {
            click: true, //滚动组件内容可以单击
          })
        } else {
          this.sellerScroll.refresh();
        };

        if(this.seller.pics) {
//        let picWidth = 120;
//        let margin = 6;
//        let boxWidth = (picWidth + margin) * this.seller.pics.length - 6;
//        this.$refs.picBox.style.width = boxWidth;
          this.$nextTick(() => {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              eventPassthrough: 'vertical',
              scrollX: true
            })
          })
        }
      })
    },
    data() {
      return {
        msg:'收藏',
        sign:false,
      }
    },
    methods:{
      change() {
        if(!this.sign){
          this.sign=!this.sign;
          this.msg='已收藏';
        }else{
          this.sign=!this.sign;
          this.msg='收藏';
        }
        
      }
    }
  };
</script>

<style>
  @import url("style.css");
  .seller {
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 0px;
    overflow: hidden;
  }
  
  .seller .seller-header {
    padding: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    position: relative;
  }
  .seller .seller-header .favourite{
    position: absolute;
    right:18px;
    top: 18px;
    text-align: center;
    width: 30px;
  }
  .seller .seller-header .favourite .love{
    color: rgb(240,20,20);
    font-size: 24px;
    line-height: 24px;
  }
  .seller .seller-header .favourite .bad{
    color: rgba(7,17,27,.3);
    font-size: 24px;
    line-height: 24px;
  }
  .seller .seller-header .favourite .txt{
    font-size: 10px;
    line-height: 10px;
    color: rgb(77,85,93);
    margin-top: 4px;
  }
  
  .seller .seller-header .sellerinfo {
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  
  .seller .seller-header .name {
    font-family: "微软雅黑";
    font-size: 16px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  
  .seller .seller-header .sellerinfo .starwrap {
    display: inline-block;
    height: 18px;
    vertical-align: top;
  }
  
  .seller .seller-header .sellerinfo .starwrap .star {
    text-align: left;
  }
  
  .seller .seller-header .sellerinfo .starwrap .star .star-item {
    height: 18px;
    width: 18px;
    margin-right: 6px;
  }
  
  .seller .seller-header .sellerinfo .rating-count,
  .month-count {
    font-size: 10px;
    line-height: 18px;
    color: rgb(77, 85, 93);
    vertical-align: middle;
  }
  
  .seller .seller-header .sellerinfo .rating-count {
    margin-right: 12px;
  }
  
  .seller .seller-header .numBox {
    padding-top: 18px;
    width: 100%;
  }
  
  .seller .seller-header .numBox .block {
    float: left;
    width: 33%;
    text-align: center;
    font-size: 10px;
  }
  
  .seller .seller-header .numBox .block .desc {
    font-size: 10px;
    line-height: 10px;
    color: rgb(147, 153, 159);
    margin-bottom: 4px;
  }
  
  .seller .seller-header .numBox .block .num {
    font-size: 24px;
    line-height: 25px;
    color: rgb(7, 17, 27);
    font-weight: 200;
  }
  
  .seller .seller-header .numBox .block:nth-child(2) {
    border-left: 1px solid rgba(7, 17, 27, .1);
    border-right: 1px solid rgba(7, 17, 27, .1);
  }
  
  .seller .activity {
    padding: 18px;
    padding-bottom: 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  
  .seller .activity .title {
    font-family: "微软雅黑";
    font-size: 16px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  
  .seller .activity .text {
    font-size: 12px;
    font-weight: 400;
    color: rgb(240, 20, 20);
    line-height: 24px;
    padding: 0 12px;
  }
  
  .seller .activity .Sinfo .Sitem .icon0 {
    background: url(decrease_2@2x.png);
  }
  
  .seller .activity .Sinfo .Sitem .icon1 {
    background: url(discount_2@2x.png);
  }
  
  .seller .activity .Sinfo .Sitem .icon2 {
    background: url(guarantee_2@2x.png);
  }
  
  .seller .activity .Sinfo .Sitem .icon3 {
    background: url(invoice_2@2x.png);
  }
  
  .seller .activity .Sinfo .Sitem .icon4 {
    background: url(special_2@2x.png);
  }
  
  .seller .activity .Sicon {
    display: inline-block;
    margin-right: 6px;
    height: 16px;
    width: 16px;
    vertical-align: top;
    background-size: contain !important;
  }
  
  .seller .activity .Sinfo .Sitem {
    padding: 16px 12px;
    border-top: 1px solid rgba(7, 17, 27, .1);
    font-size: 12px;
    line-height: 16px;
    color: rgb(7, 17, 27);
    font-weight: 200;
    vertical-align: top;
  }
  
  .seller .sellerLive {
    padding: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  
  .seller .sellerLive .title {
    font-family: "微软雅黑";
    font-size: 16px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  
  .seller .sellerLive .picWrapper {
    width: 100%;
    white-space: normal;
    overflow: hidden;
  }
  
  .seller .sellerLive .picBox {
    font-size: 0;
    white-space: normal;
    width:498px;

  }
  
  .seller .sellerLive .picBox li {
    display: inline-block;
    margin-right: 6px;
    height: 90px;
    width: 120px;
  }
  
  .seller .sellerLive .picBox li:last-child {
    margin: 0;
  }
  .seller .sellerInfos{
    padding: 18px 18px 0 18px;
  }
  .seller .sellerInfos .title{
    font-family: "微软雅黑";
    font-size: 16px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .seller .sellerInfos .itemInfo{
    padding: 16px 12px;
    line-height: 12px;
    font-size: 12px;
    font-weight: 200;
    line-height: 16px;
    color: rgb(7,17,27);
    border-top: 1px solid rgba(7,17,27,.1);
  }
</style>