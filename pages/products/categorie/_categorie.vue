<template>
  <div>
    <app-header>
      <div>
        <h1>Flamingo spullen: {{ categorie }}</h1>
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
              name: 'products-categorie-categorie',
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
      categorie: params.categorie,
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
    text-transform: capitalize;

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
