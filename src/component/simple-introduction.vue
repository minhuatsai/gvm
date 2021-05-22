<template>
  <a
    class="simple-introduction-container"
    :style="style"
    :href="introductionData.href || 'javascript:void(0)'"
    :target="introductionData.target"
  >
    <div class="simple-introduction-article">
      <h5 v-html="introductionData.title"></h5>
      <template v-if="introductionData.isHTML">
        <p v-html="introductionData.html"></p>
      </template>
      <template v-else>
        <p>{{ introductionData.text }}</p>
      </template>
    </div></a
  >
</template>
<script>
export default {
  name: "simple-introduction",
  props: ["introductionData"],
  data() {
    return {
      style: this.$props.introductionData.style,
    };
  },
};
</script>
<style lang="scss" scoped>
.simple-introduction-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 2 - 5px);
  margin-left: calc(5px * 2 / 1);
  margin-top: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s;
  overflow: hidden;
  padding: 0 15px;

  &:nth-of-type(2n + 1) {
    margin-left: 0;
  }
  &:nth-of-type(-n + 2) {
    margin-top: 0;
  }
  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.8);
      transform: translateY(0);
      height: 100%;
    }
    .simple-introduction-article {
      transform: scale(1);
    }
  }
  &::before {
    transition: all 0.5s;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0%;
    transform: translateY(100%);
  }
  .simple-introduction-article {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #fff;
    position: relative;
    transition: 0.5s;
    transform: scale(0);
    text-align: justify;

    > h5 {
      font-size: 18px;
      position: absolute;
      top: -70px;
    }
    > p {
      width: 100%;
      font-size: 24px;
      margin: 0;
    }
  }
}
</style>
