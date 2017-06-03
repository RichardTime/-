<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
    <ul>
      <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex==index}"  @click="selectMenu(index)">
        <span class="text">
          <span v-show="item.type>0" class="icon" :class="classMap[item]"></span>
          {{item.name}}
        </span>
      </li>
    </ul>
    </div>
    <div class="goods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list-hook">
          <h1 class="title" v-text="item.name"></h1>
          <ul>
            <li v-for="food in item.foods" class="foodlist clearfix">
            <div class="icon" @click.stop.prevent.capture="selectFoodName(food)">
              <img :src="food.icon">
            </div>
              <div class="content" @click.stop.prevent.capture="selectFoodName(food)">
                <h2 class="name" v-text="food.name"></h2>
                <p class="dec" v-text="food.description"></p>
                <div class="extra">
                  <span class="month" v-text="'月售'+food.sellCount"></span>
                  <span class="rating" v-text="'好评率'+food.rating"></span>
                </div>
                <div class="price">
                 <span v-text="'¥'+food.price" class="newprice"></span>
                  <s v-text="'¥'+food.oldPrice"  v-show="food.oldPrice" class="oldprice"></s>
                </div>
              </div>
              <div class="cartcontrol-wrapper">
              <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :selectFoods="selectFood" :deliveryPrice='seller.deliveryPrice' :minPrice='seller.minPrice'></shopcart>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import shopcart from 'components/shop/shopcart.vue';
  import cartcontrol from 'components/cartcontrol/cartcontrol.vue';
  import food from 'components/food/food';
  const ERRNO=0;
  export default {
      props:{
          seller:{
              type:Object
          }
      },
    data() {
          return {
              goods:[],
              listHeight:[],
              scrollY:0,
              currentIndex:0,
              selectedFood:{},
          }
    },
    created(){
          this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
          this.$http.get('/api/goods').then((res) =>{
              let response=res.body;
              if(response.errno===ERRNO){
                  this.goods=response.data;
//                  console.log(this.goods)
                this.$nextTick(() =>{
                    this._initScroll();
                    this._caculateHeight();
                })
              }

          },(req) =>{
              console.log('requert error');
          })
    },
    methods:{
        _initScroll(){
            this.menuScroll=new BScroll(this.$refs.menuWrapper,{
                click:true
            });
            this.foodScroll=new BScroll(this.$refs.foodWrapper,{
                probeType:3,
                click:true
            });
            this.foodScroll.on('scroll',(pos) =>{
                this.scrollY=Math.abs(Math.round(pos.y));//将实时滚动值变成整数，然后变成正值
              //每次滚动后改变scrollY的值，然后出发判断
              let that=this;//保存this指向
//              console.log(that.scrollY,'this指向Y');
              this.listHeight.forEach(function(item,index,self){
                  if(that.scrollY>=item&&that.scrollY<=self[index+1]){
                        that.currentIndex=index;
                  }
              })
            })
        },
        _caculateHeight() {//计算每个li的高度
            let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
            let height=0;
            Array.prototype.push.call(this.listHeight,height);
            for(let i=0;i<foodList.length;i++){
//                this.foodList.push(foodList[i].clientHeight);//获取list-hook集合每个Li的高度
              let item=foodList[i].clientHeight;
              height+=item;
              Array.prototype.push.call(this.listHeight,height);
            };
        },
      selectMenu(index){
            if(!event._constructed){
                return;
            }
            let foodlist=this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
            let el=foodlist[index];
            this.foodScroll.scrollToElement(el,300);
      },
      selectFoodName(food) {
        if(!event._constructed){
          return;
        };
        this.selectedFood=food;
//      console.log(1);
        this.$refs.food.show();//找到food组件调用他的组件方法show
      }
    },
    components:{
      shopcart,
      cartcontrol,
      food:food,
    },
    computed:{
      selectFood(){
        let sFood=[];//声明一个数组，用于存放 count>1的商品
        this.goods.forEach((item)=> {
          item.foods.forEach((food)=> {
            if(food.count>0){
              sFood.push(food);//如果遍历到的2级菜单的数量大于1，存入sFood
            }
          })
        });
        return sFood;
      },
    }
  }
</script>

<style>
  .goods{
    display: flex;
    position: absolute;
    top:174px;
    bottom: 46px;
    width:100%;
    overflow: hidden;
  }
  .goods .menu-wrapper{
    flex:0 0 80px;
    background:#f3f5f7;
  }
  .goods .menu-wrapper .current{
    position: relative;
    margin-top: -1px;
    z-index: 10;
    background: #fff;
    font-weight: 700;
  }
  .goods .menu-wrapper .current .text{
    border:none;
  }
  .goods .menu-wrapper .menu-item{
    display: table;
    height: 54px;
    width: 80px;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    font-weight: 200;
    box-sizing: border-box;
    padding:0 12px;
  }
  .goods .menu-wrapper .menu-item .icon{

  }
  .goods .menu-wrapper .menu-item .text{
    display: table-cell;
    vertical-align: middle;
    border-bottom: 1px solid rgba(7,17,27,.1);
  }

  .goods .goods-wrapper .title{
    height: 26px;
    line-height: 26px;
    padding-left: 14px;
    border-left:2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147,153,159);
    background: #f3f5f7;
  }
  .goods .goods-wrapper .foodlist{
    padding:18px;
    position: relative;
  }
  .goods .goods-wrapper .foodlist .icon{
    margin-right:10px;
    float:left;
  }
  .goods .goods-wrapper .foodlist .icon img{
    height: 90px;
    width:90px;
  }
  .goods .goods-wrapper .foodlist .content{
    float: left;
    width: 158px;
  }
  .goods .goods-wrapper .foodlist .cartcontrol-wrapper{
    position: absolute;
    right:18px;
    bottom: 18px;
  }
  .goods .goods-wrapper .foodlist .content .name{
    font-size: 14px;
    color:rgb(7,17,27);
    line-height: 14px;
    margin:2px 0 8px 0;
  }
  .goods .goods-wrapper .foodlist .content .dec,.extra{
    font-size: 10px;
    line-height: 10px;
    margin:8px 0;
    color: rgb(147,153,159);
  }
  .goods .goods-wrapper .foodlist .content .price .newprice{
    font-size: 14px;
    line-height: 24px;
    color:red;
    font-weight:700;
    margin-right: 8px;
  }
  .goods .goods-wrapper .foodlist .content .price .oldprice{
    font-size:10px;
    font-weight: 700;
    line-height: 24px;
    color: rgb(147,153,159);
  }
</style>
