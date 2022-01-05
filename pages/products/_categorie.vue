<template>
  <div>
    <app-header>
      <div>
        <h1>Flamingo shop</h1>
      </div>
    </app-header>
    <div class="content-wrapper page-content">
      <NuxtLink to="/products">Geen filter</NuxtLink>
      <div v-for="category of categoriesList" :key="category">
        <NuxtLink
          :to="{ name: 'products-categorie', params: { categorie: category } }"
          >{{ category }}</NuxtLink
        >
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
  async asyncData({ $content, params }) {
    const categories = await $content("products")
      .where({ categories: { $nin: "" } })
      .only(["categories"])
      .fetch();
    const categoriesList = categories.reduce((list, product) => {
      const unique = product.categories.filter((c) => list.indexOf(c) === -1);
      return [...list, ...unique];
    }, []);

    const products = await $content("products")
      .where({ categories: { $contains: [params.categorie] } })
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
