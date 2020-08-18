<template>
  <div class="home">
    <Navigation />
    <!--      CANYON-->
    <div class="canyon">
      <div class="container">
        <h1 class="canyon-text">
          LET US TAKE YOU TO SOME OF AMERICAS BEST PHOTOGRAPHY LOCATIONS
        </h1>
      </div>
    </div>

    <!--SHOW WAY-->
    <div class="show-way">
      <div class="container">
        <p>
          Trail Notes is a resource for landscape photographers and outdoor
          enthusiasts. For each of our 90+ locations, we provide a comprehensive
          guide to help you find, understand and shoot some of the best
          landscape photography locations in the country.
        </p>
        <h1>LET US SHOW YOU THE WAY</h1>
      </div>
    </div>

    <!--DETAILS-->
    <div class="details">
      <div class="container">
        <strong>
          For each location, we provide GPS coordinates, detailed directions,
          trail difficulty, best time of day and best time of year to shoot,
          lenses to use, equipment needed, direction of shot, special nuances,
          weather, required permits, nearby lodging and restaurants, and other
          tips based on our firsthand experience.
        </strong>
        <h2>KNOW THE DETAILS BEFORE YOU GO</h2>
      </div>
    </div>

    <!--PRICE-->
    <Price />

    <!--TRAIL NOTES-->
    <div class="trail-notes">
      <div class="container">
        <h2>USE OUR TRAIL NOTES</h2>
        <p>
          To get the perfect shot, it takes time to research; planning and
          mapping - time you would rather be spending in the field. We’ve done
          the research, and we’ve been to the locations and offer a one-stop
          resource with the tools and information needed for put you in the
          right place to capture your next great shot.
        </p>
      </div>
    </div>

    <!--LOCATIONS-->
    <div class="locations">
      <div class="container">
        <h2>Sample Locations</h2>
        <Cards_Locations />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Cards_Locations from "../components/Cards_Locations";
import Footer from "../components/Footer";
import Price from "../components/Price";

//Modal window
import VModal from "vue-js-modal/dist/index.nocss.js";
import "vue-js-modal/dist/styles.css";
import Vue from "vue";

Vue.use(VModal, {
  adaptive: true
});

export default {
  name: "Home",
  components: {
    Navigation,
    Cards_Locations,
    Footer,
    Price
  },
  methods: {
    showForm() {
      this.$modal.show("my-first-modal");
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.canyon {
  width: 100%;
  background-image: url("../assets/images/image - 001.jpg");
  background-size: cover;
  height: calc(100vh - 6.25em);
}

.canyon-text {
  margin: 0;
  max-width: 80%;
  font-family: "Proxima Nova", sans-serif;
  color: #fff;
  text-align: left;
  font-size: 3.6vw;
  position: absolute;
  top: 50%;
}

.show-way {
  background-color: var(--primary);
}

.show-way p {
  padding: 5em 0 0 0;
  color: #fff;
  margin-top: 0;
  font-family: "Proxima Nova Regular", sans-serif;
  font-size: 2rem;
}

.show-way h1,
.details h2,
.adventure h2 {
  color: #fff;
  font-family: "Proxima Nova Regular", sans-serif !important;
  padding-bottom: 2em;
  font-size: 3.6vw;
  margin-bottom: 0;
}

.details h2,
.details strong {
  color: var(--primary);
}

.details {
  padding-top: 5em;
  font-family: "Proxima Nova Regular", sans-serif;
}

.details strong {
  font-size: 1.6rem;
}

.adventure {
  background-color: var(--primary);
  padding: 8.7em 0;
}

.adventure h2 {
  margin-top: 0;
  padding: 0;
}

.adventure p {
  padding: 0;
  color: #fff;
  font-size: 1.5rem;
}

.line {
  color: var(--active) !important;
  width: 100%;
  height: 0;
  border: 1px solid var(--active);
  margin: 2.5em 0;
}

.trail-notes h2 {
  font-family: "Proxima Nova Regular", sans-serif;
  font-size: 3rem;
  margin: 1.5em 0;
}

.trail-notes p {
  color: var(--primary);
  letter-spacing: 0;
  font-size: 1.8rem;
  padding: 0 0 0.5em 0;
  font-weight: 600;
}

.locations {
  background-color: var(--primary);
}

.locations h2 {
  font-size: 4.4vw;
  text-transform: uppercase;
  font-family: "Proxima Nova Extrabold", sans-serif;
  color: #fff;
  padding: 1em 0;
  margin-bottom: 0;
}

.modal {
  padding: 2em;
}

.name {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.modal input {
  padding: 0.7em 1.5em;
  font-size: 1.2rem;
}

.modal input:focus {
  border: 1px solid var(--active);
  outline: none;
}

.email {
  width: 100%;
}

input {
  margin: 0.6em 0 1.6em 0;
}

label {
  font-weight: 600;
}

label,
input {
  display: block;
  text-align: left;
}

.email input,
.password input {
  width: 100%;
}

/*MEDIA QUERIES*/
@media screen and (max-width: 1200px) {
  .container {
    max-width: 90%;
  }
}

@media screen and (max-width: 900px) {
  .show-way p {
    padding-top: 2em;
  }

  .adventure {
    padding-bottom: 5em;
  }
}

@media screen and (max-width: 600px) {
  .canyon-text {
    font-size: 2.5rem;
    top: 40%;
    left: 15%;
  }

  .adventure {
    padding-top: 3em;
  }
}

@media screen and (max-width: 480px) {
  .adventure {
    padding-bottom: 3em;
  }
}

@media screen and (max-width: 320px) {
  .container {
    max-width: 95%;
  }

  .canyon-text {
    font-size: 1.8rem;
  }
}
</style>
