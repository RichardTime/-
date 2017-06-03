<template>
<div class="shopcart">
  <div class="content" @click="toggleList">
    <div class="contentleft">
      <div class="logo-wrapper">
           <div class="num" v-text="totalCount" v-show="totalCount>0"></div>
        <div class="logo">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 768 768">
<g id="icomoon-ignore">
    <line stroke-width="1" x1="16" y1="0" x2="16" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="32" y1="0" x2="32" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="48" y1="0" x2="48" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="64" y1="0" x2="64" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="80" y1="0" x2="80" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="96" y1="0" x2="96" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="112" y1="0" x2="112" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="128" y1="0" x2="128" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="144" y1="0" x2="144" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="160" y1="0" x2="160" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="176" y1="0" x2="176" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="192" y1="0" x2="192" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="208" y1="0" x2="208" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="224" y1="0" x2="224" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="240" y1="0" x2="240" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="256" y1="0" x2="256" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="272" y1="0" x2="272" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="288" y1="0" x2="288" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="304" y1="0" x2="304" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="320" y1="0" x2="320" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="336" y1="0" x2="336" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="352" y1="0" x2="352" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="368" y1="0" x2="368" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="384" y1="0" x2="384" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="400" y1="0" x2="400" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="416" y1="0" x2="416" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="432" y1="0" x2="432" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="448" y1="0" x2="448" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="464" y1="0" x2="464" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="480" y1="0" x2="480" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="496" y1="0" x2="496" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="512" y1="0" x2="512" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="528" y1="0" x2="528" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="544" y1="0" x2="544" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="560" y1="0" x2="560" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="576" y1="0" x2="576" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="592" y1="0" x2="592" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="608" y1="0" x2="608" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="624" y1="0" x2="624" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="640" y1="0" x2="640" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="656" y1="0" x2="656" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="672" y1="0" x2="672" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="688" y1="0" x2="688" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="704" y1="0" x2="704" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="720" y1="0" x2="720" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="736" y1="0" x2="736" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="752" y1="0" x2="752" y2="768" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="16" x2="768" y2="16" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="32" x2="768" y2="32" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="48" x2="768" y2="48" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="64" x2="768" y2="64" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="80" x2="768" y2="80" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="96" x2="768" y2="96" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="112" x2="768" y2="112" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="128" x2="768" y2="128" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="144" x2="768" y2="144" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="160" x2="768" y2="160" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="176" x2="768" y2="176" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="192" x2="768" y2="192" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="208" x2="768" y2="208" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="224" x2="768" y2="224" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="240" x2="768" y2="240" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="256" x2="768" y2="256" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="272" x2="768" y2="272" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="288" x2="768" y2="288" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="304" x2="768" y2="304" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="320" x2="768" y2="320" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="336" x2="768" y2="336" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="352" x2="768" y2="352" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="368" x2="768" y2="368" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="384" x2="768" y2="384" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="400" x2="768" y2="400" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="416" x2="768" y2="416" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="432" x2="768" y2="432" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="448" x2="768" y2="448" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="464" x2="768" y2="464" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="480" x2="768" y2="480" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="496" x2="768" y2="496" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="512" x2="768" y2="512" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="528" x2="768" y2="528" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="544" x2="768" y2="544" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="560" x2="768" y2="560" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="576" x2="768" y2="576" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="592" x2="768" y2="592" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="608" x2="768" y2="608" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="624" x2="768" y2="624" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="640" x2="768" y2="640" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="656" x2="768" y2="656" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="672" x2="768" y2="672" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="688" x2="768" y2="688" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="704" x2="768" y2="704" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="720" x2="768" y2="720" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="736" x2="768" y2="736" stroke="#2b343c" opacity="1"></line>
    <line stroke-width="1" x1="0" y1="752" x2="768" y2="752" stroke="#2b343c" opacity="1"></line>
