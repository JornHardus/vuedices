<template>
    <div id="app">
      <SideBar />
      <router-view v-if="loaded" />
    </div>
  </template>
  
  <script>
  import SideBar from "./pages/SideBar";
  
  export default {
    components: { SideBar },
    computed: {
      loaded() {
        return this.$store.state.loadState == "loaded";
      }
    }
  };
  </script>