<template>
  <div>
    <app-header
      :isBig="true"
      :image="require(`~/assets/images/flamingo-home-bg.jpg`)"
      :titleLeft="true"
    >
      <h1>Flamingo shop</h1>
      <h2>De leukse flamingo spullen verzameld op een plek</h2>
      <NuxtLink
        class="button button--inverted font-bold header-button"
        to="/products"
      >
        Bekijk de producten
      </NuxtLink>
    </app-header>
    <div class="content-wrapper page-content">
      <app-grid :columns="2">
        <product-highlight
          v-for="(highlight, index) of highlights"
          :key="index"
          :highlight="highlight"
        ></product-highlight>
      </app-grid>
      <title-stroke title="Leuke flamingo weetjes"></title-stroke>
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
  data() {
    return {
      highlights: [
        {
          title: "De warmste knuffels",
          subtitle: "Het leukste cadeau voor in de koude maanden",
          image: require(`~/assets/images/flamingo-knuffel.jpeg`),
          buttonText: "Bekijk alle knuffels",
          // slug: { path: 'products', query: { categorie: 'knuffels' },
          slug: {
            name: "products-categorie-categorie",
            params: { categorie: "knuffels" },
          },
        },
        {
          title: "Lekker creatief",
          subtitle:
            "Even offline en creatief bezig zijn met deze flamingo producten",
          image: require(`~/assets/images/creative.jpg`),
          buttonText: "Bekijk alle producten",
          slug: {
            name: "products-categorie-categorie",
            params: { categorie: "creatief" },
          },
        },
      ],
    };
  },
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
      .limit(3)
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

<style lang="scss">
.header-button {
  margin-top: 20px;
  text-shadow: none;
}
</style>
