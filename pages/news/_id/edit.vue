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
      <p
        v-if="validFields.body !== ''"
        class="form-control is-invalid mt-3 fs-5 p-3"
      >
        {{ validFields.body }}
      </p>
    </div>
    <div class="d-grid d-md-flex justify-content-md-end mb-3">
      <button
        class="btn btn-primary btn-lg fs-4"
        type="button"
        :class="newsItem.title !== '' && newsItem.body !== '' ? '' : 'disabled'"
        @click="editNews"
      >
        Edit news
      </button>
    </div>
    <Success v-if="success" :successMessage="'News successfully edited'" />
  </div>
</template>

<script>
import Success from "~/components/Alerts/Success";
import { GET_NEWS_URL } from "~/api/news/urls";

export default {
  components: {
    Success,
  },
  //Проверка на числовое значение id
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  //Получаем текущую новость для редактирования
  async asyncData({ $api, params }) {
    const newsItem = await $api.$get(GET_NEWS_URL + params.id);
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
      validFields: {
        title: "",
        body: "",
      },
      success: false,
    };
  },
  methods: {
    //Редактирование новости
    editNews() {
      this.$api
        .$patch(`/posts/` + this.newsItem.id, this.newsItem)
        .then((response) => {
          response;
          this.success = true;
        });
    },
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
      return v;
    },
  },
};
</script>
