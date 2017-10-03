<template>
  <div id="about">
    <h3>{{ films.title }}</h3>
    <ul class="wrap-article">
      <li class="id-info">
        <span>{{ films.director }}</span><br>
        <span>{{ films.producer }}</span><br>
        <span>{{ films.release_date }}</span>
      </li>
      <li class="article-body">
        <p>{{ films.opening_crawl }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      films: []
    }
  },
  mounted() {
    axios.get("https://swapi.co/api/films/1")
    .then(response => {this.films = response.data})
    .catch(e => {this.errors.push(e)})
  }
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