<template>
  <main>
    <div class="page-wrapper>">
      <Nuxt />
    </div>
    <footer class="footer">
      <div class="content-wrapper">
        <app-grid :columns="3">
          <div class="footer__col">
            <h3 class="footer__title">
              Meest recente berichten
            </h3>
            <ul class="footer__list">
              <li v-for="article of articles" :key="article.slug">
                <NuxtLink
                  class="hover-underline"
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  >{{ article.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h3 class="footer__title">
              Categorieën
            </h3>
            <ul class="footer__list">
              <li>
                <a href="#">title</a>
              </li>
              <li>
                <a href="#">title</a>
              </li>
              <li>
                <a href="#">title</a>
              </li>
            </ul>
          </div>
        </app-grid>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      articles: undefined,
    };
  },
  async fetch() {
    this.articles = await this.$content("articles")
      .limit(5)
      .only(["title", "slug"])
      .fetch();
  },
};
</script>

<style lang="scss">
main {
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr auto;
}

.footer {
  padding: 30px 0 40px;
  background: var(--color-dark);

  &__title {
    font-size: 24px;
    margin-bottom: 10px;
    color: var(--color-light);
  }

  &__list {
    font-size: 17px;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      padding-left: 20px;
      line-height: 24px;
      margin-bottom: 14px;

      &:after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background: var(--color-light);
        position: absolute;
        top: 10px;
        left: 0;
        border-radius: 100%;
      }

      a {
        color: var(--color-light);
      }
    }
  }
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