</g>
<path d="M544.5 576q25.5 0 44.25 19.5t18.75 45-18.75 44.25-44.25 18.75-45-18.75-19.5-44.25 19.5-45 45-19.5zM31.5 64.5h105l30 63h474q13.5 0 22.5 9.75t9 23.25q0 7.5-4.5 15l-114 207q-18 33-55.5 33h-238.5l-28.5 52.5-1.5 4.5q0 7.5 7.5 7.5h370.5v64.5h-384q-25.5 0-44.25-19.5t-18.75-45q0-15 7.5-30l43.5-79.5-115.5-243h-64.5v-63zM223.5 576q25.5 0 45 19.5t19.5 45-19.5 44.25-45 18.75-44.25-18.75-18.75-44.25 18.75-45 44.25-19.5z"></path>
</svg>
      
        </div>
      </div>
      <div class="price" v-text="totalPrice+'元'"></div>
      <div class="desc" v-text="'另需配送费'+deliveryPrice+'元'"></div>
    </div>
    <div class="contentright" :class="enough">
      <div class="pay" v-text="payDesc" @click.stop.prevent="pay"></div>
    </div>
  </div>
  <transition name="Mask">
  <div class="listMask" v-show="listShow" @click="hideList"></div>
  </transition>
  <!--<div class="ball-container">小球动画部分全部省略，有时间再做
    <transition name="drop">
    <div class="ball" v-for="ball in balls" v-show="ball.show"></div>
    </transition>
  </div>-->
  <transition name="Back">
  <div class="assistBack" v-show="listShow"></div>
  </transition>
  <transition name="carList">
  <div class="shopcartList" v-show="listShow">
    <div class="list-header clearfix">
      <div class="title">购物车</div>
      <div class="empty" @click="empty">清空</div>
    </div>
    <div class="list-content" ref="listContent">
      <ol>
        <li v-for="item in selectFoods" class="foodlist clearfix">
          <span class="name" v-text="item.name" ></span>
          <div class="wrapper">
          <span class="price"><span class="yuan">¥</span>{{item.price}}</span>
          <div class="cartControlWrapper">
            <cartcontrol :food="item"></cartcontrol>
          </div>
          </div>
        </li>
      </ol>
    </div>
    </div>
  </transition>
</div>
</template>

<script>
  import BScroll from 'better-scroll';//引入betterscroll插件
  import cartcontrol from 'components/cartcontrol/cartcontrol.vue';
  export default {
  data() {
    return {
      fold:true,  
    }
  },
  props: {
    deliveryPrice: {
      type: Number,
//    default: 0
    },
    minPrice: {
      type: Number,
//    default: 0
    },
    selectFoods:{
      type:Array,
      default() {
        return [{
          price:10,
          count:0
        }];
      }
    }
  },
  computed:{
    totalPrice(){
      let total=0;
      this.selectFoods.forEach((food)=> {
        total += food.price*food.count;
      });
      return total
    },
    totalCount(){
      let count=0;
      this.selectFoods.forEach((food)=> {
        count+=food.count;
      });
      return count;
    },
    payDesc(){
      if(this.totalPrice === 0){
        return `${this.minPrice}元起送`;
      }else if(this.totalPrice<this.minPrice){
        let diff = this.minPrice-this.totalPrice;
        return `还差${diff}元起送`;
      }else{
        return '去结算';
      }
    },
    enough(){
        if(this.minPrice>this.totalPrice){
          return 'no_enough';
        }else{
          return 'enough'
        }
    },
    listShow() {
      if(!this.totalCount){
        this.fold=true;
        return false;//如果购物车数量为0  返回显示false 折叠菜单栏fold折叠为true
      }
      let show = !this.fold;//显示为折叠的镜像反射
      if(show){
        this.$nextTick(()=>{
          if(!this.FMscroll){
                 this.FMscroll = new BScroll(this.$refs.listContent,{
            click:true
          });//如果没有this.scroll的时候，new BScroll对象，已经创建了的话，直接调用refresh
          }else{
            this.FMscroll.refresh();
//          console.log('this。scroll',this.FMscroll);
          }
        })
      }
      return show;
    }
  },
  components:{
    cartcontrol
  },
  methods:{
    toggleList() {
      if(!this.totalCount){
        return;
      }
      this.fold=!this.fold;
    },
    empty(){
      this.selectFoods.forEach((food)=>{
        food.count=0;//清空方法：遍历选择的商品的数量属性，全部变为0
      })
    },
    hideList(){
      this.fold=true;
    },
    pay(){
      //pay方法，HTML内组织事件冒泡和默认行为
      if(this.totalPrice<this.minPrice){
        return;
      }else{
        alert(`Richard已经帮您支付${this.totalPrice}元`);
      }
    }
  }
}
</script>

