<template>
  <div @click="openNews(newsItem)" class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="~/assets/img/demo.jpg"
          class="img-fluid rounded-start"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ newsItem.title }}</h5>
          <p class="card-text">{{ newsItem.body }}</p>
          <p class="card-text">
            {{ newsItem.id }}
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openNews(item) {
      this.$router.push("/authors/" + item.id);
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
