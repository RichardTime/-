// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vueResourse from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(vueResourse);

/* eslint-disable no-new */
      let vm=new Vue({
       router,
       components: {
         App
       },
       template: '<App/>'
     }).$mount('#app');
     router.push('/goods')

