//first arg - component name 
//second arg - component options
Vue.component('count-button' , {
  template: '#click-counter-template',
  data () {
    return {
      count: 0
    }
  }
});
new Vue({
  el: '#components',
});