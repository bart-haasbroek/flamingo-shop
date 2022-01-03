<template>
  <div>
    <app-header :noImg="true"></app-header>
    <div class="stroke">
      <div class="content-wrapper content-wrapper--narrow page-content">
        <div class="product">
          <h1 class="product__title">{{ product.title }}</h1>
          <div class="product__inner">
            <div class="product__image">
              <div
                class="product__active-image"
                :class="{ 'hide-when-responsive': product.images.length > 0 }"
              >
                <nuxt-img
                  sm:200px
                  md:400px
                  lg:800px
                  :src="activeProduct"
                  quality="75"
                />
              </div>
              <div
                class="product__thumbs-wrapper"
                v-if="product.images.length > 0"
              >
                <carousel
                  class="responsive-pagination"
                  :per-page="3"
                  :navigationEnabled="true"
                  :paginationEnabled="true"
                  :centerMode="true"
                  :scrollPerPage="false"
                  :perPageCustom="[
                    [320, 1],
                    [787, 3],
                  ]"
                  :paginationPosition="'bottom'"
                  :paginationSize="5"
                >
                  <slide v-for="(thumb, index) of product.images" :key="index">
                    <div class="product__thumb-image" @click="setImage(thumb)">
                      <div class="product__thumb-image-holder">
                        <nuxt-img :src="thumb" md:200px quality="75" />
                      </div>
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
            <div class="product__content">
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
                Naar {{ product.shop }}
              </a>
            </div>
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
  async asyncData({ $content, params }) {
    const product = await $content("products", params.slug).fetch();
    const related = await $content("products")
      .limit(4)
      .only(["title", "description", "img", "slug", "price", "intro"])
      .sortBy("createdAt", "asc")
      .fetch();
    const activeProduct = product.img;
    return {
      product,
      related,
      activeProduct,
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

.VueCarousel-navigation {
  display: none !important;
}

.VueCarousel-slide {
  padding: 5px;
}

.product {
  &__inner {
    display: flex;
    align-items: flex-start;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__image {
    width: 50%;
    flex-shrink: 0;
    margin-right: 30px;
  }

  &__active-image {
    border-radius: 12px;
    background: white;
    padding: 20px;
    height: 500px;
    display: flex;
    align-items: center;

    img {
      max-height: 100%;
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
    display: flex;
    align-items: center;

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
    &__inner {
      display: block;
    }

    &__title {
      margin-top: 0;
      font-size: 20px;
    }

    &__image {
      width: 100%;
      display: flex;
    }

    &__thumb-image {
      height: 250px;
      padding-bottom: 0;
    }

    &__active-image {
      width: 100%;
      margin-right: 20px;
      max-height: 250px;

      &.hide-when-responsive {
        display: none;
      }
    }

    &__content {
      margin-top: 20px;
    }

    &__thumbs-wrapper {
      margin-top: 0;
      flex-grow: 1;
    }

    &__thumb-image-holder:hover {
      border-color: transparent;
    }
  }
}

@media screen and (max-width: 640px) {
  .product {
    &__image {
      width: 100%;
    }
  }
}
</style>
