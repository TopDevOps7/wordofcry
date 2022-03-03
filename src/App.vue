<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
body,
html {
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: "Ubuntu";
}
</style>
<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
