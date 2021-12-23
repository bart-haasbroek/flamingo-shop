<template>
  <div :class="{ 'menu-is-open': menuIsOpen }">
    <nav class="main-nav">
      <ul>
        <li v-for="item of items" :key="item.key">
          <NuxtLink :to="item.slug" :class="'menu-item-' + item.key">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="hamburger-menu" @click="menuIsOpen = !menuIsOpen">
      <div class="hamburger-center"></div>
    </div>
    <nav class="responsive-menu">
      <ul>
        <li v-for="item of items" :key="item.key">
          <NuxtLink
            :to="item.slug"
            :class="'menu-item-' + item.key"
            @click.native="menuIsOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  props: {
    items: undefined,
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
        padding: 10px 18px;
        transition: 0.4s ease;
        text-decoration: none;
        font-weight: bold;
        color: var(--color-dark);
        border-radius: 8px;
        transition: all 0.4s ease;

        &.nuxt-link-exact-active,
        &:hover {
          color: white;
          background: var(--color-dark);
        }

        &:hover {
          color: white;
        }
      }
    }
  }
}

.responsive-menu {
  position: fixed;
  background: pink;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  right: -100vw;
  top: 55px;
  transition: all 0.4s ease;
  display: none;
  padding: 20px;
  border-top: 5px solid var(--color-dark);

  a {
    font-size: 28px;
    line-height: 1.5;
    font-weight: bold;
    color: var(--color-dark);
    padding: 10px 0;
    display: block;
  }

  ul {
    padding: 0;

    li {
          list-style-type: none;
      border-bottom: 2px solid var(--color-dark);
    }
  }
}

.hamburger-menu {
  width: 40px;
  height: 30px;
  position: relative;
  display: none;

  &:after,
  &:before,
  > div {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    height: 5px;
    background: var(--color-dark);
    transition: all 0.4s ease;
  }

  & > div {
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
}

.menu-is-open {
  .hamburger-menu {
    &:before {
      top: 16px;
      transform: rotate(45deg);
    }
    &:after {
      bottom: 10px;
      transform: rotate(-45deg);
    }

    > div {
      opacity: 0;
    }
  }
  .responsive-menu {
    right: 0;
  }
}

@media screen and (max-width: 640px) {
  .responsive-menu,
  .hamburger-menu {
    display: block;
  }

  .main-nav {
    display: none;
  }
}
</style>
