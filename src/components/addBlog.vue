<template>
  <div class="add-blog">
    <h1>添加博客</h1>
    <form action v-show="shows">
      <label>博客标题</label>
      <input type="text" v-model="blog.title">
      <label>博客内容</label>
      <textarea cols="30" rows="5" v-model="blog.content"></textarea>
      <div class id="checkbox">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.langs">
        <label>React.js</label>
        <input type="checkbox" value="react.js" v-model="blog.langs">
        <label>angular.js</label>
        <input type="checkbox" value="angular.js" v-model="blog.langs">
        <label>Node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.langs">
      </div>
      <div id="author">
        <select v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
        </select>
      </div>
      <input type="submit" value="添加" v-on:click.prevent="post">
    </form>
    <div class="success" v-show="!shows">
      <h1>添加博客成功</h1>
    </div>

    <!-- 展示博客 -->
    <hr>
    <div class="show" v-show="!shows">
      <div>
        <em>标题:</em>
        {{blog.title}}
      </div>
      <div>
        <em>内容:</em>
        {{blog.content}}
      </div>
      <div>
        <em>编程框架:</em>
        <ul>
          <li v-for="lang in blog.langs">{{lang}}</li>
        </ul>
      </div>
      <div>
        <em>作者：</em>
        {{blog.author}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        langs: [""],
        author: ""
      },
      authors: ["Henry", "Cookie", "Session"],
      shows: true
    };
  },
  methods: {
    post() {
      this.shows = false;
      this.$http
        .post("https://write3-b6bfb.firebaseio.com/messages/posts.json", this.blog)
        .then(data => {
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
.add-blog {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  box-sizing: border-box;
}
input[type="text"] {
  width: 80%;
  padding: 5px;
}
label {
  display: block;
  padding: 20px 0;
}
textarea {
  width: 80%;
  max-width: 600px;
}
#checkbox {
  margin: 10px;
}
#checkbox label {
  display: inline;
}
#checkbox input {
  margin-right: 5x;
}
select {
  width: 80%;
}
input[type="submit"] {
  width: 100px;
  margin: 20px auto 20px 0px;
  background-color: crimson;
  color: #ffffff;
  border: 0;
  padding: 5px;
  border-radius: 4px;
}
.success {
  color: crimson;
}
.show {
  width: 80%;
  background-color: rgb(210, 229, 238);
  padding: 60px 10px;
  border-radius: 4px;
}
.show ul {
  list-style-type: none;
}
em {
  color: red;
  padding: 10px 0;
}
</style>
