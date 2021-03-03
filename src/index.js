var view1 = new Vue({
  el: "#vue-view",
  data: {
    text: "LOL A WEBSITE"
  },
  computed: {
  },
  methods: {
  },
  created: function() {
  },
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
    });
  },
});