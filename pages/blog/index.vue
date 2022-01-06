<template>
  <div>
    <app-header>
      <div>
        <h1>De leukste flamingo weetjes</h1>
      </div>
    </app-header>
    <div class="content-wrapper page-content">
      <app-grid :columns="3">
        <blog-item
          v-for="article of articles"
          :key="article.slug"
          :item="article"
        ></blog-item>
      </app-grid>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "img",
        "slug",
        "author",
        "intro",
        "createdAt",
      ])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },
  transition: {
    afterLeave(el) {
      console.log("afterLeave", el);
    },
  },
};
</script>

<style lang="scss"></style>
