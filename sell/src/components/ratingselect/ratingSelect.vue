<template>
  <div class="ratingselect">
    <div class="ratingType">
     <span class="ratingBlock BA" :class="{'active':selectType===2}" @click="select(2)">{{desc.all}}<span class="num">{{positives.length+negatives.length}}</span></span>
     <span class="ratingBlock BP" :class="{'active':selectType===1}" @click="select(1)">{{desc.positive}}<span class="num">{{positives.length}}</span></span>
     <span class="ratingBlock BN" :class="{'activeTwo':selectType===0}" @click="select(0)">{{desc.negative}}<span class="num">{{negatives.length}}</span></span>
    </div>
    <div class="switch">
      <span class="iconw" :class="{'iconAct':onlyContent}" @click="toggle(onlyContent)">
        <span class="iconTrue"></span>
      </span>
      <span class="Stext">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  const POSITIVE=0;
  const NEGATIVE=1;
  const ALL=2;
  
  export default {
    props:{
      ratings:{
        type:Array,
        default() {
          return [];
        }
      },
      selectType:{
        type:Number,
        default:ALL,
      },
      onlyContent:{
        type:Boolean,
        default:false,
      },
      desc:{
        type:Object,
        default() {
          return {
            all:"全部",
            positive:"满意",
            negative:"不满意",
          }
        }
      }
    },
    methods:{
      select(type) {
        if(!event._constructed){
          return;
        }//取消滚动插件默认行为
        this.selectType=type;
//      this.$dispatch('ratingtype.select',type);
        this.$emit('select',type);//子组件触发事件时
      },
      toggle(onlyContent) {
        if(!event._constructed){
          return;
        }//取消滚动插件默认行为
        this.onlyContent=!this.onlyContent;
//      this.$dispatch('content.toggle', this.onlyContent);
        this.$emit('toggle',onlyContent);
}
},
      computed: {
        positives() {
          return this.ratings.filter((item) => {
            return item.rateType === POSITIVE;
          });
        },
        negatives() {
          return this.ratings.filter((item) => {
            return item.rateType === NEGATIVE;
          });
        },
      },
}</script>

<style>
  .ratingselect{
    padding: 0 18px;
    border-bottom: 1px solid rgba(7,17,27,.1);
  }
  .ratingselect .ratingType{
    padding: 12px 0;
    border-bottom: 1px solid rgba(7,17,27,.1);
  }
  .ratingselect .ratingType .active{
    background: rgb(0,160,220)!important;
    color: #FFFFFF!important;
  }
  .ratingselect .ratingType .activeTwo{
    background: rgb(77,85,93)!important;
    color:#FFFFFF!important;
  }
  .ratingselect .ratingType .ratingBlock{
    display: inline-block;
    padding: 8px 12px;
    font-size: 12px;
    line-height: 16px;
    border-radius: 2px;
  }
  .ratingselect .ratingType .ratingBlock .num{
    font-size: 8px;
  }
   .ratingselect .ratingType .BA{
     background: rgba(0,160,220,.2);
     color: rgb(77,85,93);
   }
   .ratingselect .ratingType .BP{
     background: rgba(0,160,220,.2);
     color: rgb(77,85,93);
   }
   .ratingselect .ratingType .BN{
     background: rgba(77,85,93,.2);
     color: rgb(77,85,93);
   }
   .ratingselect .switch .iconTrue{
     display: inline-block;
     height: 16px;
     width: 16px;
     background: url(selected.png) center center no-repeat;
     background-size: contain;
   }
   .ratingselect .switch .iconw{
     display: inline-block;
     height: 16px;
     width: 16px;
     background: rgb(147,153,159);
     overflow:hidden;
     text-align: center;
     line-height: 20px;
     border-radius: 50%;
   }
   .ratingselect .switch .iconAct{
     background: #00c850!important;
   }
   .ratingselect .switch{
     padding: 12px 0;
     line-height: 24px;
   }
   .ratingselect .switch .Stext{
     font-size: 12px;
     line-height: 24px;
     color: rgb(147,153,159);
   }
</style>