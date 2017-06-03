<template>
  <transition name="move">
   <div class="food" v-show="showFlag" ref="foodScroll">
     <div class="food-content">
       <div class="img-header">
         <img :src="food.image"/>
         <span class="icon-wrap" @click="hide">
            <span class="icon-back"></span>
         </span>
       </div>
     <div class="content">
       <h1 class="title" v-text="food.name"></h1>
       <div class="detail">
         <span class="sell-count" v-text="`月售${food.sellCount}份`"></span>
         <span class="rating" v-text="`好评率${food.rating}%`"></span>
       </div>
       <div class="price">
        <span class="now" v-text="'¥'+food.price"></span>
        <s class="old" v-text="'¥'+food.oldPrice"></s>
       </div>
      <div class="cartcontrol-wrapper" v-show="food.count!=0">
      <cartcontrol :food="food"></cartcontrol>
      </div>
      <div class="buy" v-text="'加入购物车'" v-show="food.count===0||!food.count" @click="addFirst"></div>
     </div>
      <split></split>
      <div class="info" v-show="food.info">
        <h1 class='info-title'>商品介绍</h1>
        <p class="info-txt" v-text="food.info"></p>
      </div>
    <split></split>
    <div class="rating">
      <h1>商品评价</h1>
      <div class="ratingWrapper">
      <ratingselect :selectType="selectType" :onlyContent="onlyContent" :desc="desc"
      :ratings="food.ratings"  ></ratingselect>
      </div>
    </div>
    <div class="evaluate">
      <ul v-show="food.ratings&&food.ratings.length">
        <li v-show="needShow(item.rateType,item.text)" v-for="item in food.ratings" class="ratingItem">
          <div class="floatWrap clearfix">
          <div class="user">
            <span class="username">{{item.username}}</span>
            <img :src="item.avatar" class="userImg"/>
          </div>
          <div class="time">{{item.rateTime | formatDate}}</div>
          </div>
          <p class="text">
           <i :class="{'icon-good':item.rateType===0,'icon-bad':item.rateType===1}"></i>
           {{item.text}}</p>
        </li>
      </ul>
    <div class="norating" v-show="food.ratings.length===0">
      暂无评价
    </div>
    </div>
     </div>
   </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll';//引入滚动插件
  import cartcontrol from 'components/cartcontrol/cartcontrol.vue';
  import Vue from 'vue';
  import split from 'components/split/split.vue';
  import ratingselect from 'components/ratingselect/ratingSelect.vue';
  const POSITIVE=0;
  const NEGATIVE=1;
  const ALL=2;
  
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false,
      selectType:ALL,
      onlyContent:true,
      desc:{
        all:'全部',
        positive:"推荐",
        negative:"吐槽",
      }
    }
  },
  methods: {
    show() {
      this.selectType=ALL;
      this.onlyContent=true;//每次打开详情页初始化  数组 看所有评论，默认选择全部评价
      this.showFlag = true;
      this.$nextTick(() => {
        if(!this.betterScroll) {
          this.betterScroll = new BScroll(this.$refs.foodScroll, {
            click: true
          });
        } else {
          this.betterScroll.refresh();
        }
      })
    },
    hide() {
      this.showFlag = false;
    },
    addFirst() {
      if(!event._constructed) {
        return;
      };
      Vue.set(this.food,'count',1);
    },
    needShow(type,text){
      if(this.onlyContent&&!text){
        return false;
      };
      if(this.selectType===ALL){
        return true
      }else{
        return type===this.selectType;
      }
    }
    },
    events:{
      'select'(type){
        this.selectType=TypeError;
      },
      'toggle'(onlyContent){
        this.onlyContent=onlyContent;
      }
    },
    components:{
      cartcontrol,
      split,
      ratingselect,
    },
    filters:{
      formatDate(value){
        let time=new Date(value);
        return formatDate(time,'yyyy-MM-dd hh:mm');
}
}
}

function formatDate(time, fmt) {
  let str = fmt.replace(/yyyy/, time.getFullYear());
  str = str.replace(/MM/, time.getMonth()+1);
  str = str.replace(/dd/, time.getDate());
  str = str.replace(/hh/, time.getHours());
  str = str.replace(/yyyy/, time.getTime());
  str = str.replace(/mm/,time.getMinutes());
          return str };
