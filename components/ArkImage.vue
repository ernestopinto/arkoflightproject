<template>
  <div>
    <img
        width="150px"
        v-bind:src="image_thumb + '/' + image.code"
    />
  </div>
</template>

<script>
import { ApiEndPoints } from "@/env/Environment";

export default {
  name: "ArkImage",
  data() {
    return {
      image_thumb: ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.imageThumb),
      image_full: ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.imageFull),
    };
  },
  props: ["image"],
};
</script>

<style scoped></style>
