<template>
  <div class="blogheader">
    <router-link to="/" exact>展示博客</router-link>
    <router-link to="/addblog" exact>添加博客</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.blogheader {
  text-align: center;
  padding: 10px;
  background-color: crimson;
}
a {
  display: inline-block;
  width: 70px;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-decoration: none;
}
.router-link-active {
  background: #fff;
}
</style>