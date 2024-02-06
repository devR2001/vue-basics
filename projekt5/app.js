const app = Vue.createApp({
  data() {
    return {
      // This is just d bunch of dummy data from the course
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
        {
          id: "chiara",
          name: "Chiara Keller",
          phone: "058737 586 343",
          email: "chiara@localhost.com",
        },
      ],
    };
  },
  computed: {
    checkIt() {
      return this.detailsAreVisible ? "Hide" : "Show";
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
