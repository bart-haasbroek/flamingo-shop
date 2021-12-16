<template>
  <div>
    <app-header
      :isBig="true"
      :image="require(`~/assets/images/flamingo-home-bg.jpg`)"
    >
      <h1>
        Flamingo shop
      </h1>
      <h2>
        De leukse flamingo spullen verzameld op een plek
      </h2>
    </app-header>
    <div class="content-wrapper page-content">
      <app-grid :columns="2">
        <div class="product-highlight">
          <h3 class="product-highlight__title">
            De warmste knuffels
          </h3>
          <div class="product-highlight__summary">
            <p>
              Het leukste cadeau voor in de koude maanden
            </p>
          </div>
          <NuxtLink class="button" to="/products">
            Bekijk alle knuffels
          </NuxtLink>
          <img
            class="product-highlight__image"
            :src="require(`~/assets/images/flamingo-knuffel.jpeg`)"
            alt=""
          />
        </div>
        <div class="product-highlight">
          <h3 class="product-highlight__title">
            Lekker creatief
          </h3>
          <div class="product-highlight__summary">
            <p>
              Even offline en creatief bezig zijn met deze flamingo producten
            </p>
          </div>
          <NuxtLink class="button" to="/products">
            Bekijk alle producten
          </NuxtLink>
          <img
            class="product-highlight__image"
            :src="require(`~/assets/images/creative.jpg`)"
            alt=""
          />
        </div>
        <!-- <blog-item
          v-for="article of articles"
          :key="article.slug"
          :item="article"
        ></blog-item> -->
      </app-grid>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "img",
        "slug",
        "author",
        "intro",
        "createdAt",
      ])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
  transition: {
    afterLeave(el) {
      console.log("afterLeave", el);
    },
  },
};
</script>

<style lang="scss">
.product-highlight {
  height: 350px;
  position: relative;
  padding: 35px 40px;
  border-radius: 12px;
  overflow: hidden;

  &__title {
    font-size: 35px;
  }

  &__summary p {
    font-size: 18px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: pink;
    opacity: 0.85;
  }
  &__image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
