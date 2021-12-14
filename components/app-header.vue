<template>
  <header class="header" :class="{ 'is-big': isBig }">
    <div class="d-flex align-items-center header__top content-wrapper">
      <div class="header__logo">
        <NuxtLink to="/">
          <img src="assets/images/logo.svg" alt="" />
        </NuxtLink>
      </div>
      <nav class="main-nav d-flex justify-content-end flex-grow-1">
        <ul>
          <li>
            <NuxtLink :to="'/'">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/blog'">
              Blog
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/over'">
              Over
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/products'">
              Shop
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="!noImg" class="header__image">
      <img :src="image" alt="header-image" />
      <div class="header__title">
        <slot></slot>
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
    image: {
      type: String,
      default:
        "https://www.digitalbart.nl/wptest/wp-content/uploads/2020/06/header.jpg",
    },
  },
};
</script>

<style lang="scss">
nav.main-nav {
  ul {
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style-type: none;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        display: block;
        font-size: 16px;
        padding: 7px 18px;
        transition: 0.4s ease;
        text-decoration: none;
        font-weight: bold;
        color: #00d1b2;
        border-bottom: 2px solid transparent;

        &.nuxt-link-exact-active {
          border-color: #1d1d1d;
          color: #1d1d1d;
        }

        &:hover {
          color: #1d1d1d;
        }
      }
    }
  }
}
.header {
  position: relative;
  width: 100%;
  background: #efefef;

  &__top {
    padding: 10px;
  }

  h1,
  h2 {
    color: #efefef;
  }

  &.is-big {
    .header__image {
      height: 350px;
    }
  }

  &__logo {
    width: 60px;
    height: 60px;
    cursor: pointer;
    background: red;
  }

  &__image {
    height: 250px;
    background-size: cover;
    background-position: 50%;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: var(--color-dark);
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
  }

  &__inner {
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  &__title {
    text-align: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 10;
  }
}
</style>
