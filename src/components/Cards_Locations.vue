<template>
  <div class="cards" data-aos="fade-up" data-aos-easing="ease-out">
    <div class="card-item">
      <div class="card-image">
        <img src="../assets/images/image - 002.jpg" alt="image canyon" />
      </div>
      <div class="card-text">
        <h3>DEAD HORSE POINT</h3>
        <p style="margin-bottom: 0; padding-bottom: 0.3em">
          Dead Horse Point - with its iconic gooseneck of the Colorado River is
          a must see when visiting the Moab, UT area.
        </p>
        <router-link to="/locations/dead-horse" @click.native="scrollToTop"
          >View Dead Horse Point →</router-link
        >
      </div>
    </div>

    <div class="card-item">
      <div class="card-image">
        <img
          src="../assets/images/Locations/false_kiva.jpg"
          alt="image canyon"
        />
      </div>
      <div class="card-text">
        <h3>Falls Kiva</h3>
        <p>
          The False Kiva is one of the most intriguing locations for landscape
          photographers in the American Southwest
        </p>
        <router-link to="/locations/false-kiva" @click.native="scrollToTop"
          >View False Kiva →</router-link
        >
      </div>
    </div>

    <div class="card-item">
      <div class="card-image">
        <img
          src="../assets/images/Locations/mesa_arch.jpg"
          alt="image canyon"
        />
      </div>
      <div class="card-text mesa">
        <h3>Mesa Arch</h3>
        <p>
          The Mesa Arch is the “crown jewel” of the Canyonlands National Park.
        </p>
        <router-link to="/locations/mesa-arch" @click.native="scrollToTop"
          >View Mesa Arch →</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Cards_Locations",
  created() {
    AOS.init({
      duration: 500
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  text-align: left;
  align-content: center;
  padding-bottom: 10%;
}

.card-image {
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
}

.card-image img {
  max-width: 100%;
  vertical-align: top;
  width: 100%;
  height: 100%;
}

.card-text {
  padding: 6%;
  background-color: #000;
  height: 250px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-text h3 {
  font-family: "Proxima Nova Extrabold", sans-serif;
  color: #fff;
  margin: 0;
}

.card-text p {
  text-align: left;
  font-family: "Freight Sans Pro", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #b0b0b0;
  padding: 1em 0;
  margin: 0;
}

.card-text a {
  color: var(--active);
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 20px;
}

.mesa {
  padding-bottom: 1.7em !important;
}

.mesa a {
  padding-top: 2em;
}
</style>
