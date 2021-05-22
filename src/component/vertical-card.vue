<template>
  <div class="vertical-card-container">
    <a :href="verticalCardList.href" :target="verticalCardList.target">
      <div class="vertical-card-header">
        <h2 class="campaign-title">{{ verticalCardList.title }}</h2>
        <p>{{ verticalCardList.description }}</p>
      </div>
    </a>
    <div class="vertical-card-bg" :style="style"></div>
  </div>
</template>
<script>
export default {
  name: "vertical-card",
  props: ["verticalCardList"],
  data() {
    return {
      style: {
        "background-image": `url(${this.$props.verticalCardList.bgImgSrc})`,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.vertical-card-container {
  width: calc(100% / 4 - 8px);
  margin-left: calc(8px * 4 / 3);
  margin-bottom: 10px;
  transition: all 0.3s;
  position: relative;

  &:hover {
    box-shadow: 0 0 15px #000;
    transform: translate(0, -10%) rotate(5deg);
    background-color: #fff;

    a {
      .vertical-card-header {
        p {
          opacity: 1;
          transition: 0.5s;
        }
      }
    }
  }
  &:nth-of-type(4n + 1) {
    margin-left: 0;
  }
  a {
    height: 277px;
    display: block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: var(--spacing-xxl-6);

    .vertical-card-header {
      padding: 10px;

      p {
        opacity: 0;
        transition: 1s;
      }
    }
  }
  .vertical-card-bg {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0.6;
    background-size: cover;
  }
}

@media screen and (max-width: 1024px) {
  .vertical-card-container {
    width: calc(100% / 3 - 8px);
    margin-left: calc(8px * 3 / 2);

    &:nth-of-type(4n + 1) {
      margin-left: calc(8px * 3 / 2);
    }
    &:nth-of-type(3n + 1) {
      margin-left: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .vertical-card-container {
    width: calc(100% / 2 - 8px);
    margin-left: calc(8px * 2 / 1);

    &:nth-of-type(4n + 1),
    &:nth-of-type(3n + 1) {
      margin-left: calc(8px * 2 / 1);
    }
    &:nth-of-type(2n + 1) {
      margin-left: 0;
    }
  }
}
</style>
