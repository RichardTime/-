//创建一个vue实例
let vm=new Vue({
  el:"#app",    //Vue 实例的挂载目标
  data:{
    productList:[],
    totalMoney:10,
    fuck:"123",
    allFlag:false,
    delFlag:false,
    delSymbol:null
  },
  filters:{
    formatMoney:function(value){
      return "¥"+value.toFixed(2);//声明局部过滤器，加上人民币符号，并且精确到两位小数
    }
  },
  mounted:function(){
    this.carView();
  },
  methods:{
      carView:function(){
      let _this=this;
        this.$http.get("data/cart.json",{"id":123}).then(function(res){
            _this.productList=res.body.result.productList;
            _this.totalMoney=res.body.result.totalMoney;
        });
      },
      changeCount:function(item,symbol){
        if(symbol>0){
          item.productQuentity++;
        }else{
         item.productQuentity--;
         if(item.productQuentity<1){item.productQuentity=1}//如果商品数量小于1，则等于一。
        }
        this.calculateTotal();
      },
      changeFlag:function(item){
     if(typeof item.checked=='undefined'){
       Vue.set(item,'checked',true)
     }else{
       item.checked=!item.checked;
     }
      this.calculateTotal();
      },
      changeAll:function(item){
         this.allFlag=!this.allFlag;//改变全选标识符
          if(this.allFlag){
            this.productList.forEach(function(item,index){
              if(typeof item.checked=='undefined'){
                Vue.set(item,'checked',true);
              }else{
                item.checked=true;
              }
            })
          }else{
             this.productList.forEach(function(item,index){
               item.checked=false;
             })
          };
           this.calculateTotal();
      },
     calculateTotal:function(){
          this.totalMoney=0;//初始化总金额
          let _this=this;//函数内部的this不在指向vue实例对象，所以在外面保存一个vue实例的指向
          this.productList.forEach(function(item){
                if(item.checked){//如果商品被选中，则取出他的金额
                  _this.totalMoney+=item.productPrice*item.productQuentity;//将所有被选中的商品价格 计算
                    console.log(item.productPrice*item.productQuentity)
                }
          })    
     },
     changeDel:function(item){
       this.delFlag=true;
        this.delSymbol=item;//再删除标识里 存储当前项
     },
    delOK:function(){
       let index=this.productList.indexOf(this.delSymbol);
       this.productList.splice(index,1);
       this.delFlag=false;
    }
    
  }
})
//声明全局过滤器，过滤总金额
Vue.filter('my-filter', function (value,type) {
  // 返回处理后的值
  return '¥'+value.toFixed(2)+type;
})


