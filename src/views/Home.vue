<template>
  <div class="home-container">
    <Header
      :logoImgSrc="headerData.logoImgSrc"
      :headerList="headerData.headerList"
    ></Header>
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      :adaptiveHeight="true"
      :autoplay="true"
    >
      <img src="../assets/img/carousel-health.jpg" />
      <img src="../assets/img/carousel-health.jpg" />
      <img src="../assets/img/carousel-health.jpg" />
      <img src="../assets/img/carousel-health.jpg" />
    </VueSlickCarousel>
    <!-- <Carousel v-bind:carouselData="carouselData"></Carousel> -->
    <div class="home-container-body">
      <div class="block-section">
        <h1>最新文章</h1>
        <div class="block-section-content">
          <div class="campaign-list">
            <VerticalCard
              v-for="(listItem, listIndex) in campaignList"
              :key="'carousel-' + listIndex"
              :verticalCardList="listItem"
            ></VerticalCard>
          </div>
        </div>
      </div>
      <div class="landing-page-section">
        <div class="landing-page-article">
          <div class="landing-page-article-slogan">
            <p class="font-weight-bold">Gogoro Network</p>
          </div>
          <div class="landing-page-article-header">
            <h1>The largest battery swapping network in the world</h1>
          </div>
          <div class="landing-page-article-body">
            <p>
              Gogoro Network® manages over <b>200,000 battery swaps a day</b> at
              2,100 GoStation® across Taiwan, that's enough power to ride
              15,000,000 km.
            </p>
          </div>
          <div class="landing-page-article-footer">
            <a
              class="font-weight-bold"
              href="https://network.gogoro.com/tw/en/coverage/"
              >SEE OUR NETWORK
              <img
                src="https://cdn.gogoro.com/resources/pages/landing-page/gs0528/icon-aarow.svg?v=2"
            /></a>
          </div>
        </div>
      </div>

      <div class="media-section">
        <SimpleIntroduction
          v-for="(listItem, listIndex) in introductionList"
          :key="'simple-introduction-' + listIndex"
          :introductionData="listItem"
        ></SimpleIntroduction>
      </div>

      <div class="eeyo-section">
        <h1>Introducing Gogoro Eeyo</h1>
        <p>
          From the cloud to the road, this is eBike reimagined.
          <br />Ultralight, totally digital, and an absolute blast to ride.
        </p>
        <a class="font-weight-bold" href="https://eeyo.bike/tw/"
          >LEARN MORE
          <img
            src="https://cdn.gogoro.com/resources/pages/landing-page/gs0528/icon-aarow.svg?v=2" /></a
        ><img
          src="https://cdn.gogoro.com/resources/pages/landing-page/gs0528/05_Profileshot_Right_Side.png"
        />
      </div>
      <div class="quotes-section">
        <div class="quotes-section-article" :class="quotesData.animation">
          <a href="quotesData.list[quotesData.activeIndex].href">
            <blockquote>
              <q>{{ quotesData.list[quotesData.activeIndex].quote }}</q>
              <p>- {{ quotesData.list[quotesData.activeIndex].note }}</p>
            </blockquote></a
          >
        </div>
        <ul class="quotes-tabs">
          <li
            v-for="(listItem, listIndex) in quotesData.list"
            :key="'quotes-tabs-' + listIndex"
            :class="{ active: listIndex === quotesData.activeIndex }"
            @click="quotesTabsChange(listIndex)"
          >
            <span v-if="listItem.tabText">{{ listItem.tabText }}</span
            ><img v-else-if="listItem.tabImgSrc" :src="listItem.tabImgSrc" />
          </li>
        </ul>
      </div>
      <div class="impact-section">
        <h1>Our community’s impact</h1>
        <Carousel
          v-bind:carouselData="impactData"
          v-on:carousel-change="impactCarouselChange"
        ></Carousel>
      </div>
    </div>
    <div class="home-container-footer">
      <div class="home-container-footer-article">
        <div class="community-container">
          <a href="./"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMTAwIDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0Ljc1NjYgOC40NTY4MkM4NC45MzAxIDguMzQ1NSA4NC45MTQ5IDguMTkyODggODQuODU3IDguMDc4NDFMODMuNjI3IDYuMTIyNjRDODMuNTIzNSA1Ljk1Nzc2IDgzLjM3NjMgNS45OTA2NyA4My4yNzQ1IDYuMDQwNzNDODEuNDQwMiA3LjE4NDAxIDc2LjkwNiAxMS4xMzgzIDc2LjkwNjMgMTcuOTczNVYyNi4wMzk1Qzc2LjkxOTUgMjYuMTY2OSA3Ni45ODgxIDI2LjMwMzQgNzcuMTg0NCAyNi4zMDc2SDc5LjQ0MTVDNzkuNjM1MSAyNi4zMDM0IDc5LjcwNDMgMjYuMTcxOCA3OS43MTg5IDI2LjA0NThWMTcuOTczNUM3OS43MTg5IDEyLjA4NzMgODMuODI3OSA5LjA1NDM3IDg0Ljc1NjYgOC40NTY4MlpNMTcuMzY3OSAxNy45NzM1QzE3LjM2NzkgMTguMjExMSAxNy4zMzc0IDI1LjI5NDIgMTcuMzM3NCAyNS4yOTQyQzE3LjMzODUgMjcuNzE0MSAxNi4zNjM3IDI5LjkxNyAxNC43OTQzIDMxLjUwMThDMTMuMjI3IDMzLjA4NzkgMTEuMDQ3MiAzNC4wNzMzIDguNjUzNjYgMzQuMDcyOUM2LjM0Mzk0IDM0LjA3MzMgNC4yMzU0MSAzMy4xNTQgMi42ODI2NyAzMS42NjQ5QzIuNjE3MjIgMzEuNTcxOCAyLjU4Nzc5IDMxLjQ0NjQgMi42OTM3NSAzMS4zMTk0TDQuMzQ3OTUgMjkuNjQ2MUM0LjQ3MzY1IDI5LjU1NTEgNC41OTc2MiAyOS41OTg1IDQuNjg2MjcgMjkuNjY4NUM1LjczNDgyIDMwLjYzOTYgNy4xMTk2MiAzMS4yMjk0IDguNjUzNjYgMzEuMjI5OEMxMC4yNzk1IDMxLjIyOTQgMTEuNzM5MSAzMC41Njc4IDEyLjgwNTYgMjkuNDkxN0MxMy44NzAxIDI4LjQxMjUgMTQuNTI0OSAyNi45Mzc3IDE0LjUyNTYgMjUuMjk0MlYyNC40NjkxQzEyLjk4NTcgMjUuODg1NCAxMC45MjkxIDI2Ljc1MjkgOC42ODQxMyAyNi43NTIyQzYuMjkwNjEgMjYuNzUyOSA0LjExMDc1IDI1Ljc2NjggMi41NDM0NiAyNC4xODA3QzAuOTc1MTM4IDIyLjU5NjMgMCAyMC4zOTMgMCAxNy45NzM1QzAgMTUuNTUzNSAwLjk3NTEzOCAxMy4zNTAzIDIuNTQzNDYgMTEuNzY1OUM0LjExMDc1IDEwLjE3OTggNi4yOTA5NiA5LjE5MzY4IDguNjg0MTMgOS4xOTQzOEMxMS4wNzc3IDkuMTkzNjggMTMuMjU3OSAxMC4xNzk0IDE0LjgyNDUgMTEuNzY1OUMxNi4zOTQyIDEzLjM1MDMgMTcuMzY4MyAxNS41NTM1IDE3LjM2NzkgMTcuOTczNVpNMTIuODM2MSAxMy43NzU2QzEzLjkwMTMgMTQuODU0NCAxNC41NTU0IDE2LjMyOTYgMTQuNTU1NyAxNy45NzM0SDE0LjU1MzNMMTQuNTI1NiAxOC41NzczQzE0LjM4NjQgMTkuOTc2NSAxMy43NjkgMjEuMjI2MiAxMi44MzYxIDIyLjE3MDZDMTEuNzY4OCAyMy4yNDcgMTAuMzA5OSAyMy45MDg3IDguNjg0MTQgMjMuOTA5NEM3LjA1ODY4IDIzLjkwODcgNS41OTk3OCAyMy4yNDcgNC41MzI1MyAyMi4xNzA2QzMuNDY3NzEgMjEuMDkyMSAyLjgxMzU3IDE5LjYxNjYgMi44MTI4OCAxNy45NzM0QzIuODEzNTcgMTYuMzI5NiAzLjQ2NzcxIDE0Ljg1NDQgNC41MzI1MyAxMy43NzU2QzUuNTk5NDQgMTIuNjk5MSA3LjA1ODMzIDEyLjAzNzkgOC42ODQxNCAxMi4wMzc1QzEwLjMwOTkgMTIuMDM3OSAxMS43Njg4IDEyLjY5OTggMTIuODM2MSAxMy43NzU2Wk01My4wMzUzIDExLjc2NTlDNTEuNDY4NCAxMC4xNzk0IDQ5LjI4ODggOS4xOTM2OCA0Ni44OTQ2IDkuMTk0MzhDNDQuNTAxNSA5LjE5MzY4IDQyLjMyMTYgMTAuMTc5OCA0MC43NTQgMTEuNzY1OUMzOS4xODU2IDEzLjM1MDMgMzguMjEwOCAxNS41NTM1IDM4LjIxMDggMTcuOTczNUMzOC4yMTA4IDIwLjM5MyAzOS4xODU2IDIyLjU5NjMgNDAuNzU0IDI0LjE4MDdDNDIuMzIxNiAyNS43NjY4IDQ0LjUwMDggMjYuNzUyOSA0Ni44OTQ2IDI2Ljc1MjJDNDkuMTM5NiAyNi43NTI5IDUxLjE5NjUgMjUuODg1NCA1Mi43MzYxIDI0LjQ2OTFWMjUuMjk0MkM1Mi43MzU0IDI2LjkzNzcgNTIuMDgxMyAyOC40MTI1IDUxLjAxNjEgMjkuNDkxN0M0OS45NDk2IDMwLjU2NzggNDguNDkgMzEuMjI5NCA0Ni44NjQ5IDMxLjIyOThDNDUuMzMwMSAzMS4yMjk0IDQzLjk0NTcgMzAuNjM5NiA0Mi44OTcxIDI5LjY2ODVDNDIuODA4MSAyOS41OTg1IDQyLjY4NDIgMjkuNTU1MSA0Mi41NTkxIDI5LjY0NjFMNDAuOTA0OSAzMS4zMTk0QzQwLjc5ODYgMzEuNDQ2NCA0MC44Mjg0IDMxLjU3MTggNDAuODkzMiAzMS42NjQ5QzQyLjQ0NjMgMzMuMTU0IDQ0LjU1NDQgMzQuMDczMyA0Ni44NjQ5IDM0LjA3MjlDNDkuMjU3NyAzNC4wNzMzIDUxLjQzNzUgMzMuMDg3OSA1My4wMDUyIDMxLjUwMThDNTQuNTc0MiAyOS45MTcgNTUuNTQ5IDI3LjcxNDEgNTUuNTQ3OSAyNS4yOTQyQzU1LjU0NzkgMjUuMjk0MiA1NS41Nzg4IDE4LjIxMTEgNTUuNTc4OCAxNy45NzM1QzU1LjU3OTEgMTUuNTUzNSA1NC42MDQ3IDEzLjM1MDMgNTMuMDM1MyAxMS43NjU5Wk01Mi43MzYgMTguNTc3M0w1Mi43NjQxIDE3Ljk3MzRINTIuNzY2NUM1Mi43NjU4IDE2LjMyOTYgNTIuMTExNCAxNC44NTQ0IDUxLjA0NjUgMTMuNzc1NkM0OS45NzkzIDEyLjY5OTggNDguNTIwNCAxMi4wMzc5IDQ2Ljg5NDYgMTIuMDM3NUM0NS4yNjg4IDEyLjAzNzkgNDMuODA5NSAxMi42OTkxIDQyLjc0MyAxMy43NzU2QzQxLjY3ODEgMTQuODU0NCA0MS4wMjM3IDE2LjMyOTYgNDEuMDIzMyAxNy45NzM0QzQxLjAyMzcgMTkuNjE2NiA0MS42NzgxIDIxLjA5MjEgNDIuNzQzIDIyLjE3MDZDNDMuODEwMiAyMy4yNDcgNDUuMjY5MSAyMy45MDg3IDQ2Ljg5NDYgMjMuOTA5NEM0OC41MjA0IDIzLjkwODcgNDkuOTc5MyAyMy4yNDcgNTEuMDQ2NSAyMi4xNzA2QzUxLjk3OTQgMjEuMjI2MiA1Mi41OTY4IDE5Ljk3NjUgNTIuNzM2IDE4LjU3NzNaTTc0Ljc1NDMgMTcuOTczNUM3NC43NTQzIDIwLjM5MjQgNzMuNzgwMiAyMi41OTYzIDcyLjIxMDEgMjQuMTgwN0M3MC42NDM5IDI1Ljc2NjggNjguNDY0IDI2Ljc1MjkgNjYuMDcwMSAyNi43NTIyQzYzLjY3NjMgMjYuNzUyOSA2MS40OTY4IDI1Ljc2NjggNTkuOTI5NSAyNC4xODA3QzU4LjM2MDUgMjIuNTk2MyA1Ny4zODU3IDIwLjM5MjQgNTcuMzg2NCAxNy45NzM1QzU3LjM4NTcgMTUuNTUzNSA1OC4zNjA1IDEzLjM1MDMgNTkuOTI5NSAxMS43NjU5QzYxLjQ5NjggMTAuMTc5NCA2My42NzYzIDkuMTkzNjggNjYuMDcwMSA5LjE5NDM4QzY4LjQ2MzMgOS4xOTM2OCA3MC42NDM5IDEwLjE3OTQgNzIuMjEwMSAxMS43NjU5QzczLjc4MDIgMTMuMzUwMyA3NC43NTQzIDE1LjU1MzUgNzQuNzU0MyAxNy45NzM1Wk03MC4yMjIgMTMuNzc1NkM3MS4yODY1IDE0Ljg1NDQgNzEuOTQxMyAxNi4zMjk2IDcxLjk0MiAxNy45NzM0QzcxLjk0MTMgMTkuNjE2NiA3MS4yODY4IDIxLjA5MjEgNzAuMjIyIDIyLjE3MDZDNjkuMTU0NyAyMy4yNDcgNjcuNjk1MiAyMy45MDg3IDY2LjA3IDIzLjkwOTRDNjQuNDQ0MiAyMy45MDg3IDYyLjk4NSAyMy4yNDcgNjEuOTE4MSAyMi4xNzA2QzYwLjg1MjkgMjEuMDkyMSA2MC4xOTkxIDE5LjYxNjYgNjAuMTk4NCAxNy45NzM0QzYwLjE5OTEgMTYuMzI5NiA2MC44NTI5IDE0Ljg1NDQgNjEuOTE4MSAxMy43NzU2QzYyLjk4NSAxMi42OTk4IDY0LjQ0NDIgMTIuMDM3OSA2Ni4wNyAxMi4wMzc1QzY3LjY5NTkgMTIuMDM3OSA2OS4xNTQ3IDEyLjY5OTggNzAuMjIyIDEzLjc3NTZaTTMzLjkwMTkgMTEuNzY1OUMzMi4zMzUgMTAuMTc5NCAzMC4xNTUxIDkuMTkzNjggMjcuNzYxMiA5LjE5NDM4QzI1LjM2ODEgOS4xOTM2OCAyMy4xODg1IDEwLjE3OTQgMjEuNjIwOSAxMS43NjU5QzIwLjA1MTkgMTMuMzUwMyAxOS4wNzcxIDE1LjU1MzUgMTkuMDc4MSAxNy45NzM1QzE5LjA3NzEgMjAuMzkyNCAyMC4wNTE5IDIyLjU5NjMgMjEuNjIwOSAyNC4xODA3QzIzLjE4ODIgMjUuNzY2OCAyNS4zNjgxIDI2Ljc1MjkgMjcuNzYxMiAyNi43NTIyQzMwLjE1NTEgMjYuNzUyOSAzMi4zMzUgMjUuNzY2OCAzMy45MDE5IDI0LjE4MDdDMzUuNDcwOSAyMi41OTYzIDM2LjQ0NTcgMjAuMzkzMSAzNi40NDUgMTcuOTczNUMzNi40NDU3IDE1LjU1MzUgMzUuNDcwOSAxMy4zNTAzIDMzLjkwMTkgMTEuNzY1OVpNMjcuNzYxMyAyMy45MDk0QzI5LjM4NzEgMjMuOTA4NyAzMC44NDY0IDIzLjI0NyAzMS45MTM2IDIyLjE3MDZDMzIuOTc4OCAyMS4wOTE3IDMzLjYzMjkgMTkuNjE2NiAzMy42MzM2IDE3Ljk3MzRDMzMuNjMyOSAxNi4zMjk2IDMyLjk3ODggMTQuODU0NCAzMS45MTM2IDEzLjc3NTZDMzAuODQ2NCAxMi42OTk4IDI5LjM4NzEgMTIuMDM3OSAyNy43NjEzIDEyLjAzNzVDMjYuMTM1NSAxMi4wMzc5IDI0LjY3NyAxMi42OTk4IDIzLjYxMDEgMTMuNzc1NkMyMi41NDUyIDE0Ljg1NDQgMjEuODkwNyAxNi4zMjk2IDIxLjg5MDQgMTcuOTczNEMyMS44OTA3IDE5LjYxNjYgMjIuNTQ1MiAyMS4wOTIxIDIzLjYxMDEgMjIuMTcwNkMyNC42NzcgMjMuMjQ3IDI2LjEzNTUgMjMuOTA4NyAyNy43NjEzIDIzLjkwOTRaTTk5LjczMDMgMTcuOTczNUM5OS43MzEzIDIwLjM5MjQgOTguNzU2NSAyMi41OTYzIDk3LjE4NzIgMjQuMTgwN0M5NS42MjA2IDI1Ljc2NjggOTMuNDQwNCAyNi43NTI5IDkxLjA0NjUgMjYuNzUyMkM4OC42NTI2IDI2Ljc1MjkgODYuNDcyOCAyNS43NjY4IDg0LjkwNTEgMjQuMTgwN0M4My4zMzY4IDIyLjU5NjMgODIuMzYyNCAyMC4zOTMxIDgyLjM2MjQgMTcuOTczNUM4Mi4zNjI0IDE1LjU1MzUgODMuMzM2OCAxMy4zNTAzIDg0LjkwNTEgMTEuNzY1OUM4Ni40NzM1IDEwLjE3OTQgODguNjUyNiA5LjE5MzY4IDkxLjA0NjUgOS4xOTQzOEM5My40NCA5LjE5MzY4IDk1LjYxOTkgMTAuMTc5NCA5Ny4xODcyIDExLjc2NTlDOTguNzU2NSAxMy4zNTAzIDk5LjczMTMgMTUuNTUzNSA5OS43MzAzIDE3Ljk3MzVaTTk1LjE5ODggMTMuNzc1NkM5Ni4yNjM2IDE0Ljg1NDQgOTYuOTE3OCAxNi4zMjk2IDk2LjkxODUgMTcuOTczNEM5Ni45MTc4IDE5LjYxNjYgOTYuMjYzNiAyMS4wOTIxIDk1LjE5ODggMjIuMTcwNkM5NC4xMzE2IDIzLjI0NyA5Mi42NzIzIDIzLjkwODcgOTEuMDQ2NSAyMy45MDk0Qzg5LjQyMTQgMjMuOTA4NyA4Ny45NjE0IDIzLjI0NyA4Ni44OTQyIDIyLjE3MDZDODUuODMwMSAyMS4wOTIxIDg1LjE3NTYgMTkuNjE2NiA4NS4xNzQ5IDE3Ljk3MzRDODUuMTc1NiAxNi4zMjk2IDg1LjgzMDEgMTQuODU0NCA4Ni44OTQyIDEzLjc3NTZDODcuOTYxNCAxMi42OTk4IDg5LjQyMTQgMTIuMDM3OSA5MS4wNDY1IDEyLjAzNzVDOTIuNjcyMyAxMi4wMzc5IDk0LjEzMTYgMTIuNjk5OCA5NS4xOTg4IDEzLjc3NTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
          /></a>
          <ul>
            <li
              v-for="(listItem, listIndex) in communityData"
              :key="'community-' + listIndex"
            >
              <a :href="listItem.href"
                ><img :src="listItem.imgSrc" /><span>{{
                  listItem.name
                }}</span></a
              >
            </li>
          </ul>
        </div>
        <div class="footer-menu-container">
          <div
            class="menu-section"
            v-for="(listItem, listIndex) in footerMenu"
            :key="'menu-section-' + listIndex"
          >
            <h5>
              <a>{{ listItem.title }}</a>
            </h5>
            <ul>
              <li
                v-for="(listSecondaryItem, listSecondaryIndex) in listItem.list"
                :key="'menu-section-list-' + listSecondaryIndex"
              >
                <a :href="listSecondaryItem.href">{{
                  listSecondaryItem.text
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright-container">
        <p>Copyright © 2014-2021 Gogoro Inc. All rights reserved.</p>
        <a href="https://www.gogoro.com/privacy-policy/">Privacy Policy</a
        ><a href="https://www.gogoro.com/terms-of-use/">Terms of Use</a>
        <div class="zone-select-container">
          <select>
            <option>Region</option>
            <option>Global</option>
            <option>Taiwan</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../component/header";
import Carousel from "../component/carousel";
import VerticalCard from "../component/vertical-card";
import SimpleIntroduction from "../component/simple-introduction";
import imgLogo from "../assets/img/logo.png";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    VerticalCard,
    SimpleIntroduction,
    VueSlickCarousel,
  },
  mounted() {
    this.quotesTabsCarouselStart();
  },
  data() {
    return {
      headerData: {
        logoImgSrc: imgLogo,
        headerList: [
          {
            text: "最新文章",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/smartscooter/",
            },
          },
          {
            text: "醫療百科",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/gogoro-network/",
            },
          },
          {
            text: "癌症知識",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
          {
            text: "吃出健康",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
          {
            text: "運動減重",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
          {
            text: "樂活心靈",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
          {
            text: "保養抗老",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
          {
            text: "品味生活",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
          {
            text: "駐站作家",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
          {
            text: "主題企劃",
            link: {
              type: "absolute",
              href: "https://www.gogoro.com/news/",
            },
          },
        ],
      },
      carouselData: {
        className: "main-carousel",
        changeStopAutoPlay: true,
        list: [
          {
            active: true,
            html: `
              <div
                class="carousel-list carousel-list-first"
              >
                <div class="advertisement-container">
                  <h2 class="banner-slogan"></h2>
                  <a href="https://www.gogoro.com/smartscooter/viva/mix/">LEARN MORE</a>
                </div>
              </div>
            `,
          },
          {
            html: `
            <div
              class="carousel-list carousel-list-second"
            >
              <a href="https://www.gogoro.com/about/">
                <video class="gs-video" muted="" playsinline="" autoplay="" loop="" onplay="this.style.opacity = 1;" style="opacity: 1;">
                  <source src="//cdn.gogoro.com/resources/pages/landing-page/gs0528/home_vision_1080_v02.mp4" type="video/mp4">
                </video>
                <span class="gs-content-layer">
                  <span class="gs-content">
                    <h1 class="gs-title">A Better Way Forward to <span class="d-inline-block">Smarter, Cleaner Cities</span></h1>
                    <span class="gs-desc">Gogoro is reinventing urban transportation with an ecosystem of sustainable energy solutions for the world’s modern cities.</span>
                  </span>
                </span>
              </a>
            </div>
          `,
          },
        ],
      },
      campaignList: [
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210521/thumbnail_M_79603_01.jpg",
          title: "無跪姿、床上也能做！7分鐘輕運動鍛鍊大腿肌力",
          description:
            "常常走路膝蓋痛，可以多練習大腿肌力。剛開始怕站著練、或跪著練，膝蓋又痛起來，你可以先…",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210521/thumbnail_M_79690_01.jpg",
          title: "北市推「台版方艙醫院」，柯文哲：防快篩或PCR陽性民眾回流社區",
          description:
            "武漢肺炎本土疫情延燒，台北市長柯文哲今天指出，北市的疫情較嚴重，他成立「加強版專責防…",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210521/thumbnail_M_79674_01.jpg",
          title: "免器材！廚房、浴室都行，在家也可以做的4招美身塑體操",
          description: "免器材！廚房、浴室都行，在家也可以做的4招美身塑體操",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210521/thumbnail_M_79684_01.jpg",
          title: "集中檢疫所收住690名確診個案！加發血氧偵測儀，防病情生變",
          description:
            "武漢肺炎本土疫情嚴峻，指揮中心醫療應變組副組長王必勝今天表示，目前集中檢疫所共收住6…",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210521/thumbnail_M_79682_01.jpg",
          title:
            "新增312例本土病例！陳時中：沒要進入「四級警戒」，勿以訛傳訛！",
          description:
            "台灣新冠疫情持續升溫！中央流行疫情指揮中心今（21）日公布國內新增312例本土病例，…",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210521/thumbnail_M_79630_01.jpg",
          title: "高溫、停電、缺水…小心中暑！居家防疫3招預防室內熱傷害",
          description:
            "近幾日因為疫情已啟動學校停課不停學的措施，且許多企業提升居家辦公比率，宅在家成為時下…",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210521/thumbnail_M_79670_01.jpg",
          title: "開車要戴口罩嗎？指揮中心：獨自一人可不戴",
          description:
            "全台疫情升至第3級警戒，外出須全程戴口罩，但開車「無罩」上路罰不罰掀熱議。指揮中心今…",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210520/thumbnail_M_79666_01.jpg",
          title: "疫情升溫不敢去醫院？5/28前開放視訊看診、開藥，就醫免出門",
          description:
            "武漢肺炎本土疫情升溫，不少民眾不敢外出就醫。健保署今天宣布，全台指定醫療院所即日起至…",
        },
        {
          target: "_self",
          href: "",
          bgImgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210520/thumbnail_M_79658_01.jpg",
          title: "外食風險高，使用外送平台要注意什麼？居家防疫4原則自保",
          description:
            "因應疫情升級，外出用餐因為要長時間取下口罩，讓風險性提高，也使得許多餐飲通路紛紛禁止…",
        },
      ],
      introductionList: [
        {
          title: "5 Partners and Growing",
          text: "",
          isHTML: true,
          html: "Powered by <br />Gogoro Network",
          href: "https://network.gogoro.com/tw/en/scooter/",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://www.gogoro.com/uploads/landing_pages/2-blog-post1-background-cd09a35997763fe78b226f247857bef12f02d0a6.png?1590570315')",
          },
        },
        {
          title: "Blog",
          text: "",
          isHTML: true,
          html: "Hero & Gogoro <br />heads to India",
          href: "https://www.gogoro.com/news/Gogoro-Battery-Swapping-India-Hero/",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://www.gogoro.com/uploads/landing_pages/2-social-post-background-56588be5a509ae7d8125699fa4a6a5757930e33a.jpg?1619595003')",
          },
        },
      ],
      quotesData: {
        animation: "animation-fadein",
        activeIndex: 0,
        duration: 5000,
        stopCarousel: null,
        list: [
          {
            quote: "You have to see it to really appreciate how cool it is,",
            note: "Al Gore, Wired, December 2017",
            href: "https://www.wired.co.uk/article/al-gore-generation-sustainable-capitalism",
            tabText: "",
            tabImgSrc:
              "https://cdn.gogoro.com/resources/images/landing-page/quotes_logo_wired_on.jpg",
          },
          {
            quote: "The 9 Coolest Gadgets from CES 2016",
            note: "Time",
            href: "https://time.com/4169302/ces-2016-coolest/",
            tabText: "",
            tabImgSrc:
              "https://cdn.gogoro.com/resources/images/landing-page/quotes_logo_time_on.jpg",
          },
          {
            quote: "2018 Asian Company of the Year",
            note: "Cleantech 100",
            href: "https://www.cleantech.com/release/cleantech-group-unveils-the-2018-global-cleantech-100-list/",
            tabText: "",
            tabImgSrc:
              "https://cdn.gogoro.com/resources/images/landing-page/quotes_logo_cleantech_on.jpg",
          },
          {
            quote: "2015 CES Best In Show Award",
            note: "The Verge",
            href: "https://www.theverge.com/2015/1/9/7509787/verge-awards-best-of-ces-2015",
            tabText: "",
            tabImgSrc:
              "https://cdn.gogoro.com/resources/images/landing-page/quotes_logo_verge_on.jpg",
          },
          {
            quote: "2017 Nikkei Asian Review Award for Excellence",
            note: "Nikkei Asian Review",
            href: "https://asia.nikkei.com/magazine/20180111/Business/Gogoro-wins-the-Nikkei-Asian-Review-Award-for-Excellence",
            tabText: "",
            tabImgSrc:
              "https://cdn.gogoro.com/resources/images/landing-page/quotes_logo_nikkei_on.jpg",
          },
          {
            quote: "Selected for the 2016 Sustainia 1000",
            note: "Sustainia",
            href: "https://blog.gogoro.com/en/gogoro-selected-for-the-2016-sustainia100e",
            tabText: "",
            tabImgSrc:
              "https://cdn.gogoro.com/resources/images/landing-page/quotes_logo_sustania_on.jpg",
          },
        ],
      },
      impactData: {
        animation: "animation-slidein",
        list: [
          {
            active: true,
            html: `
            <div
              class="carousel-list-impact"
            >
              <div 
                class="carousel-list-impact-img-container" 
                style="background-image:url('https://www.gogoro.com/assets/frontend/landing/impact-co2-cloud-fad788e12ddf2d3d9c00ffd0998748d275a6c8062aac8adbde4954402c94bc50.svg')"
              ></div>
              <div class="carousel-list-impact-article" ref="aaa">
                <h2>279,573,773</h2>
                <span class="font-weight-bold">CO2 saved</span>
                <p>
                  As many as the amount of CO2 that <span class="dynamic-impact-number">27,957,337</span> trees consume every year.
                </p>
              </div>
            </div>
          `,
          },
          {
            html: `
            <div
              class="carousel-list-impact"
            >
              <div 
                class="carousel-list-impact-img-container" 
                style="background-image:url('https://www.gogoro.com/assets/frontend/landing/impact-battery-658f1b7fd6188c5960f91275460cd3432c395b708558bd16b126f43f68fee24a.svg')"
              ></div>
              <div class="carousel-list-impact-article">
                <h2>184,783,284</h2>
                <span class="font-weight-bold">CO2 saved</span>
                <p>
                  There are more than  <span class="dynamic-impact-number">279,918</span>batteries swapped per day in the last 30 days.
                </p>
              </div>
            </div>
          `,
          },
          {
            html: `
            <div
              class="carousel-list-impact"
            >
              <div 
                class="carousel-list-impact-img-container" 
                style="background-image:url('https://www.gogoro.com/assets/frontend/landing/impact-earth-8faf0186dfd615264e0005aba27d39141359181c3e3667623612ae5d9ddb3087.svg')"
              ></div>
              <div class="carousel-list-impact-article">
                <h2>279,535,819<span>KG</span></h2>
                <span class="font-weight-bold">CO2 saved</span>
                <p>
                  As many as the amount of CO2 that <span class="dynamic-impact-number">27,953,707</span> trees consume every year.
                </p>
              </div>
            </div>
          `,
          },
        ],
      },
      communityData: [
        {
          name: "Facebook",
          href: "http://www.facebook.com/gogoro",
          imgSrc:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjQwODcyNiAyLjA0NzU0QzAgMi44NDk3IDAgMy44OTk4IDAgNlYxNEMwIDE2LjEwMDIgMCAxNy4xNTAzIDAuNDA4NzI2IDE3Ljk1MjVDMC43NjgyNTEgMTguNjU4MSAxLjM0MTkzIDE5LjIzMTcgMi4wNDc1NCAxOS41OTEzQzIuODQ5NyAyMCAzLjg5OTggMjAgNiAyMEg4LjQ3ODQ1VjEyLjk5NDlINS44NzVWOS45NjcyOUg4LjQ3ODQ1VjcuNzM5NzFDOC40Nzg0NSA1LjE1Njk1IDEwLjA1NzggMy43NTAwNSAxMi4zNjEyIDMuNzUwMDVDMTMuMTM3NCAzLjc0ODM2IDEzLjkxMzIgMy43ODc0OSAxNC42ODUzIDMuODY3MjlWNi41NjcyOUgxMy4wOTkxQzExLjg0NCA2LjU2NzI5IDExLjU5OTEgNy4xNjA0IDExLjU5OTEgOC4wMzYyNlY5Ljk2Mzg1SDE0LjU5OTFMMTQuMjA5NSAxMi45OTE0SDExLjU4MTlWMjBIMTRDMTYuMTAwMiAyMCAxNy4xNTAzIDIwIDE3Ljk1MjUgMTkuNTkxM0MxOC42NTgxIDE5LjIzMTcgMTkuMjMxNyAxOC42NTgxIDE5LjU5MTMgMTcuOTUyNUMyMCAxNy4xNTAzIDIwIDE2LjEwMDIgMjAgMTRWNkMyMCAzLjg5OTggMjAgMi44NDk3IDE5LjU5MTMgMi4wNDc1NEMxOS4yMzE3IDEuMzQxOTMgMTguNjU4MSAwLjc2ODI1MSAxNy45NTI1IDAuNDA4NzI2QzE3LjE1MDMgMCAxNi4xMDAyIDAgMTQgMEg2QzMuODk5OCAwIDIuODQ5NyAwIDIuMDQ3NTQgMC40MDg3MjZDMS4zNDE5MyAwLjc2ODI1MSAwLjc2ODI1MSAxLjM0MTkzIDAuNDA4NzI2IDIuMDQ3NTRaIiBmaWxsPSIjQjlCQ0JGIi8+Cjwvc3ZnPgo=",
        },
        {
          name: "Youtube",
          href: "http://www.youtube.com/GogoroChannel",
          imgSrc:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjU4MTggNC43QzE5LjQ2ODcgNC4yNzQ1MSAxOS4yNDU5IDMuODg2MTggMTguOTM1NiAzLjU3Mzg4QzE4LjYyNTMgMy4yNjE1OCAxOC4yMzg0IDMuMDM2MjUgMTcuODEzNiAyLjkyMDQ1QzE2LjI1IDIuNSAxMCAyLjUgMTAgMi41QzEwIDIuNSAzLjc1IDIuNSAyLjE4NjM2IDIuOTIwNDVDMS43NjE2MSAzLjAzNjI1IDEuMzc0NzIgMy4yNjE1OCAxLjA2NDQxIDMuNTczODhDMC43NTQwOTcgMy44ODYxOCAwLjUzMTI1NSA0LjI3NDUxIDAuNDE4MTgyIDQuN0MwIDYuMjcwNDUgMCA5LjU0NTQ1IDAgOS41NDU0NUMwIDkuNTQ1NDUgMCAxMi44MjA1IDAuNDE4MTgyIDE0LjM5MDlDMC41MzEyNTUgMTQuODE2NCAwLjc1NDA5NyAxNS4yMDQ3IDEuMDY0NDEgMTUuNTE3QzEuMzc0NzIgMTUuODI5MyAxLjc2MTYxIDE2LjA1NDcgMi4xODYzNiAxNi4xNzA1QzMuNzUgMTYuNTkwOSAxMCAxNi41OTA5IDEwIDE2LjU5MDlDMTAgMTYuNTkwOSAxNi4yNSAxNi41OTA5IDE3LjgxMzYgMTYuMTcwNUMxOC4yMzg0IDE2LjA1NDcgMTguNjI1MyAxNS44MjkzIDE4LjkzNTYgMTUuNTE3QzE5LjI0NTkgMTUuMjA0NyAxOS40Njg3IDE0LjgxNjQgMTkuNTgxOCAxNC4zOTA5QzIwIDEyLjgyMDUgMjAgOS41NDU0NSAyMCA5LjU0NTQ1QzIwIDkuNTQ1NDUgMjAgNi4yNzA0NSAxOS41ODE4IDQuN1pNNy45NTQ1NSAxMi41MTkzVjYuNTcxNTlMMTMuMTgxOCA5LjU0NTQ1TDcuOTU0NTUgMTIuNTE5M1oiIGZpbGw9IiNCOUJDQkYiLz4KPC9zdmc+Cg==",
        },
        {
          name: "Twitter",
          href: "http://twitter.com/WeAreGogoro",
          imgSrc:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjQ0NjQ1IDE4LjI2MjVDMTMuOTkzNSAxOC4yNjI1IDE4LjEyMzEgMTIuMDA0IDE4LjEyMzEgNi41ODU4NEMxOC4xMjMxIDYuNDA5NzcgMTguMTIzMSA2LjIzMzcgMTguMTE1MSA2LjA1NzYyQzE4LjkxNTQgNS40ODEzOSAxOS42MTE3IDQuNzUzMSAyMC4xNjM5IDMuOTI4NzdDMTkuNDI3NiA0LjI1NjkgMTguNjM1MyA0LjQ3Mjk5IDE3LjgwMyA0LjU3NzAzQzE4LjY1MTMgNC4wNzI4MyAxOS4yOTk2IDMuMjY0NTEgMTkuNjExNyAyLjMwNDEyQzE4LjgxOTQgMi43NzYzMSAxNy45MzkxIDMuMTEyNDUgMTcuMDAyNyAzLjI5NjUyQzE2LjI1MDQgMi40OTYyIDE1LjE4NTkgMiAxNC4wMDk1IDJDMTEuNzQ0NiAyIDkuOTAzODQgMy44NDA3NCA5LjkwMzg0IDYuMTA1NjRDOS45MDM4NCA2LjQyNTc3IDkuOTQzODUgNi43Mzc5IDEwLjAwNzkgNy4wNDIwMkM2LjU5ODUxIDYuODczOTUgMy41NzMzIDUuMjMzMjkgMS41NDg0OSAyLjc1MjNDMS4xOTYzNSAzLjM2MDU0IDAuOTk2MjczIDQuMDY0ODMgMC45OTYyNzMgNC44MTcxM0MwLjk5NjI3MyA2LjI0MTcgMS43MjQ1NiA3LjQ5ODIgMi44MjEgOC4yMzQ1QzIuMTQ4NzMgOC4yMTA0OSAxLjUxNjQ4IDguMDI2NDEgMC45NjQyNjEgNy43MjIyOUMwLjk2NDI2MSA3LjczODMgMC45NjQyNjEgNy43NTQzIDAuOTY0MjYxIDcuNzc4MzFDMC45NjQyNjEgOS43NjMxMSAyLjM4MDgzIDExLjQyNzggNC4yNTM1OCAxMS44MDM5QzMuOTA5NDQgMTEuOSAzLjU0OTI5IDExLjk0OCAzLjE3MzE0IDExLjk0OEMyLjkwOTA0IDExLjk0OCAyLjY1Mjk0IDExLjkyNCAyLjQwNDg0IDExLjg3NkMyLjkyNTA1IDEzLjUwODYgNC40NDU2NSAxNC42OTMxIDYuMjM4MzcgMTQuNzI1MUM0LjgyOTgxIDE1LjgyOTUgMy4wNjExIDE2LjQ4NTggMS4xNDAzMyAxNi40ODU4QzAuODEyMiAxNi40ODU4IDAuNDg0MDY4IDE2LjQ2OTggMC4xNjM5NCAxNi40Mjk4QzEuOTcyNjYgMTcuNTgyMiA0LjEzMzUzIDE4LjI2MjUgNi40NDY0NSAxOC4yNjI1WiIgZmlsbD0iI0I5QkNCRiIvPgo8L3N2Zz4K",
        },
        {
          name: "Instagram",
          href: "http://www.instagram.com/gogoro_taiwan/",
          imgSrc:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ljg3NzAxIDAuMDYwMTc3N0M2Ljk0MzYyIDAuMDExNTExNiA3LjI4NDE2IDAgMTAgMEMxMi43MTU4IDAgMTMuMDU2NCAwLjAxMTUxMTYgMTQuMTIzIDAuMDYwMTc3N0MxNS4xODc0IDAuMTA4NzI1IDE1LjkxNDMgMC4yNzc3ODYgMTYuNTUwNCAwLjUyNTAwN0MxNy4yMDggMC43ODA1MjQgMTcuNzY1NiAxLjEyMjQ2IDE4LjMyMTYgMS42NzgzOUMxOC44Nzc1IDIuMjM0MzYgMTkuMjE5NSAyLjc5MjAzIDE5LjQ3NSAzLjQ0OTYyQzE5LjcyMjIgNC4wODU2OSAxOS44OTEzIDQuODEyNjMgMTkuOTM5OCA1Ljg3NzAxQzE5Ljk4ODUgNi45NDM2MiAyMCA3LjI4NDE2IDIwIDEwQzIwIDEyLjcxNTggMTkuOTg4NSAxMy4wNTY0IDE5LjkzOTggMTQuMTIzQzE5Ljg5MTMgMTUuMTg3NCAxOS43MjIyIDE1LjkxNDMgMTkuNDc1IDE2LjU1MDRDMTkuMjE5NSAxNy4yMDggMTguODc3NSAxNy43NjU2IDE4LjMyMTYgMTguMzIxNkMxNy43NjU2IDE4Ljg3NzUgMTcuMjA4IDE5LjIxOTUgMTYuNTUwNCAxOS40NzVDMTUuOTE0MyAxOS43MjIyIDE1LjE4NzQgMTkuODkxMyAxNC4xMjMgMTkuOTM5OEMxMy4wNTY0IDE5Ljk4ODUgMTIuNzE1OCAyMCAxMCAyMEM3LjI4NDE2IDIwIDYuOTQzNjIgMTkuOTg4NSA1Ljg3NzAxIDE5LjkzOThDNC44MTI2MyAxOS44OTEzIDQuMDg1NjkgMTkuNzIyMiAzLjQ0OTYyIDE5LjQ3NUMyLjc5MjAzIDE5LjIxOTUgMi4yMzQzNiAxOC44Nzc1IDEuNjc4MzkgMTguMzIxNkMxLjEyMjQ2IDE3Ljc2NTYgMC43ODA1MjQgMTcuMjA4IDAuNTI1MDA3IDE2LjU1MDRDMC4yNzc3ODYgMTUuOTE0MyAwLjEwODcyNSAxNS4xODc0IDAuMDYwMTc3NyAxNC4xMjNDMC4wMTE1MTE2IDEzLjA1NjQgMCAxMi43MTU4IDAgMTBDMCA3LjI4NDE2IDAuMDExNTExNiA2Ljk0MzYyIDAuMDYwMTc3NyA1Ljg3NzAxQzAuMTA4NzI1IDQuODEyNjMgMC4yNzc3ODYgNC4wODU2OSAwLjUyNTAwNyAzLjQ0OTYyQzAuNzgwNTI0IDIuNzkyMDMgMS4xMjI0NiAyLjIzNDM2IDEuNjc4MzkgMS42NzgzOUMyLjIzNDM2IDEuMTIyNDYgMi43OTIwMyAwLjc4MDUyNCAzLjQ0OTYyIDAuNTI1MDA3QzQuMDg1NjkgMC4yNzc3ODYgNC44MTI2MyAwLjEwODcyNSA1Ljg3NzAxIDAuMDYwMTc3N1pNMTUuODk3NyAyLjIwNDM4QzE1LjU0NTQgMi4wNjc0NCAxNS4wMTU5IDEuOTA0NTMgMTQuMDQwOSAxLjg2MDA3QzEyLjk4NjQgMS44MTE5NiAxMi42NzAxIDEuODAxNzYgMTAgMS44MDE3NkM3LjMyOTkgMS44MDE3NiA3LjAxMzYxIDEuODExOTYgNS45NTkxNSAxLjg2MDA3QzQuOTg0MTYgMS45MDQ1MyA0LjQ1NDY3IDIuMDY3NDQgNC4xMDIzIDIuMjA0MzhDMy42MzU1MiAyLjM4NTc5IDMuMzAyNCAyLjYwMjQ5IDIuOTUyNDkgMi45NTI0NEMyLjYwMjU0IDMuMzAyMzUgMi4zODU4NCAzLjYzNTQ3IDIuMjA0NDQgNC4xMDIyNUMyLjA2NzQ5IDQuNDU0NjIgMS45MDQ1OCA0Ljk4NDExIDEuODYwMTIgNS45NTkxQzEuODEyMDEgNy4wMTM1NiAxLjgwMTgxIDcuMzI5ODUgMS44MDE4MSA5Ljk5OTk4QzEuODAxODEgMTIuNjcwMSAxLjgxMjAxIDEyLjk4NjQgMS44NjAxMiAxNC4wNDA4QzEuOTA0NTggMTUuMDE1OCAyLjA2NzQ5IDE1LjU0NTMgMi4yMDQ0NCAxNS44OTc3QzIuMzg1ODQgMTYuMzY0NCAyLjYwMjU4IDE2LjY5NzYgMi45NTI0OSAxNy4wNDc1QzMuMzAyNCAxNy4zOTc0IDMuNjM1NTIgMTcuNjE0MSA0LjEwMjMgMTcuNzk1NUM0LjQ1NDY3IDE3LjkzMjUgNC45ODQxNiAxOC4wOTU0IDUuOTU5MTUgMTguMTM5OEM3LjAxMzQ5IDE4LjE4OCA3LjMyOTcgMTguMTk4MiAxMCAxOC4xOTgyQzEyLjY3MDMgMTguMTk4MiAxMi45ODY2IDE4LjE4OCAxNC4wNDA5IDE4LjEzOThDMTUuMDE1OSAxOC4wOTU0IDE1LjU0NTQgMTcuOTMyNSAxNS44OTc3IDE3Ljc5NTVDMTYuMzY0NSAxNy42MTQxIDE2LjY5NzYgMTcuMzk3NCAxNy4wNDc1IDE3LjA0NzVDMTcuMzk3NSAxNi42OTc2IDE3LjYxNDIgMTYuMzY0NCAxNy43OTU2IDE1Ljg5NzdDMTcuOTMyNSAxNS41NDUzIDE4LjA5NTQgMTUuMDE1OCAxOC4xMzk5IDE0LjA0MDhDMTguMTg4IDEyLjk4NjQgMTguMTk4MiAxMi42NzAxIDE4LjE5ODIgOS45OTk5OEMxOC4xOTgyIDcuMzI5ODUgMTguMTg4IDcuMDEzNTYgMTguMTM5OSA1Ljk1OTFDMTguMDk1NCA0Ljk4NDExIDE3LjkzMjUgNC40NTQ2MiAxNy43OTU2IDQuMTAyMjVDMTcuNjE0MiAzLjYzNTQ3IDE3LjM5NzUgMy4zMDIzNSAxNy4wNDc1IDIuOTUyNDRDMTYuNjk3NiAyLjYwMjQ5IDE2LjM2NDUgMi4zODU3OSAxNS44OTc3IDIuMjA0MzhaTTEwIDQuODY0ODhDNy4xNjM5NCA0Ljg2NDg4IDQuODY0ODggNy4xNjM5NCA0Ljg2NDg4IDEwQzQuODY0ODggMTIuODM2MSA3LjE2Mzk0IDE1LjEzNTEgMTAgMTUuMTM1MUMxMi44MzYxIDE1LjEzNTEgMTUuMTM1MSAxMi44MzYxIDE1LjEzNTEgMTBDMTUuMTM1MSA3LjE2Mzk0IDEyLjgzNjEgNC44NjQ4OCAxMCA0Ljg2NDg4Wk02LjY2NjY1IDkuOTk5OTlDNi42NjY2NSAxMS44NDA5IDguMTU5MDMgMTMuMzMzMyAxMCAxMy4zMzMzQzExLjg0MDkgMTMuMzMzMyAxMy4zMzMzIDExLjg0MDkgMTMuMzMzMyA5Ljk5OTk5QzEzLjMzMzMgOC4xNTkwMiAxMS44NDA5IDYuNjY2NjQgMTAgNi42NjY2NEM4LjE1OTAzIDYuNjY2NjQgNi42NjY2NSA4LjE1OTAyIDYuNjY2NjUgOS45OTk5OVpNMTUuMzM4IDUuODYxOTlDMTYuMDAwOCA1Ljg2MTk5IDE2LjUzOCA1LjMyNDc2IDE2LjUzOCA0LjY2MjAxQzE2LjUzOCAzLjk5OTI2IDE2LjAwMDggMy40NjE5OSAxNS4zMzggMy40NjE5OUMxNC42NzUzIDMuNDYxOTkgMTQuMTM4IDMuOTk5MjYgMTQuMTM4IDQuNjYyMDFDMTQuMTM4IDUuMzI0NzYgMTQuNjc1MyA1Ljg2MTk5IDE1LjMzOCA1Ljg2MTk5WiIgZmlsbD0iI0I5QkNCRiIvPgo8L3N2Zz4K",
        },
        {
          name: "Linkedin",
          href: "http://www.linkedin.com/company/gogoro",
          imgSrc:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjQwODcyNiAyLjA0NzU0QzAgMi44NDk3IDAgMy44OTk4IDAgNlYxNEMwIDE2LjEwMDIgMCAxNy4xNTAzIDAuNDA4NzI2IDE3Ljk1MjVDMC43NjgyNTEgMTguNjU4MSAxLjM0MTkzIDE5LjIzMTcgMi4wNDc1NCAxOS41OTEzQzIuODQ5NyAyMCAzLjg5OTggMjAgNiAyMEgxNEMxNi4xMDAyIDIwIDE3LjE1MDMgMjAgMTcuOTUyNSAxOS41OTEzQzE4LjY1ODEgMTkuMjMxNyAxOS4yMzE3IDE4LjY1ODEgMTkuNTkxMyAxNy45NTI1QzIwIDE3LjE1MDMgMjAgMTYuMTAwMiAyMCAxNFY2QzIwIDMuODk5OCAyMCAyLjg0OTcgMTkuNTkxMyAyLjA0NzU0QzE5LjIzMTcgMS4zNDE5MyAxOC42NTgxIDAuNzY4MjUxIDE3Ljk1MjUgMC40MDg3MjZDMTcuMTUwMyAwIDE2LjEwMDIgMCAxNCAwSDZDMy44OTk4IDAgMi44NDk3IDAgMi4wNDc1NCAwLjQwODcyNkMxLjM0MTkzIDAuNzY4MjUxIDAuNzY4MjUxIDEuMzQxOTMgMC40MDg3MjYgMi4wNDc1NFpNMTUuNDk1MSA4LjUwNDk1QzE0Ljc0NSA3Ljc1NDggMTMuNzI3NSA3LjMzMzM3IDEyLjY2NjcgNy4zMzMzN0MxMS42MDU4IDcuMzMzMzcgMTAuNTg4NCA3Ljc1NDggOS44MzgyNCA4LjUwNDk1QzkuMDg4MSA5LjI1NTA5IDguNjY2NjcgMTAuMjcyNSA4LjY2NjY3IDExLjMzMzRWMTZIMTEuMzMzM1YxMS4zMzM0QzExLjMzMzMgMTAuOTc5OCAxMS40NzM4IDEwLjY0MDYgMTEuNzIzOSAxMC4zOTA2QzExLjk3MzkgMTAuMTQwNSAxMi4zMTMxIDEwIDEyLjY2NjcgMTBDMTMuMDIwMyAxMCAxMy4zNTk0IDEwLjE0MDUgMTMuNjA5NSAxMC4zOTA2QzEzLjg1OTUgMTAuNjQwNiAxNCAxMC45Nzk4IDE0IDExLjMzMzRWMTZIMTYuNjY2N1YxMS4zMzM0QzE2LjY2NjcgMTAuMjcyNSAxNi4yNDUyIDkuMjU1MDkgMTUuNDk1MSA4LjUwNDk1Wk01Ljk5OTk5IDE2VjhIMy4zMzMzM1YxNkg1Ljk5OTk5Wk01Ljk5OTk5IDQuNjY2NzFDNS45OTk5OSA1LjQwMzA5IDUuNDAzMDQgNi4wMDAwNCA0LjY2NjY2IDYuMDAwMDRDMy45MzAyOCA2LjAwMDA0IDMuMzMzMzMgNS40MDMwOSAzLjMzMzMzIDQuNjY2NzFDMy4zMzMzMyAzLjkzMDMzIDMuOTMwMjggMy4zMzMzNyA0LjY2NjY2IDMuMzMzMzdDNS40MDMwNCAzLjMzMzM3IDUuOTk5OTkgMy45MzAzMyA1Ljk5OTk5IDQuNjY2NzFaIiBmaWxsPSIjQjlCQ0JGIi8+Cjwvc3ZnPgo=",
        },
      ],
      footerMenu: [
        {
          title: "Smartscooter",
          list: [
            {
              href: "https://www.gogoro.com/smartscooter/s-performance/",
              text: "S Performance",
            },
            {
              href: "https://www.gogoro.com/smartscooter/1-series/",
              text: "Gogoro 1 Series",
            },
            {
              href: "https://www.gogoro.com/smartscooter/2-series/",
              text: "Gogoro 2 Series",
            },
            {
              href: "https://www.gogoro.com/smartscooter/3-series/",
              text: "Gogoro 3 Series",
            },
            {
              href: "https://www.gogoro.com/smartscooter/viva/",
              text: "Gogoro VIVA",
            },
            {
              href: "https://www.gogoro.com/smartscooter/viva/mix/",
              text: "Gogoro VIVA MIX",
            },
            {
              href: "https://www.gogoro.com/software/",
              text: "iQ System®",
            },
            {
              href: "https://www.gogoro.com/smartscooter/specs/",
              text: "Compare Specs",
            },
          ],
        },
        {
          title: "Smart Power",
          list: [
            {
              href: "https://www.gogoro.com/gogoro-network/",
              text: "Gogoro Network®",
            },
          ],
        },
        {
          title: "News",
          list: [
            {
              href: "https://www.gogoro.com/news/",
              text: "Latest",
            },
            {
              href: "https://www.gogoro.com/about-us/",
              text: "About Us",
            },
            {
              href: "https://www.gogoro.com/media-center/",
              text: "Media Center",
            },
            {
              href: "https://www.gogoro.com/media-center/logos/",
              text: "Media Assets",
            },
            {
              href: "https://www.gogoro.com/media-center/#section-contact",
              text: "Inquires",
            },
          ],
        },
        {
          title: "Get Support",
          list: [
            {
              href: "https://support.gogoro.com/en/",
              text: "Tech Support",
            },
            {
              href: "https://support.gogoro.com/en",
              text: "Mail Us",
            },
            {
              href: "https://support.gogoro.com/en/faq/",
              text: "FAQ",
            },
          ],
        },
      ],
    };
  },
  methods: {
    quotesTabsChange(activeIndex) {
      this.quotesTabsCarouselStop();
      this.quotesTabsCarouselStart();
      this.quotesData.animation = "animation-fadeout";
      setTimeout(() => {
        this.quotesData.activeIndex = activeIndex;
        this.quotesData.animation = "animation-fadein";
      }, 500);
    },
    quotesTabsCarouselStart() {
      this.quotesData.stopCarousel = setInterval(() => {
        this.quotesData.activeIndex++;
        if (this.quotesData.activeIndex === this.quotesData.list.length) {
          this.quotesData.activeIndex = 0;
        }
        this.quotesData.list.forEach((listItem, listIndex) => {
          listItem.active =
            this.quotesData.activeIndex === listIndex ? true : false;
        });
      }, this.quotesData.duration);
    },
    quotesTabsCarouselStop() {
      clearInterval(this.quotesData.stopCarousel);
    },
    impactCarouselChange(activeIndex) {
      this.impactData.animation = "animation-slideout";
      setTimeout(() => {
        this.impactData.activeIndex = activeIndex;
        this.impactData.animation = "animation-slidein";
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
}
</style>

<style lang="scss">
.main-carousel {
  height: 85vh;
}
.carousel-list {
  height: 100%;
  position: relative;
}
// .carousel-list-first {
//   background: url(//cdn.gogoro.com/resources/images/landing-page/viva-mix/hb-viva-mix-scooter.png?v1)
//       center/contain no-repeat,
//     url(//cdn.gogoro.com/resources/images/landing-page/viva-mix/hb-viva-mix-bg.png?v1)
//       center/cover no-repeat;

//   .advertisement-container {
//     position: absolute;
//     top: 75%;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 90vw;
//     max-width: 402px;

//     .banner-slogan {
//       height: 70px;
//       background-image: url(//cdn.gogoro.com/resources/images/landing-page/viva-mix/hb-viva-mix-slogan-en.svg);
//       background-repeat: no-repeat;
//       background-size: 100%;
//       margin: 0;
//     }
//     > a {
//       display: inline-block;
//       border-radius: 32px;
//       border: 2px solid #fff;
//       padding: 15px 30px;
//       color: #fff;
//       font-weight: 700;
//       text-decoration: none;
//       text-transform: uppercase;
//       transition: all 0.5s;

//       &:hover {
//         background-color: #fff;
//         color: #5a5a5a;
//       }
//     }
//   }
// }
// .carousel-list-second {
//   video {
//     display: block;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     -o-object-fit: cover;
//     object-fit: cover;
//     left: 0;
//     top: 0;
//   }
//   .gs-content-layer {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     left: 50%;
//     top: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//     max-width: 660px;
//     transform: translateX(-50%);

//     .gs-title {
//       font-size: 54px;
//       margin: 0 0 24px 0;
//     }
//     .gs-desc {
//       font-size: 20px;
//       line-height: 1.2;
//       max-width: 500px;
//     }
//   }
// }
.home-container {
  overflow: hidden;

  .home-container-body {
    width: 100%;
    margin: 10px auto;
    max-width: 1280px;

    .campaign-list {
      display: flex;
      flex-wrap: wrap;
    }
    .landing-page-section {
      display: flex;
      align-items: center;
      background-image: linear-gradient(60deg, #40fdcb, #40fdcb 7%, #24ee2c);
      position: relative;
      height: 650px;
      margin-top: 10px;

      &:before {
        content: "";
        display: block;
        width: 100%;
        background-image: url("https://cdn.gogoro.com/resources/images/landing-page/station-gn@2x.png?v2");
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        background-size: contain;
        background-position: 90% 0;
        background-repeat: no-repeat;
      }

      .landing-page-article {
        max-width: 378px;
        text-align: left;
        position: relative;
        z-index: 1;
        left: 100px;

        .landing-page-article-slogan {
          opacity: 0.7;
          margin: 0 0 46px 0;
        }
        .landing-page-article-header {
          color: #000;
          margin: 0 0 20px 0;
        }
        .landing-page-article-body {
          margin: 0 0 32px 0;
        }
        .landing-page-article-footer {
          > a {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .media-section {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .simple-introduction-container {
        width: calc(100% / 2 - 5px);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    .eeyo-section {
      padding: 60px 0 0 0;
      height: 620px;
      overflow: hidden;
      position: relative;
      background-color: #f2f2f2;
      margin-top: 10px;

      > h1 {
        font-size: 42px;
        margin: 0 0 20px 0;
      }
      > p {
        max-width: 464px;
        margin: 0 auto;
      }
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 36px 0 40px 0;
      }
      > img {
        width: 100%;
        max-width: 900px;
        position: absolute;
        bottom: -130px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .quotes-section {
      .quotes-section-article {
        background-color: #fff;
        margin-top: 10px;
        padding: var(--spacing-xxl-6) 0 var(--spacing-xxl-2);

        q {
          font-size: 36px;
          color: #323237;
        }
        p {
          color: #b9bcbf;
        }
      }
      .quotes-tabs {
        background-color: #e6e6e6;
        display: flex;
        justify-content: center;

        > li {
          position: relative;
          cursor: pointer;
          padding: 0 var(--spacing-m);
          opacity: 0.3;

          &.active {
            opacity: 1;

            &::before {
              content: "";
              display: block;
              position: absolute;
              left: 50%;
              top: 0;
              margin-left: -10px;
              border-width: 15px 10px;
              border-color: #fff transparent transparent transparent;
              border-style: solid;
            }
          }
          > span {
            padding: 25px 0 15px;
          }
        }
      }
    }
    .impact-section {
      background-color: #fff;
      padding: var(--spacing-xxl-6) 0 var(--spacing-xxl-2);

      .carousel-list-container {
        &.active {
          .carousel-list-impact-img-container {
            animation: fadeIn 2s forwards;
          }
          .carousel-list-impact-article {
            animation: slideIn 1s forwards;
          }
        }
        .carousel-list-impact {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: left;

          .carousel-list-impact-img-container {
            margin: 0 36px;
            width: 200px;
            height: 278px;
            display: flex;
            justify-content: center;
            background-position: center;
            background-repeat: no-repeat;
          }
          .carousel-list-impact-article {
            > h2 {
              font-weight: normal;
              font-size: 42px;

              + span {
                margin: var(--spacing-s) 0;
                display: inline-block;
              }
            }
            > p {
              font-size: 20px;
              margin: 0;
              max-width: 450px;
            }
          }
        }
      }
      .slick-dot {
        > span {
          border: 2px solid #f1f3f3;
          background-color: #f1f3f3;

          &.active {
            border: 2px solid #00d7ff;
            background-color: fff;
          }
        }
      }
    }
  }
  .home-container-footer {
    background-color: #323237;
    padding: 40px 40px 0;

    .home-container-footer-article {
      display: flex;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
      padding-bottom: 50px;

      .community-container {
        width: 200px;
        text-align: left;

        > a {
          display: inline-block;
          margin-bottom: 60px;
        }
        ul {
          li {
            margin-bottom: var(--spacing-l);
            a {
              color: #b9bcbf;
              display: flex;
              align-items: center;

              > img {
                margin-right: 10px;
              }
            }
          }
        }
      }
      .footer-menu-container {
        display: flex;
        width: calc(100% - 200px);
        padding-left: 100px;

        .menu-section {
          color: #fff;
          width: calc(100% / 4 - 20px);
          text-align: left;

          > h5 {
            color: #737d82;
            font-weight: normal;
            margin-bottom: var(--spacing-m);
          }
          li {
            a {
              display: inline-block;
              margin-bottom: var(--spacing-xs);
              font-size: 14px;

              &:hover {
                text-decoration: underline;
                color: #b9bcbf;
              }
            }
          }
        }
      }
    }
    .copyright-container {
      color: #888;
      font-size: 12px;
      display: flex;
      align-items: center;
      padding: var(--spacing-m);
      a {
        display: inline-block;
        margin-left: 30px;

        &:hover {
          color: #b9bcbf;
          text-decoration: underline;
        }
      }
      .zone-select-container {
        position: relative;
        margin-left: auto;

        &::before {
          content: "";
          width: 20px;
          height: 20px;
          display: block;
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQ0NC44MTkgNDQ0LjgxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjgxOSA0NDQuODE5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQzNC4yNTIsMTE0LjIwM2wtMjEuNDA5LTIxLjQxNmMtNy40MTktNy4wNC0xNi4wODQtMTAuNTYxLTI1Ljk3NS0xMC41NjFjLTEwLjA5NSwwLTE4LjY1NywzLjUyMS0yNS43LDEwLjU2MSAgIEwyMjIuNDEsMjMxLjU0OUw4My42NTMsOTIuNzkxYy03LjA0Mi03LjA0LTE1LjYwNi0xMC41NjEtMjUuNjk3LTEwLjU2MWMtOS44OTYsMC0xOC41NTksMy41MjEtMjUuOTc5LDEwLjU2MWwtMjEuMTI4LDIxLjQxNiAgIEMzLjYxNSwxMjEuNDM2LDAsMTMwLjA5OSwwLDE0MC4xODhjMCwxMC4yNzcsMy42MTksMTguODQyLDEwLjg0OCwyNS42OTNsMTg1Ljg2NCwxODUuODY1YzYuODU1LDcuMjMsMTUuNDE2LDEwLjg0OCwyNS42OTcsMTAuODQ4ICAgYzEwLjA4OCwwLDE4Ljc1LTMuNjE3LDI1Ljk3Ny0xMC44NDhsMTg1Ljg2NS0xODUuODY1YzcuMDQzLTcuMDQ0LDEwLjU2Ny0xNS42MDgsMTAuNTY3LTI1LjY5MyAgIEM0NDQuODE5LDEzMC4yODcsNDQxLjI5NSwxMjEuNjI5LDQzNC4yNTIsMTE0LjIwM3oiIGZpbGw9IiM3MzdkODIiLz4KPC9nPgo8L3N2Zz4K)
            100%/10px no-repeat;
          position: absolute;
          z-index: 2;
          right: 4px;
          top: -2px;
          pointer-events: none;
        }
        select {
          background-color: #323237;
          outline: none;
          border: none;
          color: #fff;
        }
      }
    }
  }
}
</style>
