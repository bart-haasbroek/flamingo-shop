<template>
  <div>
    <app-header :noImg="true"></app-header>
    <div class="stroke">
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
      </div>
    </div>
    <div class="content-wrapper product__related">
      <div class="stroke-text">
        <h4>
          Andere leuke flamingo producten:
        </h4>
      </div>
      <app-grid columns="4">
        <product-item
          v-for="product of related"
          :key="product.slug"
          :product="product"
        ></product-item>
      </app-grid>
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
    console.log("product", product);
    const related = await $content("products")
      .limit(4)
      .only(["title", "description", "img", "slug", "price", "intro"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      product,
      related,
    };
  },
};
</script>

<style lang="scss" scoped>
.stroke {
  background: #f1e3e1;
}

.stroke-text {
  font-size: 25px;
  padding: 40px 0;
  text-align: center;
}

.product {
  display: flex;

  &__title {
    margin-bottom: 8px;
  }

  &__image {
    width: 40%;
    flex-shrink: 0;
    margin-right: 30px;
    border-radius: 12px;
    background: white;
    padding: 20px;

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

  &__related {
    margin-bottom: 60px;
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
