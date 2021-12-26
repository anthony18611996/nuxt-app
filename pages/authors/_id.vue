<template>
  <div>
    <Error
      errorMessage="Oops, something went wrong. Please try again later."
      v-if="error"
    />
    <div v-else class="card mb-3" v-for="item of newsList" :key="item.id">
      <div class="card-body">
        <h4 class="card-title">Author ID: {{ item.userId }}</h4>
        <h5 class="card-title">{{ item.title }}</h5>
        <img src="~/assets/img/demo.jpg" class="card-img-bottom" alt="" />
        <p class="card-text">
          {{ item.body }}
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Error from "~/components/Errors/Error";
import { GET_NEWS_BY_AUTHOR } from "~/api/news/urls";
export default {
  components: {
    Error
  },
  //Валидация только на числовое значение id
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  //Получаем новости конкретного автора
  async asyncData({ $api, params }) {
    try {
      const newsList = await $api
        .$get(GET_NEWS_BY_AUTHOR + params.id + "/posts")
        .then((response) => {
          return response;
        });
      return { newsList };
    } catch (error) {
      return { error };
    }
  },
  data: () => {
    return {
      newsList: {},
      error: ""
    };
  },
};
</script>
