<template>
  <div class="header">
    <div class="background">
    <img :src='seller.avatar' height="100%" width="100%" />
    </div>
    <div class="content-wraper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name" v-text="seller.name"></span>
        </div>
        <div class="description" v-text="seller.description+'/'+seller.deliveryTime"></div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[1].type]"></span>
          <span class="text" v-text='seller.supports[1].description'></span>
        </div>
        <div class="support-count" v-if="seller.supports">
          <span class="count" v-text="seller.supports.length+'个'" @click="showDetail"></span>
          <span class="arrow-right">></span>
        </div>
      </div>
    </div>
    <div class="content-bulletin">
      <span class="tit-icon"></span>
      <span class="bulletin-text">
    {{seller.bulletin}}
    </span>
      <span class="arrow-right">></span>
    </div>
    <transition name="fade">
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
        <h1 class="name" v-text='seller.name'></h1>
     <div class="star-wraper">
       <star :size='36' :score='seller.score'></star>
     </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="Sinfo">
            <li class="Sitem" v-for="(item,index) in seller.supports">
              <span class="Sicon" :class="'icon'+index"></span>
              {{item.description}}
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletinText" v-text="seller.bulletin"></div>
        </div>
      </div>
      <div class="detail-close" @click="showDetail">X</div>
    </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript">
  import star from 'components/star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    data(){
      return { detailShow:false }
    },
    methods:{
      showDetail(){
        this.detailShow = !this.detailShow;
      }
    },
    components:{
      star
    }
  };
</script>

<style>
  .header {
    color: rgb(255, 255, 255);
    position: relative;
    background: rgba(7, 17, 17, .5);
    overflow: hidden;
  }

  .header .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .header .detail{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all .5s;
    background: rgba(7,17,27,.5);
    z-index: 20;
    backdrop-filter:blur(10px);
  }
  .fade-enter-active{
    opacity:1;
    background: rgba(7,17,27,.5);
  }
  .fade-enter{
    opacity:0;
    background: rgba(7,17,27,.5);
  }
   /*.fade-leave{
    opacity:1;
    background: rgba(7,17,27,.5);
  }*/
   .fade-leave-active{
    opacity:0;
    background: rgba(7,17,27,.5);
  }

  /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .5s*/
  /*}*/
  /*.fade-enter, .fade-leave-active {*/
    /*opacity: 0*/
  /*}*/

  .header .detail .detail-wrapper{
    min-height: 100%;
    width: 100%;
  }
  .header .detail .detail-main{
   margin-top: 64px;
   padding-bottom: 64px;
  }
  .header .detail .detail-main .star-wraper{
    padding:16px 0 28px 0;
    text-align: center;
  }
  .header .detail .detail-main .title{
    display: flex;
    width:80%;
    margin:30px auto 24px auto;
  }
  .header .detail .detail-main .title .line{
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom:1px solid rgba(255,255,255,.2);
  }
  .header .detail .detail-main .title .text{
    padding:0 12px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
  .header .detail .detail-main .name{
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
  .header .detail .detail-main .Sinfo{
    margin-left: 36px;
  }
  .header .detail .detail-main .Sinfo .Sitem{
    font-size: 12px;
    color: rgb(255,255,255);
    line-height: 16px;
    font-weight: 200;
    margin-bottom: 12px;
  }
  .header .detail .detail-main .Sinfo .Sitem:last-child{
    margin-bottom: 0;
  }
  .header .detail .detail-main .Sinfo .Sitem .Sicon{
    display: inline-block;
    margin-right: 6px;
    height:16px;
    width: 16px;
    vertical-align: top;
    background-size: contain !important;
  }
  .header .detail .detail-main .Sinfo .Sitem .icon0{
    background: url(decrease_2@2x.png);
  }
  .header .detail .detail-main .Sinfo .Sitem .icon1{
    background: url(discount_2@2x.png);
  }
  .header .detail .detail-main .Sinfo .Sitem .icon2{
    background: url(guarantee_2@2x.png);
  }
  .header .detail .detail-main .Sinfo .Sitem .icon3{
    background: url(invoice_2@2x.png);
  }
  .header .detail .detail-main .Sinfo .Sitem .icon4{
    background: url(special_2@2x.png);
  }
  .header .detail .detail-main .bulletinText{
    padding:0 36px;
    font-size: 12px;
    line-height: 24px;
    color: #fff;
    font-weight: 200;
  }
  .header .detail .detail-close{
    margin: -100px auto 0 auto;
    text-align: center;
    clear: both;
    font-size: 30px;
    position: relative;
  }
  .content-wraper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
  }

  .content-wraper .avatar {
    display: inline-block;
    border-radius: 2px;
    vertical-align: top;
  }

  .content-wraper .content {
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
  }

  .content-wraper .content .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    font-size: 10px;
    background: rgba(0, 0, 0, .1);
    border-radius: 14px;
  }

  .content-wraper .content .support-count .arrow-right {
    font-weight: normal;
  }

  .content-wraper .content .title {
    margin: 2px 0 8px 0;
  }

  .content-wraper .content .title .brand {
    vertical-align: top;
    display: inline-block;
    width: 30px;
    height: 18px;
    background: url(brand@2x.png) no-repeat;
    background-size: contain;
  }

  .content-wraper .content .title .name {
    margin-left: 6px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }

  .content-wraper .content .description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .content-wraper .content .support {
    font-size: 0;
  }

  .content-wraper .content .support .icon {
    vertical-align: top;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .decrease {
    background: url(decrease_2@2x.png);
  }

  .discount {
    background: url(discount_2@2x.png);
  }

  .guarantee {
    background: url(guarantee_2@2x.png);
  }

  .invoice {
    background: url(invoice_2@2x.png);
  }

  .special {
    background: url(special_2@2x.png);
  }

  .content-wraper .content .support .text {
    font-size: 10px;
    line-height: 12px;
    vertical-align: top;
  }

  .content-bulletin {
    height: 28px;
    padding: 0 12px 0 20px;
    background: rgba(7, 17, 27, .2);
    font-size: 10px;
    line-height: 28px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
  }

  .content-bulletin .bulletin-text {
    margin: 0 4px;
    vertical-align: top;
  }

  .content-bulletin .tit-icon {
    width: 22px;
    height: 12px;
    vertical-align: top;
    margin-top: 8px;
    /* line-height: 28px;*/
    display: inline-block;
    background: url(bulletin@2x.png) 0 0;
    background-size: contain;
  }

  .content-bulletin .arrow-right {
    font-weight: normal;
    position: absolute;
    right: 8px;
    bottom: 0;
    filter: blur(10px);
  }

</style>
