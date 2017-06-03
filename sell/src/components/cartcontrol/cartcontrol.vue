<template>
  <div class="cartcontrol">
  <transition name="decrease">
  <div class="cart-decrease" v-show="food.count>0" @click.prevent.stop="decreaseCart">-</div>
  </transition>
  <transition name="count">
  <div class="cart-count" v-show="food.count>0" v-text="food.count"></div>
  </transition>
  <div class="cart-add" @click.prevent.stop="addCart">+</div>
  </div>
</template>

<script>
  import Vue from 'vue';
  
  export default{
    props:{
      food:{
        type:Object
      }
    },
    cearted(){
      console.log('123',this.food);
    },
    methods:{
      addCart(event){
        if(!event._constructed){
          return;
        }
        if(!this.food.count){
          Vue.set(this.food,'count',1);
        }else{
          this.food.count++;
        }
      },
      decreaseCart(event){
         if(!event._constructed){
          return;
        };//取消插件单击默认效果
        this.food.count--;
      }
    }
  }
</script>
<style>
  .cartcontrol{
    font-size: 0;
  }
  .cartcontrol .cart-decrease,.cart-add{
    display: inline-block;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    font-size: 24px;
    text-align: center;
    box-sizing: border-box;
  }
  .cartcontrol .cart-decrease{
    background: #FFFFFF;
    border: 2px solid rgb(0,160,220);
     line-height: 20px;
     color:rgb(0,160,220);
    }
  .cartcontrol .cart-count{
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    color: rgb(147,153,159);
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    vertical-align: top;
  }
  .cartcontrol .cart-add{
    display: inline-block;
    background:rgb(0,160,220);
    color:#FFFFFF;
     line-height: 24px;
  }
  /*动画*/
  .decrease-enter,.decrease-leave-active{
    opacity: 0;
    transition: all .6s linear;
  }
  .decrease-enter-active,.decrease-leave{
    transition: all .6s linear;
  }
</style>