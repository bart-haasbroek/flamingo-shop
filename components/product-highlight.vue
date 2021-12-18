<template>
  <div class="product-highlight">
    <h3 class="product-highlight__title">
      {{ highlight.title }}
    </h3>
    <div class="product-highlight__summary">
      <p>
        {{ highlight.subtitle }}
      </p>
    </div>
    <NuxtLink class="button product-highlight__more-button" to="/products">
      {{ highlight.buttonText }}
    </NuxtLink>
    <img class="product-highlight__image" :src="highlight.image" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    highlight: undefined,
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

  &__more-button {
    margin-top: 20px;
  }

  &__summary p {
    font-size: 18px;
    line-height: 22px;
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
