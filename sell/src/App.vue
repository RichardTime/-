<template>
  <div id="App">
    <v-header :seller='seller'></v-header>
    <div class="tab">
     <div class="tab-item">
       <!--<a v-link="{path:'/goods'}">商品</a>-->
       <router-link to="/goods">商品</router-link>
     </div>
     <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
     </div>
     <div class="tab-item">
        <router-link to="/seller">商家</router-link>
     </div>
    </div>
      <keep-alive>
      <router-view :seller='seller' ></router-view>
      </keep-alive>
  </div>
</template>
<script>
    const ERR_OK=0;
    import header from './components/header/header.vue';
    export default {
      components:{
        'v-header':header
      },
      data(){
        return {seller:{}};
      },
      created(){
        this.$http.get('/api/seller').then((res) =>{
          let response = res.body;
          if(response.errno===ERR_OK){
            this.seller=response.data;
//            console.log(this.seller);
          }
        })
      }
    }
</script>
<style>
      #App .tab{
        display: flex;
        width: 100%;
        height: 40px;
        line-break: 40px;
      }
      #App .tab .tab-item{
        flex: 1;
        text-align: center;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        line-height: 39px;
      }
       #App .tab .tab-item a{
         display: block;
         font-size: 14px;
         color: rgb(77,85,93);
       }
       #App .tab .tab-item .active{
         color: red;
       }
</style>
