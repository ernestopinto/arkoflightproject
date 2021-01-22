<template>
  <div>
    <div v-if="$fetchState.pending">
      loading image...
    </div>
    <div style="padding: 40px" v-if="!$fetchState.pending && this.imageData.size === this.size_thumb">
      <img
          v-bind:width="this.imageData.withImage"
          v-bind:src="this.imageThumb"
      />
      <br />
      <div>
        <p>
          {{ this.dataImage.name }}
        </p>
        <p>size : {{ this.dataImage.size }} Mb</p>
      </div>
    </div>
    <div style="padding: 40px" v-if="!$fetchState.pending && this.imageData.size === this.size_full">
      <img
          v-bind:width="this.imageData.withImage"
          v-bind:src="this.imageThumb"
      />
      <br />
      <div>
        <p>
          {{ this.dataImage.name }}
        </p>
        <p>size : {{ this.dataImage.size }} Mb</p>
      </div>
    </div>
  </div>
</template>

<script>

import {ApiEndPoints, Environment} from '@/env/Environment';
import {ArkServices} from "@/services";

export default {
  data() {
    return  {
      size_thumb: Environment.IMAGES_SIZE.thumb,
      size_full: Environment.IMAGES_SIZE.full,
      imageThumb: '',
      imageFull: '',
      dataImage: null
    }
  },
  props: ["imageData"],
  async fetch() {
    await new ArkServices(this.$axios).getImageData(this.imageData.code, response => {
      this.dataImage = response;
      this.imageThumb = ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.imageThumb) + `/${this.dataImage.code}`;
      this.imageFull = ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.imageFull) + `/${this.dataImage.code}`;
    })
  }
};
</script>

<style scoped></style>
