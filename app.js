const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    addByOne(num) {
      return this.counter + num;
    },
    reduceByOne(num) {
      if (this.counter > 0) {
        return this.counter - num;
      } else {
        return 0;
      }
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
