<template>
  <div>
    <nav-user />
    <h1>Dashboard - {{ this.$store.state.auth.user.name }}</h1>
    <div>
      <sendimages />
    </div>
    <div v-if="$fetchState.pending">
      <h1><b>loading...</b></h1>
    </div>
    <div v-if="!$fetchState.pending">
      <table>
        <tr v-for="i of images" v-if="i !== null || i!== undefined || i !==''">
          <td>{{ i.name }}</td>
          <td>
            <router-link :to="'/anouncer/#' + i.code">
              <img
                style="width: 200px; border-radius: 5px"
                :src="'https://jaipur-7lpbq.ondigitalocean.app/it/' + i.code"
              />
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ArkServices } from "@/services";

export default {
  name: "index",
  data() {
    return {
      images: [],
    };
  },
  methods: {},
  async fetch() {
    await new ArkServices(this.$axios).getImages((response) => {
      this.images = response;
    });
  },
};
</script>

<style scoped></style>
