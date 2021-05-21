<template lang="pug">
a.simple-introduction-container(:style="style" :href="introductionData.href || 'javascript:void(0)'" :target="introductionData.target")
    .simple-introduction-article
        h5(v-html="introductionData.title")
        template(v-if="introductionData.isHTML")
            p(v-html="introductionData.html")
        template(v-else)
            p {{introductionData.text}}
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

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .simple-introduction-article {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #fff;
    position: relative;

    > h5 {
      font-size: 18px;
      position: absolute;
      top: -70px;
    }
    > p {
      width: 100%;
      font-size: 42px;
      margin: 0;
    }
  }
}
</style>
