<template>
  <div id="showBlog">
    <h1>展示博客</h1>
    <input type="text" placeholder="搜索" style="width:240px;height:26px;border-radius:4px;">
    <div class="blog" v-for="blog in blogs">
      <h2 v-rainbow>{{blog.title}}</h2>
      <div v-wide="'wide'">{{blog.content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "showBlog",
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.$http
      .get("https://write3-b6bfb.firebaseio.com/messages/posts.json")
      .then(data => {
        // this.blogs = data.body.slice(0, 10);
        return data.json();
      })
      .then(data => {
        for (let key in data) {
          data[key].key = key;
          console.log(data[key]);
          this.blogs.push(data[key]);
        }
      });
  }
};
</script>
<style scoped>
#showBlog {
  text-align: center;
}
.blog {
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
  text-align: left;
  max-height: 400px;
  background-color: #ddd7d7af;
  padding: 10px;
}
</style>