</script>
<style>
  .food .evaluate{
    padding: 0 18px;
  }
  .food .evaluate .norating{
    font-size: 24px;
    line-height: 30px;
    padding: 6px 0;
    color: rgba(7,17,27,.2);
  }
  .food .evaluate .ratingItem{
    padding: 16px 0;
    border-bottom: 1px solid rgba(7,17,27,.1);
  }
  .food .evaluate .ratingItem .user{
    float:right;
  }
  .food .evaluate .ratingItem .user .username{
    font-size: 10px;
    line-height: 12px;
    color: rgb(147,153,169);
    padding-right: 6px;
    vertical-align: top;
  }
  .food .evaluate .ratingItem .user .userImg{
    height: 12px;
    width: 12px;
    overflow: hidden;
    border-radius: 50%;
  }
  .food .evaluate .ratingItem .time{
    float:left;
    font-size: 10px;
    color: rgb(147,153,159);
    line-height: 12px;
  }
   .food .evaluate .ratingItem .text{
     font-size: 12px;
     line-height:16px;
     color:rgb(7,17,27);
   }
</style>
<style>
  .food .food-content .rating {
    border-bottom: 1px solid rgb(7,17,27,.1);
  }
  .food .food-content .rating h1{
    font-size:14px;
    font-weight: 400;
    line-height: 14px;
    color: rgb(7,17,27);   
    margin-bottom: 6px;
    padding: 18px 0 0 18px;
  }
  .food .food-content .rating .ratingWrapper{
  }
</style>

<style>
  @import url("../../common/style.css");
  .food{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    background: #FFFFFF;
    width: 100%;
    height: 94%;
    z-index:5;
    overflow: hidden;
  }
  .food .food-content{
    
  }
  .food .img-header{
    position: relative;
    width: 100%;
    height: 0;
    padding-top:100%;
  }
  .food .img-header img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .food .img-header .icon-wrap{
    display: inline-block;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 10px;
    top: 10px;
    background: rgba(7,17,27,.4);
    border-radius: 50%;
  }
  .food .img-header .icon-back{
    display: inline-block;
    height: 30px;
    width: 30px;
    background: url(back.png) center center no-repeat;
    background-size: contain;
  }
  .food .food-content .content{
    padding-left: 18px;
    border-bottom: 1px solid rgba(7,17,27,.1);
    position: relative;
  }
  .food .food-content .content .title{
    font-size:14px;
    font-weight: 700;
    line-height: 14px;
    color: rgb(7,17,27);
    margin: 18px 0 8px 0;
  }
   .food .food-content .content .detail{
     font-size: 10px;
     line-height: 10px;
     color: rgb(147,153,159);
     margin-bottom: 9px;
   }
   .food .food-content .content .detail .sell-count{
     padding-right: 12px;
   } 
    .food .food-content .content .price{
      margin-bottom: 9px;
    }
   .food .food-content .content .price .now{
     font-size: 14px;
     font-weight: 700;
     color: rgb(240,20,20);
     line-height: 24px;
   }
   .food .food-content .content .price .old{
     font-size: 10px;
     font-weight:normal;
     color: rgb(147,153,159);
     line-height: 24px;
   }
   .food .food-content .content .cartcontrol-wrapper{
     position: absolute;
     right: 28px;
     bottom: 10px;
   }
   .food .food-content .content .buy{
     font-size: 10px;
     color: rgb(255,255,255);
     line-height: 12px;
     border-radius: 12px;
     background: rgb(0,160,220);
     padding: 6px 12px;
     position: absolute;
     right: 18px;
     bottom: 10px;
   }
   .food .food-content .info{
     padding: 18px;
     border-bottom: 1px solid rgba(7,17,27,.1);
   }
   .food .food-content .info .info-title{
     font-size: 14px;
     color: rgb(7,17,27);
     line-height: 14px;
     font-weight: 500;
   }
   .food .food-content .info .info-txt{
     padding: 6px 8px 0;
     font-size: 12px;
     font-weight: 200;
     line-height: 24px;
     color: rgb(77,85,93);
   }

/*  动画*/
  .move-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .move-enter-active{
    transition: all .5s; 
  }
  .move-leave-active{
    transition: all .5s;
    opacity: 0;
    transform: translateX(100%);
  }
</style>