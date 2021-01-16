<template>
  <div>
    <nav-user/>
    <h1>Dashboard</h1>
    <div>
      <sendimages/>
    </div>
  </div>
</template>

<script>

export default {
  middleware: "authenticated",
  name: "index",
  methods: {
  },
};
</script>

<style scoped></style>
