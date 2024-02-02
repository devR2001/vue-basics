const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxASelected: false,
      boxASelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = true;
      } else if (box === "B") {
        this.boxBSelected = true;
      } else if (box === "C") {
        this.boxCSelected = true;
      }
    },
  },
});

app.mount("#styling");
