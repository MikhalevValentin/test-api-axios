<template>
  <div id="about">
    <ul class="wrap-article" v-for="result in results">
      <li class="id-info">
        <span>id пользователя: {{ result.userId }}</span><br>
        <span>id статьи: {{ result.id }}</span>
      </li>
      <li class="article-title">{{ result.title }}</li>
      <li class="article-body">
        <p>{{ result.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      results: []
    }
  },
  mounted() {
    axios.get("http://jsonplaceholder.typicode.com/posts")
    .then(response => {this.results = response.data})
    .catch(e => {this.errors.push(e)})
  },
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.wrap-article {
  display: block;
  background-color: #eee;
  padding: 10px 20px;
  list-style-type: none;
  text-align: left;
  margin-bottom: 20px;
}

.article-title {
  font-size: 22px;
  margin-bottom: 10px;
}

p {
  margin: 0;
}
</style>