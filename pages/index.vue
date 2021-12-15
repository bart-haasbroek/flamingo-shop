<template>
  <div>
    <app-header
      :isBig="true"
      :image="require(`~/assets/images/flamingo-home-bg.jpg`)"
    >
      <h1>
        Flamingo shop
      </h1>
      <h2>
        De leukse flamingo spullen verzameld op een plek
      </h2>
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
      .sortBy("createdAt", "asc")
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
