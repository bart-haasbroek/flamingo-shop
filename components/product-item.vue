<template>
  <div class="product-item" v-if="product">
    <div class="product-item__inner">
      <div class="product-item__image">
        <NuxtLink
          :to="{ name: 'products-slug', params: { slug: product.slug } }"
        >
          <img :src="product.img" alt="" />
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
        <p>{{ product.price | price }}</p>
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
  background: pink;
  border-radius: 12px;

  &__title {
    font-size: 14px;
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
      display: flex;
      align-items: center;
      height: 100%;
      background: white;
      padding: 20px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
      display: block;
    }
  }

  &__price {
    p {
      font-size: 18px;
    }
  }
}
</style>
