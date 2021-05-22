<template>
  <div class="home-container">
    <Header
      :logoImgSrc="headerData.logoImgSrc"
      :headerList="headerData.headerList"
      :scrollAnimateOption="headerData.scrollAnimateOption"
    ></Header>
    <VueSlickCarousel
      :arrows="false"
      :dots="true"
      :adaptiveHeight="true"
      :autoplay="true"
    >
      <template v-for="(listItem, listIndex) in slickCarouselData.list">
        <img
          :src="listItem.imgSrc"
          :key="'slick-carousel-' + listIndex"
          v-if="slickCarouselData.windowWidth > 768"
        />
        <img
          :src="listItem.mobileImgSrc"
          :key="'slick-carousel-' + listIndex"
          v-else
        />
      </template>
    </VueSlickCarousel>
    <!-- <Carousel v-bind:carouselData="carouselData"></Carousel> -->
    <div class="home-container-body">
      <div class="block-section" id="news-block-section">
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
      <div class="parallax-section">
        <div class="parallax-section-article">
          <lottie
            v-parallax="-0.3"
            class="lottie-heart"
            :options="heartsDefaultOptions"
            :height="400"
            :width="400"
          />
          <img src="../assets/img/parallax1.jpg" v-parallax="0.6" />
        </div>
      </div>
      <div class="block-section" id="medical-block-section">
        <h1>醫療百科</h1>
        <div class="block-section-content">
          <div class="media-section">
            <SimpleIntroduction
              v-for="(listItem, listIndex) in introductionList"
              :key="'simple-introduction-' + listIndex"
              :introductionData="listItem"
            ></SimpleIntroduction>
          </div>
        </div>
      </div>
      <div class="parallax-section">
        <div class="parallax-section-article">
          <div v-parallax="0.7" class="parallax-article-block">
            <h1>全台第一間老人醫院2025誕生</h1>
            <ul>
              <li>智慧醫療輔助老人，精準個人化醫療</li>
              <li>人工智慧導入醫療，縮短醫療處置時間降風險</li>
              <li>結合智慧建築永續發展，預計2025年底前啟用</li>
              <li>跨領域合作，盼達到適切精準照護</li>
            </ul>
          </div>
          <img src="../assets/img/parallax2.jpg" v-parallax="0.6" />
        </div>
      </div>
      <div class="block-section" id="cancer-block-section">
        <h1>癌症知識</h1>
        <div class="block-section-content">
          <div
            class="column-article-section"
            v-for="(listItem, listIndex) in columnArticleData"
            :key="'column-article' + listIndex"
          >
            <div class="column-article">
              <p>
                {{ listItem.article }}
              </p>
            </div>
            <div class="column-img">
              <img :src="listItem.imgSrc" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-container-footer">
      <div class="home-container-footer-article">
        <div class="community-container">
          <a href="./"><img src="../assets/img/logo.png" /></a>
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
        <p>
          Copyright© 1999~2021 遠見天下文化出版股份有限公司. All rights
          reserved.
        </p>
        <!-- <a href="https://www.gogoro.com/privacy-policy/">Privacy Policy</a
        ><a href="https://www.gogoro.com/terms-of-use/">Terms of Use</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import Header from "../component/header";
// import Carousel from "../component/carousel";
import VerticalCard from "../component/vertical-card";
import SimpleIntroduction from "../component/simple-introduction";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import * as heartsJSON from "../assets/json/hearts.json";

import imgLogo from "../assets/img/logo.png";
import iconLine from "../assets/img/icon-line.svg";
import carousel1 from "../assets/img/carousel-health.jpg";
import carousel2 from "../assets/img/carousel-sport.jpg";
import mobileCarousel1 from "../assets/img/carousel-health-mobile.jpg";
import mobileCarousel2 from "../assets/img/carousel-sport-mobile.jpg";
import campaignList1 from "../assets/img/campaignList1.jpg";
import campaignList2 from "../assets/img/campaignList2.jpg";
import campaignList3 from "../assets/img/campaignList3.jpg";
import campaignList4 from "../assets/img/campaignList4.jpg";
import campaignList5 from "../assets/img/campaignList5.jpg";
import campaignList6 from "../assets/img/campaignList6.jpg";
import campaignList7 from "../assets/img/campaignList7.jpg";
import campaignList8 from "../assets/img/campaignList8.jpg";
import campaignList9 from "../assets/img/campaignList9.jpg";

