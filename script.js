//first arg - component name 
//second arg - component options
Vue.component('count-button' , {
  template: '<button @click="count++">{{count}}</button>',
  data () {
    return {
      count: 0
    }
  }
});
new Vue({
  el: '#components',
});