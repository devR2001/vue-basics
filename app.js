const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      confirmedName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + "" + this.lastName;
    //   }
    // },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + "" + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
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
