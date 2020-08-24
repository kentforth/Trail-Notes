<template>
  <div class="directions">
    <div class="title">
      <img src="../assets/images/primary_features/directions.png" alt="" />
      <h2>Directions</h2>
    </div>

    <img :src="image4" alt="" class="image" />
    <img :src="image5" alt="" class="image" />
  </div>
</template>

<script>
export default {
  name: "Directions",
  data() {
    return {
      image4: require("../assets/images/Preview_Locations/archangel-falls/archangel - 4.jpg"),
      image5: require("../assets/images/Preview_Locations/archangel-falls/archangel - 5.jpg")
    };
  },
  mounted() {
    let currentRoute = this.$router.currentRoute.fullPath;

    switch (currentRoute) {
      case "/locations/archangel-falls":
        this.image4 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 5.jpg");
        break;
      case "/locations/dead-horse":
        this.image4 = require("../assets/images/Preview_Locations/dead-horse/dead-horse - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/dead-horse/dead-horse - 5.jpg");
        break;
      case "/locations/factory-butte":
        this.image4 = require("../assets/images/Preview_Locations/factory-butte/factory butte - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/factory-butte/factory butte - 5.jpg");
        break;
      case "/locations/bright-angel-point":
        this.image4 = require("../assets/images/Preview_Locations/angel-point/angel point - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/angel-point/angel point - 5.jpg");
        break;
      case "/locations/white-pocket":
        this.image4 = require("../assets/images/Preview_Locations/white-pocket/white-pocket  - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/white-pocket/white-pocket  - 5.jpg");
        break;
      case "/locations/desert-view":
        this.image4 = require("../assets/images/Preview_Locations/desert-view/desert view - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/desert-view/desert view - 5.jpg");
        break;
      case "/locations/bisti-badlands":
        this.image4 = require("../assets/images/Preview_Locations/bisti-badlands/bisti - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/bisti-badlands/bisti - 5.jpg");
        break;
      case "/locations/bonsai-rock":
        this.image4 = require("../assets/images/Preview_Locations/bonsai-rock/bonsai - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/bonsai-rock/bonsai - 5.jpg");
        break;
      case "/locations/fallen-roof-ruin":
        this.image4 = require("../assets/images/Preview_Locations/fallen-roof-ruin/fallen roof - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/fallen-roof-ruin/fallen roof - 5.jpg");
        break;
      case "/locations/monument-valley":
        this.image4 = require("../assets/images/Preview_Locations/monument-valley/monument - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/monument-valley/monument - 5.jpg");
        break;
      case "/locations/glacier-point":
        this.image4 = require("../assets/images/Preview_Locations/glacier-point/glacier - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/glacier-point/glacier - 5.jpg");
        break;
      case "/locations/twilight-near-mather-point":
        this.image4 = require("../assets/images/Preview_Locations/twilight-near/twilight - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/twilight-near/twilight - 5.jpg");
        break;
      case "/locations/mesa-arch":
        this.image4 = require("../assets/images/Preview_Locations/mesa-arch/mesa - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/mesa-arch/mesa - 5.jpg");
        break;
      case "/locations/false-kiva":
        this.image4 = require("../assets/images/Preview_Locations/false-kiva/false - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/false-kiva/false - 5.jpg");
        break;
      case "/locations/joshua-trees-lee-flat":
        this.image4 = require("../assets/images/Preview_Locations/joshua-trees/joshua - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/joshua-trees/joshua - 5.jpg");
        break;
      case "/locations/owen-river-sunrise":
        this.image4 = require("../assets/images/Preview_Locations/owen-river/owen - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/owen-river/owen - 5.jpg");
        break;
      case "/locations/narrows":
        this.image4 = require("../assets/images/Preview_Locations/narrows/narrows - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/narrows/narrows - 5.jpg");
        break;
      case "/locations/balanced-rock":
        this.image4 = require("../assets/images/Preview_Locations/balanced-rock/balanced - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/balanced-rock/balanced - 5.jpg");
        break;
      case "/locations/upper-antelope-canyon":
        this.image4 = require("../assets/images/Preview_Locations/upper-antelope/upper - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/upper-antelope/upper - 5.jpg");
        break;
      default:
        this.image4 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 4.jpg");
        this.image5 = require("../assets/images/Preview_Locations/archangel-falls/archangel - 5.jpg");
        break;
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

/*MEDIA QUERIES*/
@media screen and (max-width: 600px) {
  .title img {
    width: 40px;
    height: 40px;
  }

  .title h2 {
    font-size: 1.7rem;
  }
}

@media screen and (max-width: 480px) {
  .title img {
    width: 30px;
    height: 30px;
  }

  .title h2 {
    font-size: 1.3rem;
  }
}

@media screen and (max-width: 320px) {
  .title h2 {
    font-size: 1.2rem;
  }

  .title img {
    width: 25px;
    height: 25px;
  }
}
</style>
