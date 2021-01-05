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

Vue.component('plan' , {
  template: '#plans-template',
  props: {
    name: {
      type: String,
      required: true
    }
  }
})

new Vue({
  el: '#components',
  data: {
    plans: ["The single" , "Something new" , "code is good"]
  }
});