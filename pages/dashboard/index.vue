<template>
  <div>
    <nav-user />
      <br />
    <div>
    </div>
    <br />
  </div>
</template>

<script>

import { mapMutations } from "vuex";

export default {
  name: "index",
  data() {
    return {
      user: "",
    };
  }
};
</script>

<style scoped></style>
