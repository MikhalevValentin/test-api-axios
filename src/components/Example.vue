<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h3>{{ users.login }}</h3>
    <div class="avatar">
      <img :src="users.avatar_url" :alt="users.login " width="100px" height="100px">
    </div>
    <ul>
      <li>
        githuburl: <a :href="users.url">{{ users.url }}</a>
      </li>
      <li>public_repos: {{ users.public_repos }}</li>
      <li>created_at: {{ users.created_at }}</li>
      <li>updated_at: {{ users.updated_at }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'films',
      users: []
    }
  },
  mounted() {
    axios.get("https://api.github.com/users/MikhalevValentin")
    .then(response => {this.users = response.data})
    .catch(e => {this.errors.push(e)})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.wrap-article {
  display: block;
  width: 100%;
  padding: 10px;
}

.id-info {
  display: block;
  font-size: 12px;
  color: green;
}

.article-title {
  display: block;
  font-size: 22px;
}

.article-body {
  font-size: 16px;
  padding: 0;
}

p {
  margin: 10px 0 0;
}

.block-img {
  display: block;
  margin-bottom: 20px;
  padding: 15px 20px;
  background-color: #eee;
}

.img-wrap img {
  display: block;
  width: 150px;
  height: 150px;
  border: 4px solid #454546
}
</style>
