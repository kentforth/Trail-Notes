<template>
  <div class="location">
    <Navigation />
    <div class="header-image" data-aos="flip-up" data-aos-easing="ease-out">
      <img :src="mainImage" alt="" />
      <div class="header-title">
        <h1>{{ mainTitle }}</h1>
        <p>{{ mainText }}</p>
      </div>
    </div>

    <!--BODY TITLE-->
    <div class="container">
      <div class="body-text">
        <h3>{{ bodyTitle }}</h3>
        <p>{{ bodyText }}</p>
        <hr class="line" />
      </div>

      <!--DIFFICULTY-->
      <Difficulty />

      <hr class="line" />

      <!--GOOGLE MAPS-->
      <GoogleMaps />

      <hr class="line" v-if="!isImageEmpty" />

      <!--DIRECTIONS-->
      <Directions v-if="!isImageEmpty" />
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Difficulty from "./Difficulty";
import GoogleMaps from "./GoogleMaps";
import Directions from "./Directions";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  bodyTitleArchangel,
  bodyTitleDeadHorse,
  bodyTitleFactoryButte,
  bodyTitleAngelPoint,
  bodyTitleWhitePocket,
  bodyTitleVistaPoint,
  bodyTitleOverlook,
  bodyTitleDesertView,
  bodyTitleYosemite,
  bodyTitleFirefall,
  bodyTitleGrandFalls,
  bodyTittleBisti,
  bodyTitleBonsai,
  bodyTitleFallenRoof,
  bodyTitleMonument,
  bodyTitleGlacier,
  bodyTitleTwilight,
  bodyTitleMesa,
  bodyTitleFalseKiva,
  bodyTitleJoshua,
  bodyTitleOwen,
  bodyTitleNarrows,
  bodyTitleBalanced,
  bodyTitleUpper
} from "../../txt/preview_locations/bodyTitles";

import {
  bodyTextArchangel,
  bodyTextDeadHorse,
  bodyTextFactoryButte,
  bodyTextAngelPoint,
  bodyTextWhitePocket,
  bodyTextVistaPoint,
  bodyTextOverlook,
  bodyTextDesertView,
  bodyTextYosemite,
  bodyTextFirefall,
  bodyTextGrandFalls,
  bodyTextBisti,
  bodyTextBonsai,
  bodyTextFallenRoof,
  bodyTextMonument,
  bodyTextGlacier,
  bodyTextTwilight,
  bodyTextMesa,
  bodyTextFalseKiva,
  bodyTextJoshua,
  bodyTextOwen,
  bodyTextNarrows,
  bodyTextBalanced,
  bodyTextUpper
} from "../../txt/preview_locations/bodtTexts";

