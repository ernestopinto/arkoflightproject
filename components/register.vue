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

export default {
  name: "register",
  data() {
    return {
      register_info: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      loading: false
    };
  },
  methods: {
    async register() {
      try {
        this.loading = true;
        await this.$axios
          .post(
            ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.registerUser),
            this.register_info,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            const helper = new HelpersFactory(response);
            if (helper.tools.response.error === Environment.API_ERRORS.simple) {
              // errors
              this.register_info.oklogin = false;
              this.loading = false;
            } else {
              this.register_info.oklogin = true;
            }
          })
          .finally(() => {
            if (this.register_info.oklogin){
              this.$auth
                  .loginWith("local", {
                    data: {
                      email: this.register_info.email,
                      password: this.register_info.password,
                    },
                  })
                  .then((response) => {
                    console.log(response);
                    //this.$store.dispatch('usersControl/setUser', response);
                    this.$router.push({ path: "/home" });
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loading = false;
                  });
            }
          })
          .catch((error) => {
            // error with code error
            console.log(error);
            this.loading = false;
          });
      } catch (e) {}
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
