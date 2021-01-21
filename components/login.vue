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
import {Helpers} from "@/helpers";

export default {
  name: "login",
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
              if (response.data.error?.length > 0){
                alert(Helpers.displayErrors(response.data.error));
              } else {
                this.$router.push({ path: '/home' })
              }
            })
            .catch((error) => {
              alert(error);
            });
      } catch (e) {

      }
    },
  },
};
</script>

<style scoped></style>
