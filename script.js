new Vue({
  el: '#heading',
  data: {
    state: 'default',
    heading: "My list",
    items: [],
    newItems: ''
  },
  methods: {
    saveItems: function() {
      this.items.push(this.newItems);
      this.newItems = '';
    },
    changeState: function(newState) {
      this.state = newState;
    }
  }
});