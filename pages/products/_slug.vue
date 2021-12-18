<template>
  <div>
    <app-header :noImg="true"></app-header>
    <div class="stroke">
      <div class="content-wrapper content-wrapper--narrow page-content">
        <div class="product">
          <div class="product__image">
            <div class="product__active-image">
              <img :src="`/images/${product.img}`" alt="" />
            </div>
            <div class="product__thumbs-wrapper">
              <app-grid columns="3" spacing="15">
                <div
                  class="product__thumb-image"
                  v-for="(thumb, index) of product.images"
                  :key="index"
                  @click="setImage()"
                >
                  <div class="product__thumb-image-holder">
                    <img :src="`/images/${thumb}`" alt="" />
                  </div>
                </div>
              </app-grid>
            </div>
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

            <h4>Specificaties</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper product__related">
      <title-stroke title="Andere leuke flamingo producten:"></title-stroke>
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
  methods: {
    setImage() {
      console.log("jeeeej", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.stroke {
  background: #f1e3e1;
}

.product {
  display: flex;
  align-items: flex-start;

  &__title {
    margin-bottom: 8px;
  }

  &__image {
    width: 40%;
    flex-shrink: 0;
    margin-right: 30px;
  }

  &__active-image {
    border-radius: 12px;
    background: white;
    padding: 20px;

    img {
      max-height: 500px;
      margin: 0 auto;
    }
  }

  &__thumbs-wrapper {
    margin-top: 20px;
  }

  &__thumb-image {
    height: 0;
    padding-bottom: 100%;
    position: relative;
    cursor: pointer;
  }

  &__thumb-image-holder {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 3px;
    border: 2px solid transparent;
    transition: border 0.3s ease;
    background: white;
    border-radius: 10px;

    &:hover {
      border-color: pink;
    }

    img {
      max-width: 100%;
      max-height: 100%;
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
</style>
