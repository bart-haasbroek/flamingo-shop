<template>
  <div>
    <app-header :image="article.img">
      <div>
        <h1>{{ article.title }}</h1>
      </div>
    </app-header>
    <article class="content-wrapper content-wrapper--narrow page-content">
      <nav class="toc">
        <ul class="toc__nav">
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="'depth-' + link.depth"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
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

<style lang="scss">
.toc__nav {
  margin: 0;
  padding: 0;
  padding: 10px;
  margin-bottom: 20px;

  li {
    position: relative;
    list-style: disc outside;
    + li {
      margin-top: 8px;
    }
    &.depth-3 {
      margin-left: 20px;
      list-style: circle;
    }

    a {
      display: block;
      color: #04c1a5;
      font-size: 16px;
      transition: color 0.4s ease;

      &:hover {
        color: #1d1d1d;
      }
    }
  }
}
</style>
