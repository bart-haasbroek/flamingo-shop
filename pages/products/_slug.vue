<template>
  <div>
    <app-header :noImg="true"></app-header>
    <div class="content-wrapper content-wrapper--narrow page-content">
      <div class="product">
        <div class="product__image">
          <img :src="`/images/${product.img}`" alt="" />
        </div>
        <div class="product__content">
          <h1 class="product__title">{{ product.title }}</h1>
          <div class="product__description">
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="product__price">
            <p>&#8364;{{ product.price }}</p>
          </div>
          <a
            :href="product.link"
            target="_blank"
            class="button product__button"
          >
            Naar Bol.com
          </a>
        </div>
      </div>
      Andere leuke producten:
      {{ articles }}
      <!-- <app-grid columns="4">
        <product-item
          v-for="article of articles"
          :key="article.slug"
          :product="article"
        ></product-item>
      </app-grid> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: "",
    };
  },
  async asyncData({ $content, params }) {
    const product = await $content("products", params.slug).fetch();
    return { product };
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;

  &__title {
    margin-bottom: 8px;
  }

  &__image {
    width: 40%;
    flex-shrink: 0;
    margin-right: 20px;
    padding-right: 20px;

    img {
      max-height: 500px;
      margin: 0 auto;
    }
  }

  &__content {
    flex-grow: 1;
  }

  &__button {
    margin-top: 20px;
  }

  &__price {
    margin-top: 20px;
    p {
      font-size: 20px;
    }
  }
}

.button {
  display: inline-block;
  background: var(--color-primary);
  color: #fff;
  padding: 10px 14px 11px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}
</style>
