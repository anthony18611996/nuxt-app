<template>
  <div>
    <h3>Title</h3>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Enter title"
        v-model="newsItem.title"
      />
      <label for="title">Enter title</label>
    </div>
    <h3>Text</h3>
    <div class="form-floating mb-3">
      <textarea
        class="form-control"
        placeholder="Enter text"
        id="text"
        style="height: 300px"
        v-model="newsItem.body"
      ></textarea>
      <label for="text">Enter text</label>
    </div>
    <h3>Image</h3>
    <!-- <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="image"
        placeholder="Enter image link"
        v-model="newsItem.imageLink"
      />
      <label for="title">Enter image link</label>
    </div> -->
    <div class="d-grid d-md-flex justify-content-md-end">
      <button class="btn btn-primary btn-lg fs-4" type="button" @click="editNews">
        Edit news
      </button>
    </div>
  </div>
</template>

<script>
import { GET_NEWS_URL } from "~/api/news/urls";

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $api, params }) {
    const newsItem = await $api.$get(GET_NEWS_URL + params.id);
    console.log(newsItem);
    return { newsItem };
  },
  data: () => {
    return {
      loading: false,
      error: false,
      newsItem: {
        id: 0,
        title: "",
        body: "",
        imageLink: "",
      },
    };
  },
  methods: {
    editNews() {
      this.$api.$patch(`/posts/` + this.newsItem.id, this.newsItem).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
