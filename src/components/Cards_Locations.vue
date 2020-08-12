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
        <router-link to="/dead-horse-point"
          >View Dead Horse Point →</router-link
        >
      </div>
    </div>

    <div class="card-item">
      <div class="card-image">
        <img src="../assets/images/image - 003.jpg" alt="image canyon" />
      </div>
      <div class="card-text">
        <h3>PALOUSE FALLS</h3>
        <p>
          The iconic Palouse Falls is considered to be the official waterfall of
          Washington State.
        </p>
        <router-link to="/dead-horse-point">View Palouse Falls →</router-link>
      </div>
    </div>

    <div class="card-item">
      <div class="card-image">
        <img src="../assets/images/image - 004.jpg" alt="image canyon" />
      </div>
      <div class="card-text">
        <h3>DALLAS DIVIDE</h3>
        <p>
          The Dallas Divide is one of the great of American vistas and will
          simply take your breath away.
        </p>
        <router-link to="/dead-horse-point">View Dallas Divide →</router-link>
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
}

.card-image img {
  max-width: 100%;
  vertical-align: top;
}

.card-text {
  padding: 6%;
  background-color: #000;
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
}

.card-text a {
  color: var(--active);
  font-size: 0.8rem;
  text-transform: uppercase;
}


</style>
