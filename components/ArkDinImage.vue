<template>
  <div>
    <div v-if="$fetchState.pending">loadinf Imaga Info...</div>

    <div
      v-if="
        !$fetchState.pending && imageData !== null && imageData !== undefined
      "
    >
      <img width="150px" v-bind:src="image_thumb + '/' + imageData.code" />
      <p>Image Name: {{imageData.name}}</p>
      <p>Image Size: {{imageData.size}}</p>
    </div>
  </div>
</template>

<script>
import { ArkServices } from "@/services";
import { ApiEndPoints, Environment } from "@/env/Environment";

export default {
  name: "ArkDinImage",
  data() {
    return {
      imageData: null,
      imageCode: null,
      image_thumb: ApiEndPoints.getApiEndPoint(
        ApiEndPoints.endpoints.imageThumb
      ),
      image_full: ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.imageFull),
    };
  },
  async fetch() {
    this.$store.watch(
      (state) => {
        return state.transmit; // could also put a Getter here
      },
      (transmit, legacy) => {
        if (
          transmit.fromComponentCode ===
          Environment.COMPONENT_CODES.playground_arkImage
        ) {
          new ArkServices(this.$axios).getImageData(
           transmit.payload,
            (imageData) => {
              this.imageData = imageData;
            }
          );
        }
      },
      //Optional Deep if you need it
      // deep to next level components?
      {
        deep: true,
      }
    );
  },
  mounted() {},
};
</script>

<style scoped></style>
