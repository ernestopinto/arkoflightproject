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
        <tr
          v-for="i of images"
          v-if="i !== null || i !== undefined || i !== ''"
        >
          <td>
            <router-link :to="'/anouncer/#' + i.code">
              <ark-image :imageData="{code: i.code, size: sizeImages, withImage: 200}"/>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ArkServices } from "@/services";
import {Environment} from "@/env/Environment";

export default {
  imageInfo: null,
  name: "index",
  data() {
    return {
      images: [],
      sizeImages: Environment.IMAGES_SIZE.thumb
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
