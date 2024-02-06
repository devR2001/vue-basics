<template>
  <h2>My Friends</h2>
  <ul>
    <li><FriendContactVue /></li>
  </ul>
</template>

<script>
import FriendContactVue from "./components/FriendContact.vue";
export default {
  components: {
    FriendContactVue,
  },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 435345 233",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "01234 435345 233",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
