<template>
  <div>
    <app-header>
      <div>
        <h1>Flamingo shop</h1>
      </div>
    </app-header>
    <div class="content-wrapper page-content">
      <NuxtLink to="products">Geen filter</NuxtLink>
      <div v-for="category of categoriesList" :key="category">
        <NuxtLink :to="{ path: 'products', query: { categorie: category } }">{{
          category
        }}</NuxtLink>
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
export default {
  watchQuery: true,
  async asyncData({ $content, query }) {
    const categories = await $content("products")
      .where({ categories: { $nin: "" } })
      .only(["categories"])
      .fetch();
    const categoriesList = categories.reduce((list, product) => {
      const unique = product.categories.filter((c) => list.indexOf(c) === -1);
      return [...list, ...unique];
    }, []);
    const filter = query.categorie
      ? { $containsAny: query.categorie.split(",") }
      : { $contains: [] };
    const products = await $content("products")
      .where({ categories: filter })
      .only(["title", "description", "img", "slug", "price", "intro"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      products,
      categoriesList,
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
