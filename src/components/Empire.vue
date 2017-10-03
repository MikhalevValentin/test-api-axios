<template>
  <div id="about">
    <h3>Total films: {{ films.count }}</h3>
    <ul class="wrap-article" v-for="result in films.results">
      <li class="article-title">{{ result.title }}</li>
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
    axios.get("https://swapi.co/api/films")
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