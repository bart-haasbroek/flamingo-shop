<template>
  <div>
    <app-header :image="article.img">
      <div>
        <h1>{{ article.title }}</h1>
      </div>
    </app-header>

    <div class="page-content">
      <article class="content-wrapper content-wrapper--narrow">
        <toc :toc="article.toc"></toc>
        <nuxt-content :document="article" />
      </article>

      <div class="content-wrapper products">
        <title-stroke title="Leuke flamingo producten:"></title-stroke>
        <app-grid columns="4">
          <product-item
            v-for="product of products"
            :key="product.slug"
            :product="product"
          ></product-item>
        </app-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
        {
          property: "article:description",
          content: this.article.description,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const products = await $content("products")
      .limit(4)
      .only(["title", "description", "img", "slug", "price", "intro"])
      .sortBy("createdAt", "asc")
      .fetch();
    return { article, products };
  },
};
</script>

<style lang="scss" scoped></style>
