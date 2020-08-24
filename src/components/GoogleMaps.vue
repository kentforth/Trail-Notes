<template>
  <div class="maps">
    <div class="title">
      <img src="../assets/images/primary_features/earth.png" alt="" />
      <h2>Google Maps Birds-Eye-View</h2>
    </div>

    <img :src="image2" alt="" class="image" />
    <img :src="image3" alt="" class="image" />
  </div>
</template>

<script>
export default {
  name: "GoogleMaps",
  data() {
    return {
      image2: require("../assets/images/Preview_Locations/archangel-falls/archangel - 2.jpg"),
      image3: require("../assets/images/Preview_Locations/archangel-falls/archangel - 3.jpg")
    };
  },
  mounted() {
    let currentRoute = this.$router.currentRoute.fullPath;

    switch (currentRoute) {
      case "/locations/archangel-falls":
        this.image2 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 3.jpg");
        break;
      case "/locations/dead-horse":
        this.image2 = require("../assets/images/Preview_Locations/dead-horse/dead-horse - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/dead-horse/dead-horse - 3.jpg");
        break;
      case "/locations/factory-butte":
        this.image2 = require("../assets/images/Preview_Locations/factory-butte/factory butte - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/factory-butte/factory butte - 3.jpg");
        break;
      case "/locations/bright-angel-point":
        this.image2 = require("../assets/images/Preview_Locations/angel-point/angel point - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/angel-point/angel point - 3.jpg");
        break;
      case "/locations/white-pocket":
        this.image2 = require("../assets/images/Preview_Locations/white-pocket/white-pocket  - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/white-pocket/white-pocket  - 3.jpg");
        break;
      case "/locations/vista-point":
        this.image2 = require("../assets/images/Preview_Locations/vista point/vista point - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/vista point/vista point - 3.jpg");
        break;
      case "/locations/overlook":
        this.image2 = require("../assets/images/Preview_Locations/overlook/overlook - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/overlook/overlook - 3.jpg");
        break;
      case "/locations/desert-view":
        this.image2 = require("../assets/images/Preview_Locations/desert-view/desert view - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/desert-view/desert view - 3.jpg");
        break;
      case "/locations/yosemite-falls-moonbow":
        this.image2 = require("../assets/images/Preview_Locations/yosemite/yosemite - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/yosemite/yosemite - 3.jpg");
        break;
      case "/locations/firefall":
        this.image2 = require("../assets/images/Preview_Locations/firefall/firefall - 2.jpg");
        this.image3 = "";
        break;
      case "/locations/grand-falls":
        this.image2 = require("../assets/images/Preview_Locations/grand-falls/grand falls - 2.jpg");
        this.image3 = "";
        break;
      case "/locations/bisti-badlands":
        this.image2 = require("../assets/images/Preview_Locations/bisti-badlands/bisti - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/bisti-badlands/bisti - 3.jpg");
        break;
      case "/locations/bonsai-rock":
        this.image2 = require("../assets/images/Preview_Locations/bonsai-rock/bonsai - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/bonsai-rock/bonsai - 3.jpg");
        break;
      case "/locations/fallen-roof-ruin":
        this.image2 = require("../assets/images/Preview_Locations/fallen-roof-ruin/fallen roof - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/fallen-roof-ruin/fallen roof - 3.jpg");
        break;
      case "/locations/monument-valley":
        this.image2 = require("../assets/images/Preview_Locations/monument-valley/monument - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/monument-valley/monument - 3.jpg");
        break;
      case "/locations/glacier-point":
        this.image2 = require("../assets/images/Preview_Locations/glacier-point/glacier - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/glacier-point/glacier - 3.jpg");
        break;
      case "/locations/twilight-near-mather-point":
        this.image2 = require("../assets/images/Preview_Locations/twilight-near/twilight - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/twilight-near/twilight - 3.jpg");
        break;
      case "/locations/mesa-arch":
        this.image2 = require("../assets/images/Preview_Locations/mesa-arch/mesa - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/mesa-arch/mesa - 3.jpg");
        break;
      case "/locations/false-kiva":
        this.image2 = require("../assets/images/Preview_Locations/false-kiva/false - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/false-kiva/false - 3.jpg");
        break;
      case "/locations/joshua-trees-lee-flat":
        this.image2 = require("../assets/images/Preview_Locations/joshua-trees/joshua - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/joshua-trees/joshua - 3.jpg");
        break;
      case "/locations/owen-river-sunrise":
        this.image2 = require("../assets/images/Preview_Locations/owen-river/owen - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/owen-river/owen  - 3.jpg");
        break;
      case "/locations/narrows":
        this.image2 = require("../assets/images/Preview_Locations/narrows/narrows - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/narrows/narrows - 3.jpg");
        break;
      case "/locations/balanced-rock":
        this.image2 = require("../assets/images/Preview_Locations/balanced-rock/balanced - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/balanced-rock/balanced - 3.jpg");
        break;
      case "/locations/upper-antelope-canyon":
        this.image2 = require("../assets/images/Preview_Locations/upper-antelope/upper - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/upper-antelope/upper - 3.jpg");
        break;
      default:
        this.image2 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 2.jpg");
        this.image3 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 3.jpg");
    }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  justify-items: center;
  align-items: center;
  text-align: left;
  margin-bottom: 2em;
}

.title img {
  width: 60px;
  height: 60px;
}

.title h2 {
  font-size: 2rem;
  margin: 0 0 0 0.5em;
  font-family: "Proxima Nova Regular", sans-serif;
  font-weight: 300;
  letter-spacing: 0;
}

.image {
  width: 100%;
  margin-bottom: 1.5em;
}
</style>
