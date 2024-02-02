const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Nachname";
      }
    },
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
  computed: {},
});

app.mount("#events");
