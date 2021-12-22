<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ newsDetail.title }}</h5>
      <img src="" class="card-img-bottom" alt="" />
      <p class="card-text">
        {{ newsDetail.body }}
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsDetail",
  props: {
    newsDetail: Object,
  },
};
</script>
