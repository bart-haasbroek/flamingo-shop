<template>
  <div class="blog-item" v-if="item">
    <div class="blog-item__image">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: item.slug } }">
        <nuxt-img :src="item.img" quality="60" />
      </NuxtLink>
    </div>
    <div class="blog-item__inner">
      <div class="blog-item__title">
        <h2>
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: item.slug } }">{{
            item.title
          }}</NuxtLink>
        </h2>
      </div>
      <div class="blog-item__summary">
        <p>{{ item.intro }}</p>
      </div>
      <div class="blog-item__bottom">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: item.slug } }">
          Lees meer
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: undefined,
  },
};
</script>

<style lang="scss">
.blog-item {
  width: 100%;
  background: pink;
  border-radius: 12px;
  overflow: hidden;

  &__title {
    margin: 14px 0 8px;
  }

  &__inner {
    padding: 10px 22px 20px;
  }

  &__image {
    width: 100%;
    height: 200px;
    position: relative;

    a {
      position: relative;
      display: block;
      height: 100%;

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: var(--color-dark);
        opacity: 0.8;
        display: block;
        top: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  &__summary p {
    line-height: 22px;
    font-size: 14px;
  }

  &__bottom {
    margin-top: 8px;

    a {
      color: var(--color-primary);
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