export default {
  name: "PreviewLocation",
  components: { Directions, GoogleMaps, Difficulty, Navigation },
  created() {
    AOS.init({
      duration: 700
    });
  },
  mounted() {
    let currentRoute = this.$router.currentRoute.fullPath;

    switch (currentRoute) {
      case "/locations/archangel-falls":
        this.mainImage = require("../assets/images/Preview_Locations/archangel-falls/archangel - 1.jpg");
        this.mainTitle = "Archangel Falls";
        this.mainText = "Zion National Park, UT";
        this.bodyTitle = bodyTitleArchangel;
        this.bodyText = bodyTextArchangel;
        break;
      case "/locations/dead-horse":
        this.mainImage = require("../assets/images/Preview_Locations/dead-horse/dead-horse - 1.jpg");
        this.mainTitle = "Dead Horse Point";
        this.mainText = "Dead Horse Point State Park, UT";
        this.bodyTitle = bodyTitleDeadHorse;
        this.bodyText = bodyTextDeadHorse;
        break;
      case "/locations/factory-butte":
        this.mainImage = require("../assets/images/Preview_Locations/factory-butte/factory-butte - 1.jpg");
        this.mainTitle = "Factory Butte";
        this.mainText = "Near Hanksville, UT";
        this.bodyTitle = bodyTitleFactoryButte;
        this.bodyText = bodyTextFactoryButte;
        break;
      case "/locations/bright-angel-point":
        this.mainImage = require("../assets/images/Preview_Locations/angel-point/angel point - 1.jpg");
        this.mainTitle = "BRIGHT ANGEL POINT";
        this.mainText = "North Rim, Grand Canyon, AZ";
        this.bodyTitle = bodyTitleAngelPoint;
        this.bodyText = bodyTextAngelPoint;
        break;
      case "/locations/white-pocket":
        this.mainImage = require("../assets/images/Preview_Locations/white-pocket/white-pocket  - 1.jpg");
        this.mainTitle = "White Pocket";
        this.mainText = "Vermilion Cliffs, AZ";
        this.bodyTitle = bodyTitleWhitePocket;
        this.bodyText = bodyTextWhitePocket;
        break;
      case "/locations/vista-point":
        this.mainImage = require("../assets/images/Preview_Locations/vista point/vista point - 1.jpg");
        this.mainTitle = "Vista Point";
        this.mainText = "Near Mammoth Lakes, CA";
        this.bodyTitle = bodyTitleVistaPoint;
        this.bodyText = bodyTextVistaPoint;
        this.isImageEmpty = true;
        break;
      case "/locations/overlook":
        this.mainImage = require("../assets/images/Preview_Locations/overlook/overlook - 1.jpg");
        this.mainTitle = "The Overlook";
        this.mainText = "Near Hanksville, UT";
        this.bodyTitle = bodyTitleOverlook;
        this.bodyText = bodyTextOverlook;
        this.isImageEmpty = true;
        break;
      case "/locations/desert-view":
        this.mainImage = require("../assets/images/Preview_Locations/desert-view/desert view - 1.jpg");
        this.mainTitle = "Desert View (Navajo Point)";
        this.mainText = "South Rim Grand Canyon, AZ";
        this.bodyTitle = bodyTitleDesertView;
        this.bodyText = bodyTextDesertView;
        break;
      case "/locations/yosemite-falls-moonbow":
        this.mainImage = require("../assets/images/Preview_Locations/yosemite/yosemite - 1.jpg");
        this.mainTitle = "Yosemite Falls Moonbow";
        this.mainText = "Yosemite NP, CA";
        this.bodyTitle = bodyTitleYosemite;
        this.bodyText = bodyTextYosemite;
        this.isImageEmpty = true;
        break;
      case "/locations/firefall":
        this.mainImage = require("../assets/images/Preview_Locations/firefall/firefall - 1.jpg");
        this.mainTitle = "Firefall";
        this.mainText = "Horsetail Falls, Yosemite National Park, CA";
        this.bodyTitle = bodyTitleFirefall;
        this.bodyText = bodyTextFirefall;
        this.isImageEmpty = true;
        break;
      case "/locations/grand-falls":
        this.mainImage = require("../assets/images/Preview_Locations/grand-falls/grand falls - 1.jpg");
        this.mainTitle = "Grand Falls";
        this.mainText = "Painted Desert, AZ";
        this.bodyTitle = bodyTitleGrandFalls;
        this.bodyText = bodyTextGrandFalls;
        this.isImageEmpty = true;
        break;
      case "/locations/bisti-badlands":
        this.mainImage = require("../assets/images/Preview_Locations/bisti-badlands/bisti - 1.jpg");
        this.mainTitle = "BISTI BADLANDS (WINGS)";
        this.mainText = "Bisti Badlands, Northwest New Mexico";
        this.bodyTitle = bodyTittleBisti;
        this.bodyText = bodyTextBisti;
        break;
      case "/locations/bonsai-rock":
        this.mainImage = require("../assets/images/Preview_Locations/bonsai-rock/bonsai - 1.jpg");
        this.mainTitle = "Bonsai Rock";
        this.mainText = "Lake Tahoe, NV";
        this.bodyTitle = bodyTitleBonsai;
        this.bodyText = bodyTextBonsai;
        break;
      case "/locations/fallen-roof-ruin":
        this.mainImage = require("../assets/images/Preview_Locations/fallen-roof-ruin/fallen roof - 1.jpg");
        this.mainTitle = "FALLEN ROOF RUIN";
        this.mainText = "Bears Ears National Monument, UT";
        this.bodyTitle = bodyTitleFallenRoof;
        this.bodyText = bodyTextFallenRoof;
        break;
      case "/locations/monument-valley":
        this.mainImage = require("../assets/images/Preview_Locations/monument-valley/monument - 1.jpg");
        this.mainTitle = "MONUMENT VALLEY";
        this.mainText = "Utah/Arizona Border";
        this.bodyTitle = bodyTitleMonument;
        this.bodyText = bodyTextMonument;
        break;
      case "/locations/glacier-point":
        this.mainImage = require("../assets/images/Preview_Locations/glacier-point/glacier - 1.jpg");
        this.mainTitle = "GLACIER POINT";
        this.mainText = "Yosemite National Park, CA";
        this.bodyTitle = bodyTitleGlacier;
        this.bodyText = bodyTextGlacier;
        break;
      case "/locations/twilight-near-mather-point":
        this.mainImage = require("../assets/images/Preview_Locations/twilight-near/twilight - 1.jpg");
        this.mainTitle = "TWILIGHT NEAR MATHER POINT";
        this.mainText = "South Rim - Grand Canyon, AZ";
        this.bodyTitle = bodyTitleTwilight;
        this.bodyText = bodyTextTwilight;
        break;
      case "/locations/mesa-arch":
        this.mainImage = require("../assets/images/Preview_Locations/mesa-arch/mesa - 1.jpg");
        this.mainTitle = "MESA ARCH";
        this.mainText = "Canyonlands National Park, UT";
        this.bodyTitle = bodyTitleMesa;
        this.bodyText = bodyTextMesa;
        break;
      case "/locations/false-kiva":
        this.mainImage = require("../assets/images/Preview_Locations/false-kiva/false - 1.jpg");
        this.mainTitle = "The False Kiva";
        this.mainText = "Caynonlands National Park, UT";
        this.bodyTitle = bodyTitleFalseKiva;
        this.bodyText = bodyTextFalseKiva;
        break;
      case "/locations/joshua-trees-lee-flat":
        this.mainImage = require("../assets/images/Preview_Locations/joshua-trees/joshua - 1.jpg");
        this.mainTitle = "Joshua Tree At Lee Flat";
        this.mainText = "Death Valley, CA";
        this.bodyTitle = bodyTitleJoshua;
        this.bodyText = bodyTextJoshua;
        break;
      case "/locations/owen-river-sunrise":
        this.mainImage = require("../assets/images/Preview_Locations/owen-river/owen - 1.jpg");
        this.mainTitle = "Owen River Sunrise";
        this.mainText = "Near Big Pine, CA";
        this.bodyTitle = bodyTitleOwen;
        this.bodyText = bodyTextOwen;
        break;
      case "/locations/narrows":
        this.mainImage = require("../assets/images/Preview_Locations/narrows/narrows - 1.jpg");
        this.mainTitle = "THE NARROWS";
        this.mainText = "Zion National Park, UT";
        this.bodyTitle = bodyTitleNarrows;
        this.bodyText = bodyTextNarrows;
        break;
      case "/locations/balanced-rock":
        this.mainImage = require("../assets/images/Preview_Locations/balanced-rock/balanced - 1.jpg");
        this.mainTitle = "Balanced Rock";
        this.mainText = "Arches National Park, UT";
        this.bodyTitle = bodyTitleBalanced;
        this.bodyText = bodyTextBalanced;
        break;
      case "/locations/upper-antelope-canyon":
        this.mainImage = require("../assets/images/Preview_Locations/upper-antelope/upper - 1.jpg");
        this.mainTitle = "Upper Antelope Canyon";
        this.mainText = "Near Page, AZ";
        this.bodyTitle = bodyTitleUpper;
        this.bodyText = bodyTextUpper;
        break;
      default:
        this.mainTitle = "Archangel Falls";
    }
  },
  data() {
    return {
      mainImage: require("../assets/images/Preview_Locations/archangel-falls/archangel - 1.jpg"),
      mainTitle: "Archangel Falls",
      mainText: "Zion National Park, UT",
      bodyTitle: bodyTitleArchangel,
      bodyText: bodyTextArchangel,
      isImageEmpty: false
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 60%;
  padding-bottom: 2em;
}

.header-image {
  max-width: 80%;
  margin: 5em auto 0;
  position: relative;
}

.header-image img {
  width: 80%;
}

.header-title {
  background-color: var(--primary);
  bottom: -2em;
  left: 6em;
  width: 30%;
  position: absolute;
  padding: 2em;
}

.header-title h1 {
  color: #fff;
  font-size: 1.5rem;
  font-family: "Proxima Nova Bold", sans-serif;
  text-align: left;
  margin: 0;
  text-transform: uppercase;
}

.header-title p {
  color: #b0b0b0;
  text-align: left;
  font-size: 1rem;
  font-family: "Freight Sans Pro", sans-serif;
}

.body-text {
  margin-top: 6em;
}

.body-text h3 {
  color: var(--primary);
  font-family: "Proxima Nova", sans-serif;
  font-weight: 300;
  font-size: 1.7rem;
  text-align: left;
  letter-spacing: 0;
  white-space: pre-line;
}

.body-text p {
  font-family: "Freight Sans Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.01em;
  color: rgba(20, 20, 20, 0.7);
  line-height: 1.8em;
  white-space: pre-line;
}

.line {
  border-top: solid 1px rgba(128, 128, 128, 0.3);
  margin: 3em 0;
}
</style>
