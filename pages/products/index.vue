<template>
  <div>
    <app-header>
      <div>
        <h1>Flamingo shop</h1>
      </div>
    </app-header>
    <div class="content-wrapper page-content">
      <div class="products">
        <app-grid columns="4">
          <product-item
            v-for="article of articles"
            :key="article.slug"
            :product="article"
          ></product-item>
        </app-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("products")
      .only(["title", "description", "img", "slug", "price", "intro"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
  transition: {
    afterLeave(el) {
      //console.log("afterLeave", el);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
}

.products {
  flex-grow: 1;

  &__sidebar {
    width: 30%;
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid;
  }
}
</style>
