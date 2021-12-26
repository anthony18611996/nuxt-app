<template>
  <div>
    <Error
      errorMessage="Oops, something went wrong. Please try again later."
      v-if="error"
    />
    <div class="card" v-else>
      <div class="card-body">
        <h5 class="card-title">{{ newsDetail.title }}</h5>
        <img src="~/assets/img/demo.jpg" class="card-img-bottom" alt="" />
        <p class="card-text">
          {{ newsDetail.body }}
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
      <div class="d-grid d-md-flex justify-content-md-end">
        <button
          class="btn btn-primary btn-lg fs-4"
          type="button"
          @click="editNewsLink(newsDetail)"
        >
          Edit news
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Error from "~/components/Errors/Error";
import { GET_NEWS_URL } from "~/api/news/urls";
export default {
  components: {
    Loader,
    Error,
  },
  //Проверка на числовую запись id
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  //Получаем детальную новость
  async asyncData({ $api, params }) {
    try {
      const newsDetail = await $api
        .$get(GET_NEWS_URL + params.id)
        .then((response) => {
          return response;
        });
      return { newsDetail };
    } catch (error) {
      return { error };
    }
  },
  data: () => {
    return {
      loading: true,
      error: "",
      newsDetail: {},
    };
  },
  methods: {
    //Переход на страницу редактирования новости
    editNewsLink(item) {
      this.$router.push("/news/" + item.id + "/edit");
    },
  },
};
</script>

<style scoped>
.card {
  padding: 15px;
}
</style>
