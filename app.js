const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted");
    },
    addByOne(num) {
      return (this.counter += num);
    },
    reduceByOne(num) {
      return (this.counter -= num);
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
