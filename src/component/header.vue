<template>
  <div
    class="header-container"
    :style="{ backgroundColor: `rgba(0, 0, 0,${headerBackgroundOpacity})` }"
  >
    <div class="header-container-inner">
      <router-link to="/"
        ><img class="img-logo" :src="logoImgSrc"
      /></router-link>
      <ul>
        <li v-for="list in headerList" :key="list.text">
          <a
            v-if="list.link.type === 'absolute'"
            :href="list.link.href"
            :style="headerColorAdject"
            >{{ list.text }}
          </a>
          <router-link
            v-else-if="list.link.type === 'relative'"
            :to="list.link.href"
            :style="headerColorAdject"
            >{{ list.text }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["logoImgSrc", "headerList"],
  components: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      headerBackgroundOpacity: 0,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 300) {
        this.headerBackgroundOpacity = 1;
      } else {
        this.headerBackgroundOpacity = window.scrollY / 300;
      }
    },
  },
  computed: {
    headerColorAdject() {
      return { color: this.headerBackgroundOpacity === 1 ? "#fff" : "" };
    },
  },
};
</script>
<style lang="scss" scoped>
.header-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  z-index: 444444;
  padding: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 1) !important;
    .header-container-inner {
      > ul {
        li {
          a {
            color: #fff;
          }
        }
      }
    }
  }
  .header-container-inner {
    display: flex;
    align-items: center;
    width: 95%;

    .img-logo {
      max-width: 200px;
    }
    > ul {
      list-style-type: none;
      display: flex;
      margin: 0 0 0 30px;

      li {
        cursor: pointer;

        &:hover {
          a {
            color: #8cbe01 !important;
          }
        }
        a {
          color: #696969;
          padding: 0 var(--spacing-m);
          display: flex;
          align-items: center;
          height: 60px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
