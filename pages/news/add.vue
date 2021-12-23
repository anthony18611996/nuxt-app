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
    <h3>Author</h3>
    <div class="row g-2 mb-3">
      <div class="col-md">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="Enter author"
            v-model="newsItem.author"
          />
          <label for="floatingInputGrid">Enter author</label>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            id="date"
            v-model="newsItem.date"
          />
          <label for="date">Date</label>
        </div>
      </div>
    </div>
    <h3>Perview</h3>
    <div class="form-floating mb-3">
      <textarea
        class="form-control"
        placeholder="Enter perview"
        id="perview"
        style="height: 100px"
        v-model="newsItem.perview"
      ></textarea>
      <label for="perview">Enter perview</label>
    </div>
    <h3>Text</h3>
    <div class="form-floating mb-3">
      <textarea
        class="form-control"
        placeholder="Enter text"
        id="text"
        style="height: 300px"
        v-model="newsItem.text"
      ></textarea>
      <label for="text">Enter text</label>
    </div>
    <h3>Image</h3>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="image"
        placeholder="Enter image link"
        v-model="newsItem.imageLink"
      />
      <label for="title">Enter image link</label>
    </div>
    <div class="d-grid d-md-flex justify-content-md-end">
      <button class="btn btn-primary btn-lg fs-4" type="button" @click="addNews">
        Add news
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false,
      error: false,
      newsItem: {
        title: "",
        author: "",
        date: "",
        perview: "",
        text: "",
        imageLink: "",
      },
    };
  },
  methods: {
    addNews() {
      this.$api.$post(`/posts`, this.newsItem).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
