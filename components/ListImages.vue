<template>
  <div>
    <div>
      <p>mode: {{ ImagesLoad.mode }}</p>
      <table>
        <tr v-for="im in ImagesLoad.images">
          <td v-if="ImagesLoad.mode === 0">
            <router-link :to="'/anouncer#/' + im.code">
              <img
                v-bind:width="ImagesLoad.mode === 0 ? 200 : 800"
                v-bind:src="`${srcThumb}/${im.code}`"
              />
            </router-link>
          </td>
          <td v-if="ImagesLoad.mode === 1">
            <router-link :to="'/anouncer#/' + im.code">
              <img
                v-bind:width="ImagesLoad.mode === 0 ? 200 : 800"
                v-bind:src="`${srcThumb}/${im.code}`"
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
import { ApiEndPoints } from "@/env/Environment";

export default {
  name: "ListImages",
  props: ["ImagesLoad"],
  data() {
    return {
      srcThumb: ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.imageThumb),
      srcFull: ApiEndPoints.getApiEndPoint(ApiEndPoints.endpoints.imageFull),
    };
  },
};
</script>

<style scoped>
img {
  padding: 10px;
}
</style>
