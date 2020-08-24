<template>
  <div class="difficulty">
    <div class="container">
      <div class="title">
        <img src="../assets/images/primary_features/trail.png" alt="" />
        <h2>
          Trail Difficulty - <strong>{{ difficulty }}</strong>
        </h2>
      </div>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import {
  archangel,
  deadHorse,
  factoryButte,
  angelPoint,
  whitePocket,
  vistaPoint,
  overlook,
  desertView,
  yosemite,
  firefall,
  grandFalls,
  bisti,
  bonsai,
  fallenRoof,
  monument,
  glacier,
  twilight,
  mesa,
  falseKiva,
  joshua,
  owen,
  narrows,
  balancedRock,
  upper
} from "../../txt/difficulty/difficulties";

export default {
  name: "Difficulty",
  data() {
    return {
      difficulty: "Hard",
      text: archangel
    };
  },
  mounted() {
    let currentRoute = this.$router.currentRoute.fullPath;

    switch (currentRoute) {
      case "/locations/archangel-falls":
        this.difficulty = "Hard";
        this.text = archangel;
        break;
      case "/locations/dead-horse":
        this.difficulty = "Easy To Dangerous";
        this.text = deadHorse;
        break;
      case "/locations/factory-butte":
        this.difficulty = "EASY TO MODERATE";
        this.text = factoryButte;
        break;
      case "/locations/bright-angel-point":
        this.difficulty = "MODERATE";
        this.text = angelPoint;
        break;
      case "/locations/white-pocket":
        this.difficulty = "HARD to EXTREME";
        this.text = whitePocket;
        break;
      case "/locations/vista-point":
        this.difficulty = "EASY";
        this.text = vistaPoint;
        break;
      case "/locations/overlook":
        this.difficulty = "MODERATE";
        this.text = overlook;
        break;
      case "/locations/desert-view":
        this.difficulty = "EASY";
        this.text = desertView;
        break;
      case "/locations/yosemite-falls-moonbow":
        this.difficulty = "EASY";
        this.text = yosemite;
        break;
      case "/locations/firefall":
        this.difficulty = "EASY TO MODERATE";
        this.text = firefall;
        break;
      case "/locations/grand-falls":
        this.difficulty = "EASY TO MODERATE";
        this.text = grandFalls;
        break;
      case "/locations/bisti-badlands":
        this.difficulty = "MODERATE";
        this.text = bisti;
        break;
      case "/locations/bonsai-rock":
        this.difficulty = "MODERATE";
        this.text = bonsai;
        break;
      case "/locations/fallen-roof-ruin":
        this.difficulty = "MODERATE";
        this.text = fallenRoof;
        break;
      case "/locations/monument-valley":
        this.difficulty = "MODERATE";
        this.text = monument;
        break;
      case "/locations/glacier-point":
        this.difficulty = "Easy";
        this.text = glacier;
        break;
      case "/locations/twilight-near-mather-point":
        this.difficulty = "Easy";
        this.text = twilight;
        break;
      case "/locations/mesa-arch":
        this.difficulty = "MODERATE";
        this.text = mesa;
        break;
      case "/locations/false-kiva":
        this.difficulty = "Difficult";
        this.text = falseKiva;
        break;
      case "/locations/joshua-trees-lee-flat":
        this.difficulty = "Moderate";
        this.text = joshua;
        break;
      case "/locations/owen-river-sunrise":
        this.difficulty = "Easy";
        this.text = owen;
        break;
      case "/locations/narrows":
        this.difficulty = "Difficult";
        this.text = narrows;
        break;
      case "/locations/balanced-rock":
        this.difficulty = "Easy";
        this.text = balancedRock;
        break;
      case "/locations/upper-antelope-canyon":
        this.difficulty = "Moderate";
        this.text = upper;
        break;
      default:
        this.difficulty = "Hard";
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 100%;
}
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

.title strong {
  text-transform: uppercase;
}

p {
  font-family: "Freight Sans Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.01em;
  color: rgba(20, 20, 20, 0.7);
  line-height: 1.8em;
  white-space: pre-wrap;
}

@media screen and (max-width: 600px) {
  .title img {
    width: 40px;
    height: 40px;
  }

  .title h2 {
    font-size: 1.7rem;
  }

  p {
    font-size: 0.8rem;
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

  @media screen and (max-width: 320px) {
    .title h2 {
      font-size: 1.2rem;
    }

    .title img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
