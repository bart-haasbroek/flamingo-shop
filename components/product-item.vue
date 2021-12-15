<template>
  <div class="product-item" v-if="product">
    <div class="product-item__inner">
      <div class="product-item__image">
        <NuxtLink
          :to="{ name: 'products-slug', params: { slug: product.slug } }"
        >
          <img :src="`/images/${product.img}`" alt="" />
        </NuxtLink>
      </div>
      <div class="product-item__title">
        <h3>
          <NuxtLink
            :to="{ name: 'products-slug', params: { slug: product.slug } }"
            >{{ product.title }}</NuxtLink
          >
        </h3>
      </div>
      <!-- #f1786f -->
      <div class="product-item__price">
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
.product-item {
  width: 100%;
  background: #f1e3e1;
  border-radius: 12px;

  &__title {
    font-size: 14px;
    margin-bottom: 4px;
  }

  &__summary {
    min-height: 50px;
  }

  &__inner {
    padding: 20px 20px 16px;
  }

  &__image {
    max-width: 100%;
    height: 250px;
    margin-bottom: 16px;
    border-radius: 12px;
    overflow: hidden;

    a {
      position: relative;
      display: block;
      height: 100%;
      background: white;
      padding: 20px;
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
