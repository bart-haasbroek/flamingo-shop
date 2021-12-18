<template>
  <div>
    <div class="app-grid__wrapper">
      <div
        class="app-grid"
        :class="'columns-amount-' + columns"
        :style="{ 'grid-gap': spacing + 'px' }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      default: 2,
    },
    spacing: {
      default: 30,
    },
  },
};
</script>

<style lang="scss">
.app-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  &.columns-amount-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  &.columns-amount-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  &.columns-amount-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1200px) {
    &.columns-amount-4 {
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
  }

  @media screen and (max-width: 1000px) {
    &.columns-amount-3,
    &.columns-amount-4 {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }

  @media screen and (max-width: 640px) {
    &.columns-amount-2,
    &.columns-amount-3,
    &.columns-amount-4 {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }
}
</style>
