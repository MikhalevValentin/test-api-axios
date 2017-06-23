<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h4>links</h4>
    <section class="block-img" v-for="album in albums">
      <div class="img-wrap">
        <img :src="album.thumbnailUrl" :alt="album.title ">
      </div>
      <ul>
        <li class="id-info">
          <span>id пользователя: {{ album.albumId }}</span><br>
          <span>id статьи: {{ album.id }}</span>
        </li>
        <li class="article-title">{{ album.title }}</li>
        <li class="article-body">
          <a :href="album.url" class="album-link">{{ album.url }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'root',
      albums: []
    }
  },
  mounted() {
    axios.get("http://jsonplaceholder.typicode.com/photos")
    .then(response => {this.albums = response.data})
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
