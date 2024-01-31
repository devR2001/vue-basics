const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addByOne() {
      return this.counter++;
    },
    reduceByOne() {
      if (this.counter > 0) {
        return this.counter--;
      } else {
        return 0;
      }
    },
  },
});

app.mount("#events");
