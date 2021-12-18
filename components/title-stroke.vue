<template>
  <div>
    <div class="title-stroke">
      <h4>
        {{ title }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: undefined,
    wrapped: false,
  },
};
</script>

<style lang="scss">
.title-stroke {
  font-size: 25px;
  padding: 40px 0;
  text-align: center;
}
</style>
