new Vue({
  el: '#js-ui',

  data() {
    return {
      scene: 0,
      maxScene: 8 };

  },

  mounted() {
    setTimeout(() => {
      this.scene = this.maxScene - 3;
    }, 1000);
  } });