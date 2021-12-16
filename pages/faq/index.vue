<template>
  <div>
    <app-header :image="page.img">
      <div>
        <h1>{{ page.title }}</h1>
      </div>
    </app-header>
    <article class="content-wrapper page-content">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          property: "article:published_time",
          content: this.page.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.page.updatedAt,
        },
        {
          property: "article:description",
          content: this.page.description,
        },
      ],
    };
  },
  async asyncData({ $content }) {
    const page = await $content("pages")
      .where({ slug: "faq" })
      .fetch();
    return { page: page[0] };
  },
};
</script>

<style lang="scss">
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-top: 20px;
}
</style>
