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
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);
        await this.$router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    console.log('logado? -> ', this.$auth.loggedIn)
  },
};
</script>

<style scoped></style>
