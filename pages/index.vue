<template>
  <div>
    <h1>Please select a category</h1>
    <div class="collapse navbar-collapse d-block">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <nuxt-link
            exact
            no-prefetch
            active-class="active"
            class="nav-link fs-4"
            aria-current="page"
            to="/news"
            >News</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            exact
            no-prefetch
            active-class="active"
            class="nav-link fs-4"
            to="/authors"
            >Authors</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
.disabled {
  cursor: default;
  pointer-events: none;
  filter: grayscale(1);
}
</style>