let vm=new Vue({
  el:'#box',
  mounted:function(){
    this.$nextTick(function(){
      this.getAddress();
    })
  },
  data:{
    addressList:[],
    limit:3,
    currentIndex:null,
    checkNum:1
  },
  computed:{      //计算属性
    newAddress:function(){     
      return this.addressList.slice(0,this.limit);
    }
  },
  methods:{
    getAddress:function(){
      let _this=this;
      this.$http.get("data/address.json").then(function(response){
        let res=response.data;
//      if(res.status==0){
          this.addressList=res.result;
//      }
      })
    },
    setDefault:function(addressId){
      this.addressList.forEach(function(value,index){
//      console.log(value.addressId,addressId);
         if(value.addressId==addressId){
           value.isDefault=true;
//         console.log('success')
         }else{
             value.isDefault=false;
         }
      })
    },
    delBtn:function(id){
//    console.log(id);
      this.addressList.forEach(function(value,index){
        console.log(id,value.addressId)
        if(id==value.addressId){
//         let index=this.addressList.indexOf(value);
//         consoloe.log(index)
           vm.addressList.splice(index,1);
        }
      })
    }
      }
})
