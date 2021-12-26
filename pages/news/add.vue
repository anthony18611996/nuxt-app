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
      <p
        v-if="validFields.title !== ''"
        class="form-control is-invalid mt-3 fs-5 p-3"
      >
        {{ validFields.title }}
      </p>
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
          <p
            v-if="validFields.author !== ''"
            class="form-control is-invalid mt-3 fs-5 p-3"
          >
            {{ validFields.author }}
          </p>
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
      <p
        v-if="validFields.perview !== ''"
        class="form-control is-invalid mt-3 fs-5 p-3"
      >
        {{ validFields.perview }}
      </p>
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
      <label for="text">Enter body</label>
      <p
        v-if="validFields.body !== ''"
        class="form-control is-invalid mt-3 fs-5 p-3"
      >
        {{ validFields.body }}
      </p>
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
      <button
        class="btn btn-primary btn-lg fs-4"
        type="button"
        @click="addNews"
      >
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
        body: "",
        imageLink: "",
      },
      validFields: {
        title: "",
        body: "",
        perview: "",
        author: "",
      },
    };
  },
  methods: {
  //Создание новости
    addNews() {
      let v = this.valid();
      if (!v) return;
      this.$api.$post(`/posts`, this.newsItem).then((response) => {
        //this.$router.push("/news/" + response.id);
        console.log(response);
      });
    },
    //Валидация
    valid() {
      let v = true;
      this.validFields = {
        title: "",
        body: "",
        perview: "",
        author: "",
      };
      if (this.newsItem.title === "") {
        v = false;
        this.validFields.title = "Required field";
      }
      if (this.newsItem.body === "") {
        v = false;
        this.validFields.body = "Required field";
      }
      if (this.newsItem.perview === "") {
        v = false;
        this.validFields.perview = "Required field";
      }
      if (this.newsItem.author === "") {
        v = false;
        this.validFields.author = "Required field";
      }
      return v;
    },
  },
};
</script>