export default {
  name: "Home",
  components: {
    Header,
    // Carousel,
    VerticalCard,
    SimpleIntroduction,
    VueSlickCarousel,
    Lottie,
  },
  mounted() {
    this.quotesTabsCarouselStart();
    window.addEventListener("resize", this.onResize);
  },
  data() {
    return {
      headerData: {
        logoImgSrc: imgLogo,
        scrollAnimateOption: {
          offset: -100,
          duration: 750,
        },
        headerList: [
          {
            text: "最新文章",
            link: {
              type: "absolute",
              href: "#news-block-section",
            },
            iconName: "flag",
          },
          {
            text: "醫療百科",
            link: {
              type: "absolute",
              href: "#medical-block-section",
            },
            iconName: "heartbeat",
          },
          {
            text: "癌症知識",
            link: {
              type: "absolute",
              href: "#cancer-block-section",
            },
            iconName: "book",
          },
          {
            text: "吃出健康",
            link: {
              type: "absolute",
            },
            iconName: "utensils",
          },
          {
            text: "運動減重",
            link: {
              type: "absolute",
            },
            iconName: "running",
          },
          {
            text: "樂活心靈",
            link: {
              type: "absolute",
            },
            iconName: "heart",
          },
          {
            text: "保養抗老",
            link: {
              type: "absolute",
            },
            iconName: "child",
          },
          {
            text: "品味生活",
            link: {
              type: "absolute",
            },
            iconName: "hands",
          },
          {
            text: "駐站作家",
            link: {
              type: "absolute",
            },
            iconName: "pen-nib",
          },
          {
            text: "主題企劃",
            link: {
              type: "absolute",
            },
            iconName: "clipboard",
          },
        ],
      },
      slickCarouselData: {
        windowWidth: window.screen.width,
        list: [
          {
            imgSrc: carousel1,
            mobileImgSrc: mobileCarousel1,
          },
          {
            imgSrc: carousel2,
            mobileImgSrc: mobileCarousel2,
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
          href: "javascript:void(0)",
          bgImgSrc: campaignList1,
          title: "無跪姿、床上也能做！7分鐘輕運動鍛鍊大腿肌力",
          description:
            "常常走路膝蓋痛，可以多練習大腿肌力。剛開始怕站著練、或跪著練，膝蓋又痛起來，你可以先…",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList2,
          title: "北市推「台版方艙醫院」，柯文哲：防快篩或PCR陽性民眾回流社區",
          description:
            "武漢肺炎本土疫情延燒，台北市長柯文哲今天指出，北市的疫情較嚴重，他成立「加強版專責防…",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList3,
          title: "免器材！廚房、浴室都行，在家也可以做的4招美身塑體操",
          description: "免器材！廚房、浴室都行，在家也可以做的4招美身塑體操",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList4,
          title: "集中檢疫所收住690名確診個案！加發血氧偵測儀，防病情生變",
          description:
            "武漢肺炎本土疫情嚴峻，指揮中心醫療應變組副組長王必勝今天表示，目前集中檢疫所共收住6…",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList5,
          title:
            "新增312例本土病例！陳時中：沒要進入「四級警戒」，勿以訛傳訛！",
          description:
            "台灣新冠疫情持續升溫！中央流行疫情指揮中心今（21）日公布國內新增312例本土病例，…",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList6,
          title: "高溫、停電、缺水…小心中暑！居家防疫3招預防室內熱傷害",
          description:
            "近幾日因為疫情已啟動學校停課不停學的措施，且許多企業提升居家辦公比率，宅在家成為時下…",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList7,
          title: "開車要戴口罩嗎？指揮中心：獨自一人可不戴",
          description:
            "全台疫情升至第3級警戒，外出須全程戴口罩，但開車「無罩」上路罰不罰掀熱議。指揮中心今…",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList8,
          title: "疫情升溫不敢去醫院？5/28前開放視訊看診、開藥，就醫免出門",
          description:
            "武漢肺炎本土疫情升溫，不少民眾不敢外出就醫。健保署今天宣布，全台指定醫療院所即日起至…",
        },
        {
          target: "_self",
          href: "javascript:void(0)",
          bgImgSrc: campaignList9,
          title: "外食風險高，使用外送平台要注意什麼？居家防疫4原則自保",
          description:
            "因應疫情升級，外出用餐因為要長時間取下口罩，讓風險性提高，也使得許多餐飲通路紛紛禁止…",
        },
      ],
      introductionList: [
        {
          title: "記性差、性格變！失智症警訊愛注意，小心這些危險因子助預防",
          text: "",
          isHTML: true,
          html: "提到失智症，大家最熟悉的是記憶力變差，然而失智症的表現可不只有記性差喔。高雄長庚醫院…",
          href: "javascript:void(0)",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://imgs.gvm.com.tw/upload/gallery/20200309/thumbnail_M_71483_01.jpg')",
          },
        },
        {
          title: "是認知症長者出現問題？還是照護者在製造問題？",
          text: "",
          isHTML: true,
          html: "有社區據點的照服員問到：認知症長者被家屬送來據點後，一直說要回家，該怎麼辦？有認知症…",
          href: "javascript:void(0)",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://imgs.gvm.com.tw/upload/gallery/20210501/thumbnail_M_78704_01.jpg')",
          },
        },
        {
          title: "失眠、晚上睡不夠？美研究：這年紀失智、早逝風險恐因此攀升",
          text: "",
          isHTML: true,
          html: "台灣目前已進入高齡化社會，但有許多長者飽受「睏袂去」的困擾。根據前些時候一項國內的調…",
          href: "javascript:void(0)",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://imgs.gvm.com.tw/upload/gallery/20210330/thumbnail_M_78709_01.jpg')",
          },
        },
        {
          title: "預防腦退化！醫生教你減輕大腦垃圾量，按下EQ重新整理鍵",
          text: "",
          isHTML: true,
          html: "「怨氣像雪球，隔天就會變大。」這是我很常跟病人說的一句話。雪球變大會怎樣？從修行的角…",
          href: "javascript:void(0)",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://imgs.gvm.com.tw/upload/gallery/20210305/thumbnail_M_77658_01.jpg')",
          },
        },
        {
          title: "小心智慧型手機失智症！30～64歲每千人就有一人發病",
          text: "",
          isHTML: true,
          html: "預防失智，你需要兩樣寶貝：「老朋友」和「新東西」。失智是怎麼回事？有很多疾病，都會使…",
          href: "javascript:void(0)",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://imgs.gvm.com.tw/upload/gallery/20210218/thumbnail_M_76583_01.jpg')",
          },
        },
        {
          title: "常忘記繳卡費或帳單？美研究：恐是失智症早期徵兆",
          text: "",
          isHTML: true,
          html: "失智症是一群疾病症狀的統稱，與記憶、思維能力減退相關。當中又以「阿茲海默症」最普遍，…",
          href: "javascript:void(0)",
          target: "_self",
          style: {
            height: "340px",
            backgroundImage:
              "url('https://imgs.gvm.com.tw/upload/gallery/20210121/thumbnail_M_77291_01.jpg')",
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
          href: "javascript:void(0)",
          imgSrc:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjQwODcyNiAyLjA0NzU0QzAgMi44NDk3IDAgMy44OTk4IDAgNlYxNEMwIDE2LjEwMDIgMCAxNy4xNTAzIDAuNDA4NzI2IDE3Ljk1MjVDMC43NjgyNTEgMTguNjU4MSAxLjM0MTkzIDE5LjIzMTcgMi4wNDc1NCAxOS41OTEzQzIuODQ5NyAyMCAzLjg5OTggMjAgNiAyMEg4LjQ3ODQ1VjEyLjk5NDlINS44NzVWOS45NjcyOUg4LjQ3ODQ1VjcuNzM5NzFDOC40Nzg0NSA1LjE1Njk1IDEwLjA1NzggMy43NTAwNSAxMi4zNjEyIDMuNzUwMDVDMTMuMTM3NCAzLjc0ODM2IDEzLjkxMzIgMy43ODc0OSAxNC42ODUzIDMuODY3MjlWNi41NjcyOUgxMy4wOTkxQzExLjg0NCA2LjU2NzI5IDExLjU5OTEgNy4xNjA0IDExLjU5OTEgOC4wMzYyNlY5Ljk2Mzg1SDE0LjU5OTFMMTQuMjA5NSAxMi45OTE0SDExLjU4MTlWMjBIMTRDMTYuMTAwMiAyMCAxNy4xNTAzIDIwIDE3Ljk1MjUgMTkuNTkxM0MxOC42NTgxIDE5LjIzMTcgMTkuMjMxNyAxOC42NTgxIDE5LjU5MTMgMTcuOTUyNUMyMCAxNy4xNTAzIDIwIDE2LjEwMDIgMjAgMTRWNkMyMCAzLjg5OTggMjAgMi44NDk3IDE5LjU5MTMgMi4wNDc1NEMxOS4yMzE3IDEuMzQxOTMgMTguNjU4MSAwLjc2ODI1MSAxNy45NTI1IDAuNDA4NzI2QzE3LjE1MDMgMCAxNi4xMDAyIDAgMTQgMEg2QzMuODk5OCAwIDIuODQ5NyAwIDIuMDQ3NTQgMC40MDg3MjZDMS4zNDE5MyAwLjc2ODI1MSAwLjc2ODI1MSAxLjM0MTkzIDAuNDA4NzI2IDIuMDQ3NTRaIiBmaWxsPSIjQjlCQ0JGIi8+Cjwvc3ZnPgo=",
        },
        {
          name: "Line",
          href: "javascript:void(0)",
          imgSrc: iconLine,
        },
      ],
      columnArticleData: [
        {
          article:
            "得知罹癌時所受到的衝擊，會因你視其有多嚴重而有大小之分。舉例來說，認為「差不多該有人接我到那個世界了」的人得知罹癌時，情緒也幾乎不會有所起伏吧。另一方面，根本沒想過自己會罹癌的年輕人，應該會大受打擊。",
          imgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210508/thumbnail_M_79219_01.jpg",
        },
        {
          article:
            "親友一旦罹癌，你可能很難接近他們，離開他們似乎比較容易。你生病時，會很驚訝身邊的誰來來去去。老實說，我以前真的不覺得自己會遇到這種事，我想不出來有哪個家人或朋友會不在我身邊。我大錯特錯！",
          imgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210423/thumbnail_M_78976_01.jpg",
        },
        {
          article:
            "一位78歲男性，一年半前被診斷出慢性淋巴細胞性白血病（小淋巴球性淋巴瘤）第二期，經過化學治療及類固醇治療後痊癒。日前電腦斷層追蹤時，發現縱膈腔及兩側肺門淋巴結腫大，肝臟也有許多腫塊，懷疑淋巴癌再發；在接受氟18去氧葡萄糖的正子／電腦斷層造影，以及大腸鏡及切片，確定為大腸癌，及大腸癌肝臟轉移，得以及早接受治療。",
          imgSrc:
            "https://imgs.gvm.com.tw/upload/gallery/20210406/thumbnail_M_78650_01.jpg",
        },
      ],
      heartsDefaultOptions: { animationData: heartsJSON.default },
      footerMenu: [
        {
          title: " 醫療百科",
          list: [
            {
              href: "javascript:void(0)",
              text: "疾病",
            },
            {
              href: "javascript:void(0)",
              text: "醫療",
            },
            {
              href: "javascript:void(0)",
              text: "長照",
            },
            {
              href: "javascript:void(0)",
              text: "失智",
            },
          ],
        },
        {
          title: "癌症知識",
          list: [
            {
              href: "javascript:void(0)",
              text: "防癌",
            },
            {
              href: "javascript:void(0)",
              text: "抗癌",
            },
          ],
        },
        {
          title: "吃出健康",
          list: [
            {
              href: "javascript:void(0)",
              text: "養生",
            },
            {
              href: "javascript:void(0)",
              text: "飲食",
            },
            {
              href: "javascript:void(0)",
              text: "營養",
            },
            {
              href: "javascript:void(0)",
              text: "食安",
            },
            {
              href: "javascript:void(0)",
              text: "食譜",
            },
          ],
        },
        {
          title: "運動減重",
          list: [
            {
              href: "javascript:void(0)",
              text: "健身",
            },
            {
              href: "javascript:void(0)",
              text: "瘦身",
            },
            {
              href: "javascript:void(0)",
              text: "運動傷害",
            },
          ],
        },
        {
          title: "樂活心靈",
          list: [
            {
              href: "javascript:void(0)",
              text: "兩性",
            },
            {
              href: "javascript:void(0)",
              text: "壓力",
            },
            {
              href: "javascript:void(0)",
              text: "人際",
            },
            {
              href: "javascript:void(0)",
              text: "紓壓",
            },
            {
              href: "javascript:void(0)",
              text: "睡眠",
            },
          ],
        },
        {
          title: "保養抗老",
          list: [
            {
              href: "javascript:void(0)",
              text: "醫美",
            },
            {
              href: "javascript:void(0)",
              text: "美容",
            },
            {
              href: "javascript:void(0)",
              text: "抗老",
            },
          ],
        },
        {
          title: "品味生活",
          list: [
            {
              href: "javascript:void(0)",
              text: "居家",
            },
          ],
        },
        {
          title: "駐站作家",
          list: [
            {
              href: "javascript:void(0)",
              text: "百大顧問團",
            },
            {
              href: "javascript:void(0)",
              text: "駐站達人",
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
    onResize() {
      this.slickCarouselData.windowWidth = window.innerWidth;
    },
  },
  watch: {
    detectSlickCarouselWidth(newWidth) {
      this.slickCarouselData.windowWidth = newWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 36px;
  }
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
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 10px;
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
    .parallax-section {
      height: 100vh;
      overflow: hidden;
      margin: 10px 0;

      .parallax-section-article {
        height: 100%;
        overflow: hidden;
        position: relative;

        .lottie-heart {
          position: absolute;
          z-index: 999;
          right: 0;
          bottom: 25%;
        }
        .parallax-article-block {
          position: absolute;
          z-index: 999;
          right: 30px;
          max-width: 35%;

          h1 {
            margin-bottom: 20px;
          }
          ul {
            font-size: 20px;

            li {
              line-height: 2rem;
            }
          }
        }
        > img {
          width: 100%;
        }
      }
    }
    .column-article-section {
      display: flex;
      align-items: center;

      &:nth-of-type(even) {
        flex-direction: row-reverse;
      }
      .column-article,
      .column-img {
        width: 50%;
      }
      .column-article {
        > p {
          font-size: 22px;
          line-height: 2.5rem;
          max-width: 90%;
          margin: 0 auto;
        }
      }
      .column-img {
        > img {
          width: 100%;
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
      max-width: 1280px;
      margin: 0 auto;

      .community-container {
        width: 200px;
        text-align: left;

        > a {
          display: inline-block;
          margin-bottom: 60px;

          img {
            max-width: 100px;
            filter: grayscale(100%);
          }
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
      justify-content: center;

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

@media screen and (max-width: 1280px) {
  .home-container {
    .home-container-body {
      max-width: 95%;

      .parallax-section {
        height: 56vh;

        .parallax-section-article {
          .parallax-article-block {
            max-width: 50%;

            h1 {
              font-size: 32px;
            }
            ul {
              font-size: 16px;
            }
          }
          > img {
            width: 100%;
          }
        }
      }
      .column-article-section {
        .column-article {
          > p {
            font-size: 18px;
            line-height: 1.5rem;
          }
        }
      }
    }
    .home-container-footer {
      .home-container-footer-article {
        flex-wrap: wrap;

        .community-container {
          width: 100%;
          text-align: left;

          > a {
            margin-bottom: 20px;

            img {
              max-width: 100px;
              filter: grayscale(100%);
            }
          }
          ul {
            display: flex;

            li {
              margin-left: 20px;

              &:first-of-type {
                margin-left: 0;
              }
            }
          }
        }
        .footer-menu-container {
          margin-top: 10px;
          width: 100%;
          flex-wrap: wrap;

          .menu-section {
            width: calc(100% / 5);
            margin-bottom: 20px;

            > h5 {
              color: #737d82;
              font-weight: normal;
              margin-bottom: var(--spacing-m);
            }
            ul {
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
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .home-container {
    .home-container-body {
      .column-article-section {
        flex-wrap: wrap;
        margin-bottom: 40px;

        &:nth-of-type(odd),
        &:nth-of-type(even) {
          flex-direction: column-reverse;
        }
        .column-article,
        .column-img {
          width: 100%;
        }
        .column-article {
          > p {
            max-width: 100%;
            line-height: 2rem;
            padding: 20px 0;
          }
        }
        .column-img {
          > img {
            width: 100%;
          }
        }
      }
      .parallax-section {
        height: 500px;

        .parallax-section-article {
          .parallax-article-block {
            h1 {
              font-size: 24px;
            }
            ul {
              display: none;
            }
          }
          > img {
            width: 150%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .home-container {
    .home-container-footer {
      .home-container-footer-article {
        .footer-menu-container {
          .menu-section {
            width: 100%;

            ul {
              li {
                display: inline-flex;
                width: calc(100% / 4);
              }
            }
          }
        }
      }
    }
  }
}
</style>
