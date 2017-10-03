<template>
  <div id="about">
    <span class="article-title">Actors:</span><br>
    <ul v-for="result in people.results" class="people-list">
      <li>
        <span class="line-title">Name:</span>
        <span>{{ result.name }}</span>
      </li>
      <li>
        <span class="line-title">Height:</span>
        <span>{{ result.height }}</span>
      </li>
      <li>
        <span class="line-title">Mass:</span>
        <span>{{ result.mass }}</span>
      </li>
      <li>
        <span class="line-title">Hair color:</span>
        <span>{{ result.hair_color }}</span>
      </li>
      <li>
        <span class="line-title">Birth year:</span>
        <span>{{ result.birth_year }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      people: []
    }
  },
  mounted() {
    axios.get("https://swapi.co/api/people")
    .then(response => {this.people = response.data})
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

.people-list {
  padding: 5px;
  margin: 10px;
  display: inline-block;
  width: 280px;
  border: 1px solid #d4d4d4;
  list-style-type: none;
}

.people-list  li > span  {
  display: inline-block;
}

.line-title {
  width: auto;
  min-width: 90px;
  background-color: #f4f5f6;
  padding: 3px 0 0 8px;
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

span {
  display: block;
}

p {
  margin: 0;
}
</style>