<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlog from "./components/showBlog";
import BlogHeader from "./components/blogHeader";
export default {
  name: "App",
  components: {
    addBlog,
    showBlog,
    BlogHeader
  }
};
</script>

<style>
</style>
