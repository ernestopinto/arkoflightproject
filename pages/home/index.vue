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
      <div>
        <ListImages :images-load="{ images: images, mode: this.mode_thumb }" />
      </div>
    </div>
  </div>
</template>

<script>
import { ArkServices } from "@/services";
import { Environment } from "@/env/Environment";

export default {
  imageInfo: null,
  name: "index",
  data() {
    return {
      images: [],
      sizeImages: Environment.IMAGES_SIZE.thumb,
      mode_thumb: Environment.IMAGES_SIZE.thumb,
    };
  },
  mounted() {
    this.$store.watch(
      (state) => {
        return this.$store.state.payload.code; // could also put a Getter here
      },
      (newValue, oldValue) => {
        //something changed do something
        if (newValue === Environment.OP_CODES.refresh) {
          console.log("re-fetch");
          this.$fetch()
        }
      },
      //Optional Deep if you need it
      {
        deep: true,
      }
    );
  },
  methods: {},
  async fetch() {
    await new ArkServices(this.$axios).getImages((response) => {
      this.images = response;
      this.$store.commit("setPayload", {
        code: 0,
        value: "ready",
      });
    });
  },
};
</script>

<style scoped></style>
