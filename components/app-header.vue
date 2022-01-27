<template>
  <header class="header" :class="{ 'is-big': isBig }">
    <div class="d-flex align-items-center header__top content-wrapper">
      <div class="header__logo">
        <NuxtLink to="/">
          <nuxt-img src="/images/flamingo-spullen-logo1.png" quality="75" />
        </NuxtLink>
      </div>
      <div class="d-flex justify-content-end flex-grow-1">
        <app-nav :items="items"></app-nav>
      </div>
    </div>
    <div class="header__inner" v-if="!noImg">
      <div
        class="header__title d-flex align-items-center content-wrapper"
        :class="{ 'justify-content-center': !titleLeft }"
      >
        <div>
          <slot></slot>
        </div>
      </div>
      <div class="header__image">
        <nuxt-img :src="image" quality="60" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isBig: {
      type: Boolean,
      default: false,
    },
    noImg: {
      type: Boolean,
      default: false,
    },
    titleLeft: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: "./images/flamingo-home-bg.jpg",
    },
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          slug: "/",
          key: "home",
        },
        {
          label: "Blog",
          slug: "/blog",
          key: "blog",
        },
        {
          label: "spullen",
          slug: "/products",
          key: "spullen",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  background: #f1786f;

  &__top {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &__logo {
    width: 160px;
    cursor: pointer;
    // background: var(--color-dark);

    img {
      max-height: 100%;
    }
  }

  h1,
  h2 {
    color: #efefef;
  }

  &.is-big {
    .header__inner {
      height: 350px;
    }
  }

  &__inner {
    height: 250px;
    position: relative;
  }

  &__title {
    height: 100%;
    width: 100%;
    position: relative;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: var(--color-dark);
      width: 100%;
      height: 100%;
      opacity: 0.7;
    }
  }
}

@media screen and (max-width: 640px) {
  .header {
    &__top {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &__logo {
      width: 120px;
    }
  }
}
</style>
