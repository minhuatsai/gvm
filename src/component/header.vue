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
            v-scroll-to="
              scrollAnimateOption
                ? { el: list.link.href, ...scrollAnimateOption }
                : list.link.href
            "
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
      <Slide
        right
        :closeOnNavigation="true"
        :class="{ hasbg: this.headerBackgroundOpacity === 1 }"
        @openMenu="handleOpenMenu"
        @closeMenu="handleCloseMenu"
      >
        <a
          v-for="(litItem, listIndex) in headerList"
          v-scroll-to="
            scrollAnimateOption
              ? { el: litItem.link.href, ...scrollAnimateOption }
              : litItem.link.href
          "
          class="slide-list"
          :class="{ active: bergerMenuIsOpen }"
          :href="litItem.link.href"
          :key="'slide-list' + listIndex"
        >
          <span>
            <v-icon v-if="litItem.iconName" :name="litItem.iconName"></v-icon>
            {{ litItem.text }}</span
          >
        </a>
      </Slide>
    </div>
  </div>
</template>
<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "Header",
  props: ["logoImgSrc", "headerList", "scrollAnimateOption"],
  components: { Slide },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      headerBackgroundOpacity: 0,
      bergerMenuIsOpen: false,
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
    handleOpenMenu() {
      setTimeout(() => {
        this.bergerMenuIsOpen = true;
      }, 300);
    },
    handleCloseMenu() {
      this.bergerMenuIsOpen = false;
    },
  },
  computed: {
    headerColorAdject() {
      return { color: this.headerBackgroundOpacity === 1 ? "#fff" : "" };
    },
  },
};
</script>
<style lang="scss">
.header-container-inner {
  .bm-menu {
    background-color: #191919;

    .slide-list {
      &.active {
        > span {
          opacity: 1;
        }
      }
      > span {
        display: flex;
        align-items: center;
        opacity: 0;
        transition: 0.3s;

        > svg {
          margin-right: 15px;
        }
      }
    }
  }
  .bm-burger-button {
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  .hasbg {
    .bm-burger-bars {
      background-color: #fff;
    }
  }
}
.header-container {
  &:hover {
    .bm-burger-bars {
      background-color: #fff;
    }
  }
}

@media screen and (max-width: 1280px) {
  .header-container-inner {
    .bm-burger-button {
      top: 50%;
      transform: translateY(-50%);
      display: block;
    }
    .hasbg {
      .bm-burger-bars {
        background-color: #fff;
      }
    }
  }
}
</style>
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

@media screen and (max-width: 1280px) {
  .header-container {
    .header-container-inner {
      > ul {
        display: none;
      }
    }
  }
}
</style>
