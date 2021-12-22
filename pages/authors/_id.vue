<template>
  <div class="container">
    <div class="row">
      <h1>Author {{ $route.params.id }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "_id",
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>

</style>
