<template>
  <div>
    <app-header>
      <div>
        <h1>Flamingo spullen</h1>
      </div>
    </app-header>
    <div class="content-wrapper page-content">
      <div class="category-nav__title font-bold">Zoek per categorie:</div>
      <div class="category-nav">
        <NuxtLink class="button button--inverted font-bold" to="/products"
          >Geen filter</NuxtLink
        >
        <div v-for="category of categoriesList" :key="category">
          <NuxtLink
            class="button button--inverted font-bold"
            :to="{
              name: 'products-categorie',
              params: { categorie: category },
            }"
            >{{ category }}
          </NuxtLink>
        </div>
      </div>
      <div class="products">
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
async function getProducts(queryParam, content) {
  const filter = queryParam
    ? { $containsAny: queryParam.split(",") }
    : { $contains: [] };
  return await content("products")
    .where({ categories: filter })
    .only(["title", "description", "img", "slug", "price", "intro"])
    .sortBy("createdAt", "asc")
    .fetch();
}
export default {
  // watch: {
  //   "$route.query": "method",
  // },
  // methods: {
  //   async method() {
  //     this.products = await getProducts(
  //       this.$route.query.categorie,
  //       this.$content
  //     );
  //     const filter = this.$route.query.categorie
  //       ? { $containsAny: this.$route.query.categorie.split(",") }
  //       : { $contains: [] };
  //     this.products = await this.$content("products")
  //       .where({ categories: filter })
  //       .only(["title", "description", "img", "slug", "price", "intro"])
  //       .sortBy("createdAt", "asc")
  //       .fetch();
  //   },
  // },
  async asyncData({ $content, query }) {
    if (!query) {
      return;
    }
    const categories = await $content("products")
      .where({ categories: { $nin: "" } })
      .only(["categories"])
      .fetch();
    const categoriesList = categories.reduce((list, product) => {
      const unique = product.categories.filter((c) => list.indexOf(c) === -1);
      return [...list, ...unique];
    }, []);

    // const products = await getProducts(query.categorie, $content);

    const filter = query.categorie
      ? { $containsAny: query.categorie.split(",") }
      : { $contains: [] };
    const products = await $content("products")
      .where({ categories: filter })
      .only(["title", "description", "img", "slug", "price", "intro"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      categoriesList,
      products,
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
// .page-content {
//   display: flex;
// }

.category-nav {
  display: flex;
  padding: 20px 0;

  .button {
    margin-right: 10px;
    background-color: pink;

    &.nuxt-link-exact-active {
      background-color: var(--color-dark);
      color: white;
    }
  }
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
