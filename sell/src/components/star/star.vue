<template>
  <div class="star" :class='starType'>
    <span v-for='itemClass in itemClasses' :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  const LENGTH=5;
  const CLS_ON='on';
  const CLS_HALF='half';
  const CLS_OFF='off';
  export default{
    props:{
      size:{
        type:Number
      },
      score:{
        type:Number
      }
    },
    computed:{
      starType:function(){
        return  'star-'+this.size
      },
      itemClasses:function() {
        let result=[];
        let score=Math.floor(this.score*2)/2; //先把分数*2 下行取舍
        let hasDecimal=score%1!==0;//判断 分数有没有小数
        let integer=Math.floor(score);//获取分数的整数部分
        for(let i=0;i<integer;i++){
          result.push(CLS_ON);//遍历整数分数，添加类名
        };
        if(hasDecimal){
          result.push(CLS_HALF);//判断是否有。5的小数，添加类名
        }
        while(result.length<LENGTH){
          result.push(CLS_OFF);//将星星长度补全到5颗星
        }
//        console.log(result);
        return result;
      }
    }
  };
</script>
<style>
  .star{
    text-align: center;
  }
  .star .star-item{
    display: inline-block;
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    margin-right: 22px;
    background-size:contain !important;
      }
  .star .star-item:last-child{
    margin-right: 0;
  }
  .star .star48 .on {

   }

  .star  .on{
  background: url(star36_on@3x.png);
  }
   .star  .half{
  background: url(star36_half@3x.png);
  }
   .star  .off{
  background: url(star36_off@3x.png);
  }

  .star .star24 {

  }
</style>
