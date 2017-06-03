<template>
  <div class="ratings" ref="ratingscontent">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="overview-right">
          <div class="scoreWrapper">
            <span class="name">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="scoreOrange">{{seller.serviceScore}}</span>
          </div>
          <div class="scoreWrapper">
            <span class="name">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="scoreOrange">{{seller.foodScore}}</span>
          </div>
          <div class="scoreWrapper">
            <span class="name">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <split></split>
      <ratingselect :selectType="selectType" :onlyContent="onlyContent" :ratings="ratings"></ratingselect>
      <ul class="ratingList">
        <li v-for="item in ratings" class="itemList">
          <div class="time">{{item.rateTime | formatDate}}</div>
          <div class="avatar">
            <img :src="item.avatar" height="28" width="28">
          </div>
          <div class="info">
            <h1 class="name">{{item.username}}</h1>
            <div class="starwrap">
              <star :size="36" :score="item.score"></star>
            </div>
            <span class="delivery">{{item.deliveryTime}}分钟送达</span>
          </div>
          <div class="content">
            {{item.text}}
          </div>
          <div class="recommend" v-show="item.recommend" >
           <i class="icon-good"></i>
            <span v-for="txt in item.recommend" class="block red"> {{txt}}</span>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import star from 'components/star/star.vue'; //引入星星组件,接受size和score
  import split from 'components/split/split.vue';
  import ratingselect from 'components/ratingselect/ratingSelect.vue';
  import BScroll from 'better-scroll'; //引入滚动组件
  const ALL = 2;
  const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object,
      },
    },
    data() {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: true,
      }
    },
    created() {
      this.$http.get('/api/ratings').then((res) => {
        let response = res.body;
        if(response.errno === ERR_OK) {
          this.ratings = response.data;
          this.$nextTick(() => { //组件生命周期dom渲染完毕后知道height时 调用BSscroll
            if(!this.DDscroll) {
              this.DDscroll = new BScroll(this.$refs.ratingscontent, {
                click: true,
              });
            } else {
              this.DDscroll.refresh();
            }
          });
        }
      });

    },
    components: {
      star,
      split,
      ratingselect,
    },
        filters:{
      formatDate(value){
        let time=new Date(value);
        return formatDate(time,'yyyy-MM-dd hh:mm');
}
},

  };
  function formatDate(time, fmt) {
  let str = fmt.replace(/yyyy/, time.getFullYear());
  str = str.replace(/MM/, time.getMonth()+1);
  str = str.replace(/dd/, time.getDate());
  str = str.replace(/hh/, time.getHours());
  str = str.replace(/yyyy/, time.getTime());
  str = str.replace(/mm/,time.getMinutes());
          return str };
</script>
  
<!--字体文件  
-->
<style>
	@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?8pgugy');
  src:  url('fonts/icomoon.eot?8pgugy#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?8pgugy') format('truetype'),
    url('fonts/icomoon.woff?8pgugy') format('woff'),
    url('fonts/icomoon.svg?8pgugy#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bad:before {
  content: "\e900";
}
.icon-good:before {
  content: "\e901";
}
</style>
<style>
  .ratings .ratingList {
    padding: 0 18px;
  }
  
  .ratings .ratingList .itemList {
    padding: 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    position: relative;
  }
    .ratings .ratingList .itemList .time{
      font-size: 10px;
      font-weight: 200;
      line-height: 12px;
      color:rgb(147,153,159);
      position: absolute;
      right: 18px;
      top: 18px;
    }
  .ratings .ratingList .itemList .avatar img {
    border-radius: 50%;
  }
  
  .ratings .ratingList .itemList .avatar {
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 18px;
  }
  
  .ratings .ratingList .itemList .info {
    display: inline-block;
    padding-left: 58px;
  }
  
  .ratings .ratingList .itemList .info .name {
    font-size: 10px;
    line-height: 12px;
    color: rgb(7, 17, 27);
    vertical-align: top;
  }
  
  .ratings .ratingList .itemList .info .starwrap {
    display: inline-block;
    vertical-align: top;
    margin-top: -2px;
    margin-right: 6px;
  }
  
  .ratings .ratingList .itemList .info .star {
    display: inline-block;
  }
  
  .ratings .ratingList .itemList .info .star .star-item {
    height: 6px;
    width: 6px;
    margin-right: 2px;
  }
  
  .ratings .ratingList .itemList .info .delivery {
    font-size: 10px;
    font-weight: 200;
    color: rgb(147, 153, 159);
    line-height: 12px;
  }
  
  .ratings .ratingList .itemList .content {
    font-size: 12px;
    line-height: 18px;
    color: rgb(7, 17, 27);
    padding: 8px 36px 8px 58px;
  }
  .ratings .ratingList .itemList .recommend{
    padding-left: 58px;
  }
  .ratings .ratingList .itemList .recommend .block{
    display: inline-block;
    border: 1px solid rgba(7,17,27,.1);
    border-radius: 2px;
    background: #FFFFFF;
    font-size: 9px;
    line-height: 16px;
    color: rgb(147,153,159);
    height: 16px;
    padding: 0 6px;
    margin-right: 8px;    
  }
  .ratings .ratingList .itemList .recommend .icon-good{
    background: #FFFFFF;
    color: rgb(0,160,220);
    margin-right: 8px;
  }
  
  
  
  
  
  .ratings {
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
  }
  
  .ratings .overview {
    display: flex;
    padding: 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }
  
  .ratings .overview .overview-left {
    flex: 0 0 137px;
    text-align: center;
    border-right: 1px solid rgba(7, 17, 27, .1);
  }
  
  .ratings .overview .overview-left .score {
    font-size: 24px;
    color: rgb(255, 153, 0);
    line-height: 28px;
  }
  
  .ratings .overview .overview-left .title {
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 12px;
    margin: 8px 0 6px;
  }
  
  .ratings .overview .overview-left .rank {
    font-size: 10px;
    line-height: 10px;
    color: rgb(147, 153, 169);
    margin-bottom: 6px;
  }
  
  .ratings .overview .overview-right .scoreWrapper {
    font-size: 0;
    line-height: 18px;
    margin-bottom: 8px;
  }
  
  .ratings .overview .overview-right .scoreWrapper .name {
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 18px;
    padding-left: 24px;
    padding-right: 12px;
    display: inline-block;
    vertical-align: top;
  }
  
  .ratings .overview .overview-right .scoreWrapper .star {
    display: inline-block;
    height: 18px;
    vertical-align: top;
  }
  
  .ratings .overview .overview-right .scoreWrapper .star .star-item {
    height: 18px;
    width: 18px;
    margin-right: 3px;
  }
  
  .ratings .overview .overview-right .scoreWrapper .scoreOrange {
    font-size: 12px;
    color: rgb(255, 153, 0);
    line-height: 18px;
    vertical-align: top;
    margin-left: 12px;
  }
  
  .ratings .overview .overview-right .scoreWrapper .time {
    font-size: 12px;
    color: rgb(147, 153, 159);
    line-height: 18px;
    vertical-align: top;
  }
</style>