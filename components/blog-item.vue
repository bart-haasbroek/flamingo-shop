<template>
  <div class="blog-item" v-if="item">
    <div class="blog-item__image">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: item.slug } }">
        <img :src="item.img" alt="" />
      </NuxtLink>
    </div>
    <div class="blog-item__inner">
      <div class="blog-item__meta">
        <div class="blog-item__meta-entry">
          <img
            class="icon"
            src="~/assets/icons/feather/calendar.svg"
            alt="calender-icon"
          />
          {{ item.createdAt | formatDate("dd MMM yyyy") }}
        </div>
        <div class="blog-item__meta-entry">
          <img
            class="icon"
            src="~/assets/icons/feather/user.svg"
            alt="author-icon"
          />
          {{ item.author }}
        </div>
      </div>
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
  background: #f3f3f3;
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

  &__title {
    margin: 14px 0 8px;
  }

  &__summary {
    min-height: 50px;
  }

  &__inner {
    padding: 10px 16px 20px;
  }

  &__meta {
    display: flex;
    margin-top: 12px;
    font-size: 13px;
  }

  &__meta-entry {
    margin-right: 16px;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 5px;
    }
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

  &__bottom {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;

    a {
      display: block;
      background: var(--color-primary);
      color: #fff;
      padding: 10px 14px 11px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
