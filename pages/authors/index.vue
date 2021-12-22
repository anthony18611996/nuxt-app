<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="card mb-3" v-for="user of users" :key="user.id" @click.prevent="openAuthor(user)">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{user.title}}</h5>
                <p class="card-text">{{user.body}}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "index",
  async asyncData({$axios}) {
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return {users}
  },
  methods: {
    openAuthor(user) {
      this.$router.push('/authors/' + user)
    }
  }
}
</script>

<style scoped>

</style>
