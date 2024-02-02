const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Nachname";
    },
  },
  methods: {
    resetInput() {
      this.name = "";
    },
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
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
