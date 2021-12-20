<template>
  <div>
    <app-header :noImg="true"></app-header>
    <div class="stroke">
      <div class="content-wrapper content-wrapper--narrow page-content">
        <div class="product">
          <div class="product__image">
            <div class="product__active-image">
              <!-- <nuxt-img
                src="https://nuxtjs.org/img/home/discover/partners/partners-illustration.svg"
              /> -->
              <nuxt-img :src="activeProduct" />
            </div>
            <div
              class="product__thumbs-wrapper"
              v-if="product.images.length > 0"
            >
              <app-grid columns="3" spacing="15">
                <div
                  class="product__thumb-image"
                  v-for="(thumb, index) of product.images"
                  :key="index"
                  @click="setImage(thumb)"
                >
                  <div class="product__thumb-image-holder">
                    <img :src="thumb" alt="" />
                  </div>
                </div>
              </app-grid>
            </div>
          </div>
          <div class="product__content">
            <h1 class="product__title">{{ product.title }}</h1>
            <div
              class="product__description"
              v-html="product.description"
            ></div>
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
      activeProduct: "",
    };
  },
  created() {
    this.activeProduct =
      "https://nuxtjs.org/img/home/discover/partners/partners-illustration.svg";
    this.activeProduct = this.product.img;
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
    setImage(url) {
      this.activeProduct = url;
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
    width: 100%;
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

@media screen and (max-width: 787px) {
  .product {
    display: block;
    &__image {
      width: 100%;
      display: flex;
    }

    &__active-image {
      width: 60%;
      margin-right: 20px;
    }

    &__thumbs-wrapper {
      margin-top: 0;
      flex-grow: 1;
    }

    &__title {
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 640px) {
  .product {
    &__image {
      width: 100%;
    }

    &__active-image {
      width: 75%;
    }
  }
}
</style>
