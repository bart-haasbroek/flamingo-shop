<template>
  <div>
    <app-header :image="article.img">
      <div>
        <h1>{{ article.title }}</h1>
      </div>
    </app-header>
    <article class="content-wrapper content-wrapper--narrow page-content">
      <toc :toc="article.toc"></toc>
      <nuxt-content :document="article" />
    </article>
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
    return { article };
  },
};
</script>
