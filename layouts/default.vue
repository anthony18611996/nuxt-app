<template>
  <div>
    <Heading />
    <section>
      <div class="container">
        <div class="row">
          <Nuxt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Heading from "@/components/includes/Heading";

export default {
  components: {
    Heading,
  },
};
</script>

<style>
.container {
  max-width: 830px;
}
</style>
