<template>
  <div>
    <div v-if="this.$auth.loggedIn">
      Welcome to your are {{ $auth.user.name }}
    </div>
    <div v-else-if="!this.$auth.loggedIn">
      <register/>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped></style>
