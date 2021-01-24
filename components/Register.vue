<template>
  <div>
    <div class="loading-page" v-if="loading">
      <p>Loading...</p>
    </div>
    <form @submit.prevent="register">
      <div>
        <label>Nmae</label>
        <input type="text" v-model="register_info.name" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" v-model="register_info.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="register_info.password" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="register_info.password_confirmation" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Helpers, HelpersFactory } from "@/helpers";
import { ApiEndPoints, Environment } from "@/env/Environment";
import { ArkServices } from "@/services";

export default {
  name: "Register",
  data() {
    return {
      register_info: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      loading: false,
    };
  },
  methods: {
    async register() {
      this.loading = true;
      await new ArkServices(this.$axios).registerUser(
        this.register_info,
        (response) => {
          // error ?
          console.log(response);
          if (response.errors?.length > 0) {
            // errors
            alert(Helpers.displayErrors(response.errors));
            this.loading = false;
          } else {
            this.$auth
              .loginWith("local", {
                data: {
                  email: this.register_info.email,
                  password: this.register_info.password,
                },
              })
              .then((response) => {
                console.log(response);
                this.loading = false;
                //this.$store.dispatch('usersControl/setUser', response);
                this.$router.push({ path: "/home" });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      );
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