<style>
  .shopcart{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 48px;
    background: #000;
  }
   .shopcart .content{
     display: flex;
     background: #141d27;
   }
   .shopcart .content .contentleft{
     flex: 1;
     font-size: 0;
   }
   .shopcart .content .contentleft .num{
     position: absolute;
     width: 24px;
     height: 16px;
     font-size: 9px;
     font-weight: 700;
     color: rgb(255,255,255);
     line-height: 16px;
     padding: 0 6px;
     background:rgb(240,20,20);
     box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
     border-radius: 6px;
     text-align: center;
     box-sizing: border-box;
     top: 0;
     left: 26px;
     z-index: 5;
   }
   .shopcart .content .contentleft .logo-wrapper{
     display: inline-block;
     position: relative;
     margin: 0 18px;
     padding:6px 0;
     width: 56px;
     height: 56px;
     border-radius:50%;
     background: #141D27;
     top: -10px;
   }
   .shopcart .content .contentleft .logo-wrapper .logo{
     width: 40px;
     height: 40px;
     border-radius:50%;
     background: #2b343c;
     background: url(shopping_cart.svg) 0 0 center;
     background-size: contain;
     position: relative;
     left: 8px;
     top: 0px;
     line-height: 40px;
     text-align: center;
   }
   .shopcart .content .contentleft .logo-wrapper .logo svg{
     margin-top: 8px;
     color:#FFFFFF;
   }
   .shopcart .content .contentleft .price{
     display: inline-block;
     vertical-align: top;
     font-size: 16px;
     font-weight: 700;
     line-height: 24px;
     color: rgba(255,255,255,.4);
     padding-right: 12px;
     margin-top:12px;
     box-sizing: border-box;
     border-right: 1px solid rgba(255,255,255,.1);
   }
   .shopcart .content .contentleft .desc{
     display: inline-block;
     margin: 12px 0  0 12px;
     vertical-align: top;
     line-height: 24px;
     font-size: 10px;
     color: rgba(255,255,255,.4);
     font-weight: 700;
     
   }
   .shopcart .content .contentright{
     flex: 0 0 105px;
     width: 105px;
   }
   .shopcart .content .enough{
      background: #00b43c;
      color: #FFFFFF;
   }
   .shopcart .content .no_enough{
      background: #2b333b;
      
   }
   .shopcart .content .contentright .pay{
     font-size: 12px;
     font-weight: 700;
     line-height: 24px;
     color: rgba(255,255,255,.4);
     text-align: center;
     margin-top: 12px;
   }
   .shopcart .content .enough .pay{
     color: #FFFFFF;
   }
   .shopcart .ball-container .ball{
     position: fixed;
     left: 32px;
     bottom:22px;
     z-index: 200;
   }
   .shopcart .assistBack{
     position: absolute;
     left: 0;
     top: -235px;
     height: 500px;
     width: 100%;
     z-index: -10;
     background: #FFFFFF;
   }
   .shopcart .shopcartList{
    position: absolute;
     left: 0;
     top: -235px;
     z-index: -10;
     width: 100%;
     overflow: hidden;
     background: #FFFFFF;
   }
   .shopcart .shopcartList .list-header{
     height: 40px;
     line-height: 40px;
     padding: 0 18px;
     background: #F3F5F7;
     border-bottom: 2px solid rgba(7,17,27,.1);
   }
   .shopcart .shopcartList .list-header .title{
     font-size: 14px;
     font-weight: 200;
     line-height: 40px;
     color: rgb(7,17,27);
     float: left;
   }
   .shopcart .shopcartList .list-header .empty{
     font-size: 12px;
     line-height: 40px;
     color: rgb(0,160,220);
     float: right;
   }
   .shopcart .shopcartList .list-content{
     background: #FFFFFF;
     padding: 0 18px;
     overflow: hidden;
     max-height: 217px;
   }
   .shopcart .shopcartList .list-content .foodlist{
     height: 48px;
     line-height: 48px;
     box-sizing:border-box;
     border-bottom:1px solid rgba(7,17,27,.1);
   }
   .shopcart .shopcartList .list-content .foodlist .name{
     font-size: 14px;
     color: rgb(7,17,27);
     line-height: 48px;
     vertical-align: top;
     overflow: hidden;
   }
   .shopcart .shopcartList .list-content .foodlist .wrapper{
     float: right;
   }
    .shopcart .shopcartList .list-content .foodlist .wrapper .price{
      font-size: 14px;
      line-height: 24px;
      color: rgb(240,20,20);
      font-weight: 700;
      margin-right: 12px;
    }
    .shopcart .shopcartList .list-content .foodlist .wrapper .price .yuan{
      font-size: 10px;
      font-weight: normal;
    }
   .shopcart .shopcartList .list-content .foodlist .wrapper .cartControlWrapper{
     display: inline-block;
     height: 48px;
     line-height: 48px;
     vertical-align: top;
   }
   .shopcart .shopcartList .list-content .foodlist .wrapper .cartControlWrapper .cartcontrol{
     margin-top: 12px;
   }
   .shopcart .listMask{
     position: fixed;
     top: 0;
     left: 0;
     height: 100%;
     width: 100%;
     z-index:-20;
     background: rgba(7,17,27,.6);
     backdrop-filter:blur(10px);
   }
   /*动画*/   
   .carList-enter{
     opacity: 0;
     transform:translateY(100%);
   }
   .carList-enter-active{
     transition: all .5s;
   }
   .carList-leave-active{
     opacity: 0;
     transform:translateY(100%);
     transition: 1s;
   }
   .Back-enter{
     opacity: 0;
   }
   .Back-enter-active{
     transition: all 1.5s;
   }
   .Mask-enter{
     opacity: 0;
   }
   .Mask-enter-active{
     opacity: 1;
     transition: all 1s;
   }
   .Mask-leave-active{
     opacity: 0;
     transition:all .5s;
   }
</style>