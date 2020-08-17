<template>
  <div class="locations">
    <Navigation />

    <!--GUIDE-->
    <div class="guide">
      <h1>
        AMERICAN SOUTHWEST PHOTOGRAPHY GUIDE
      </h1>
      <p>
        The American Southwest offers some of the best photographic
        opportunities in the county. With hundreds of unique locations including
        sweeping panoramas, mesmerizing slot canyons, amazing sandstone
        formations and the Grandest of Canyons.
      </p>
    </div>

    <!--PICTURES-->
    <div class="gallery container">
      <div
        class="gallery-item"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        v-bind:style="{ 'background-image': 'url(' + image + ')' }"
      >
        <h2 class="title">
          {{ titles[imageIndex].name }}
        </h2>
        <div class="overlay"></div>

        <router-link :to="{ path: links[imageIndex] }" class="link-preview"
          >Preview Location</router-link
        >
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default {
  name: "Locations",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      images: [
        require("../assets/images/Locations/falls.jpg"),
        require("../assets/images/Locations/dead_horse.jpg"),
        require("../assets/images/Locations/butte.jpg"),
        require("../assets/images/Locations/angel_point.jpg"),
        require("../assets/images/Locations/white_pocket.jpg"),
        require("../assets/images/Locations/vista_point.jpg"),
        require("../assets/images/Locations/overlook.jpg"),
        require("../assets/images/Locations/desert_view.jpg"),
        require("../assets/images/Locations/moonbow.jpg"),
        require("../assets/images/Locations/firefall.jpg"),
        require("../assets/images/Locations/grand_falls.jpg"),
        require("../assets/images/Locations/bisti_badlands.jpg"),
        require("../assets/images/Locations/bonsai_rock.jpg"),
        require("../assets/images/Locations/fallen_roof.jpg"),
        require("../assets/images/Locations/monument_valley.jpg"),
        require("../assets/images/Locations/glacier_point.jpg"),
        require("../assets/images/Locations/mather_point.jpg"),
        require("../assets/images/Locations/mesa_arch.jpg"),
        require("../assets/images/Locations/false_kiva.jpg"),
        require("../assets/images/Locations/lee_flat.jpg"),
        require("../assets/images/Locations/riva_sunrise.jpg"),
        require("../assets/images/Locations/narrows.jpg"),
        require("../assets/images/Locations/crack.jpg"),
        require("../assets/images/Locations/canyon.jpg")
      ],
      titles: [
        { name: "Archangel Falls" },
        { name: "Dead Horse Point(Free Location)" },
        { name: "Factory Butte" },
        { name: "Bright Angel Point" },
        { name: "White Pocket" },
        { name: "Vista Point" },
        { name: "The Overlook" },
        { name: "Desert View" },
        { name: "Yosemite Falls Moonbow" },
        { name: "Firefall" },
        { name: "Grand (Chocolate) Falls" },
        { name: "Bisti Badlands" },
        { name: "Bonsai Rocks" },
        { name: "Fallen Roof Ruin" },
        { name: "Monument Valley" },
        { name: "Glacier Point" },
        { name: "Twilight Near Mather Point" },
        { name: "Mesa Arch" },
        { name: "False Kiva" },
        { name: "Joshua Tree at Lee Flat" },
        { name: "Owen River Sunrise" },
        { name: "The Narrows" },
        { name: "The Crack" },
        { name: "Upper Antelope Canyon" }
      ],
      links: [
        "/locations/archangel-falls",
        "/locations/dead-horse",
        "/locations/factory-butte",
        "/locations/bright-angel-point",
        "/locations/white-pocket",
        "/locations/vista-point",
        "/locations/overlook",
        "/locations/desert-view",
        "/locations/yosemite-falls-moonbow",
        "/locations/firefall",
        "/locations/grand-falls",
        "/locations/bisti-badlands",
        "/locations/bonsai-rocks",
        "/locations/fallen-roof-ruin",
        "/locations/monument-valley",
        "/locations/glacier-point",
        "/locations/twilight-near-mather-point",
        "/locations/mesa-arch",
        "/locations/false-kiva",
        "/locations/joshua-lee-flat",
        "/locations/owen-river-sunrise",
        "/locations/narrows",
        "/locations/crack",
        "/locations/upper-antelope-canyon"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.guide {
  padding-top: 4em;
  margin: 0 auto;
  max-width: 50%;
}
.guide h1 {
  color: #191919;
  text-align: center;
  font-family: "Proxima Nova Regular", sans-serif;
  font-size: 3rem;
}

.guide p {
  font-family: "Proxima Nova Regular", sans-serif;
  font-size: 2rem;
  text-align: center;
  line-height: 1.3em;
}

.gallery {
  padding: 4em 0 0 0;
  display: grid;
  grid-gap: 2em;
  margin-bottom: 4em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.gallery-item {
  background-size: cover;
  width: 100%;
  height: 17em;
  background-position: center center;
  background-repeat: no-repeat;
  padding-bottom: 4em;
  position: relative;
}

.overlay {
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  z-index: 1;
  padding: 0;
  margin: 0;
}

.gallery-item:hover > .overlay {
  background-color: rgba(0, 0, 0, 0.6);
}

.gallery-item:hover > .link-preview {
  opacity: 1;
  transform: translateY(-1.5em);
}

.gallery-item:hover > .title {
  transform: translateY(-0.5em);
}

.title {
  color: #fff;
  font-size: 1.3rem;
  position: relative;
  top: 73%;
  z-index: 2;
  transition: all 0.4s ease-in-out;
  margin: 1.7em 0 0 0;
}

.link-preview {
  z-index: 999;
  color: var(--primary);
  background-color: #fff;
  padding: 1em 2em;
  position: absolute;
  top: 84%;
  left: 30%;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-family: "Proxima Nova Bold", sans-serif;
  opacity: 0;
  transition: 0.4s ease-in-out;
}

.link-preview:hover {
  background-color: var(--active);
}

/*MEDIA QUERIES*/
@media screen and (max-width: 1200px) {
  .guide {
    max-width: 70%;
  }
}

@media screen and (max-width: 1024px) {
  .link-preview {
    left: 37%;
  }
}

@media screen and (max-width: 768px) {
  .guide h1 {
    font-size: 2rem;
    margin-top: 2em;
  }

  .guide p {
    margin-bottom: 0;
  }

  .link-preview {
    left: 32%;
  }
}

@media screen and (max-width: 600px) {
  .guide p {
    font-size: 1.5rem;
  }

  .link-preview {
    left: 26.5%;
  }
}

@media screen and (max-width: 480px) {
  .guide p {
    font-size: 1.3rem;
  }

  .title {
    font-size: 1rem;
  }
}

@media screen and (max-width: 393px) {
  .container {
    max-width: 90%;
  }

  .title {
    font-size: 0.9rem;
    text-align: center;
    left: -3%;
  }
  .guide h1 {
    font-size: 1.6rem;
  }

  .guide p {
    font-size: 1.2rem;
  }

  .link-preview {
    left: 23%;
  }
}
@media screen and (max-width: 320px) {
  .guide h1 {
    font-size: 1.3rem;
  }

  .guide p {
    font-size: 1rem;
  }

  .title {
    font-size: 0.8rem;
    left: -8%;
  }

  .link-preview {
    font-size: 0.5rem;
    left: 22%;
  }
}
</style>
