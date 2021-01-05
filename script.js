new Vue({
  el: '#heading',
  data: {
    heading: "My list",
    items: [
      "Day 1 of vue js",
      "I'm working with loops in vue",
      "That how to render values on screen"
    ],
    newItems: ''
  },
  methods: {
    saveItems: function() {
      this.items.push(this.newItems);
      this.newItems = '';
    }
  }
});