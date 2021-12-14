<template>
  <div class="product" v-if="product">
    <div class="product__image">
      <NuxtLink :to="{ name: 'products-slug', params: { slug: product.slug } }">
        <img :src="`/images/${product.img}`" alt="" />
      </NuxtLink>
    </div>
    <div class="product__inner">
      <div class="product__title">
        <h3>
          <NuxtLink
            :to="{ name: 'products-slug', params: { slug: product.slug } }"
            >{{ product.title }}</NuxtLink
          >
        </h3>
      </div>
      <div class="product__price">
        <p>&#8364; {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: undefined,
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  background: #f3f3f3;
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

  &__title {
    font-size: 14px;
    margin-bottom: 4px;
  }

  &__summary {
    min-height: 50px;
  }

  &__inner {
    padding: 14px 16px 12px;
  }

  &__image {
    max-width: 100%;
    height: 250px;
    padding: 20px;
    background: white;

    a {
      position: relative;
      display: block;
      height: 100%;
    }

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
