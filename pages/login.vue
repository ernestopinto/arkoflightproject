<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Email</label>
        <input type="text" v-model="login.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  middleware: 'guest',
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth
            .loginWith("local", {
              data: this.login,
            })
            .then((response) => {
              console.log(response);
              //this.$store.dispatch('usersControl/setUser', response);
              this.$router.push({ path: '/home' })
            })
            .catch((error) => {
              console.log(error);
            });
      } catch (e) {

      }
    },
  },
  mounted() {
  },
};
</script>

<style scoped></style>
