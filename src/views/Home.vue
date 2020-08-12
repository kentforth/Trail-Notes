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

    <!--ADVENTURE-->
    <div class="adventure">
      <div class="container">
        <h2>START YOUR NEXT ADVENTURE</h2>
        <p>We provide a comprehensive guide to over 90 locations and</p>
        <p>add at least 1 new location each month</p>

        <hr class="line" />
        <h2>SUMMER SPECIAL</h2>

        <div class="price" @click="showForm">
          <p>Click to join</p>
          <span>$</span>
          <strong>19.99</strong>
          <span>/First Year</span>
          <p>$9.99 Annual Renewal</p>
        </div>

        <modal name="my-first-modal" :width="690" height="auto">
          <div class="modal">
            <div class="name">
              <div class="first-name">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" />
              </div>
              <div class="last-name">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" />
              </div>
            </div>

            <div class="email">
              <label for="email">Your Email</label>
              <input type="email" id="email" />
            </div>

            <div class="email">
              <label for="confirmEmail">Confirm Your Email</label>
              <input type="email" id="confirmEmail" />
            </div>

            <div class="password">
              <label for="password">Your Password</label>
              <input type="password" id="password" />
            </div>

            <div class="describe">
              <label for="interests">Describe Your Photography Interest</label>
              <div id="interests">
                <div class="interests-item">
                  <input
                    type="radio"
                    id="enthusiast"
                    name="interest"
                    value="enthusiast"
                  />
                  <span>Outdoor Emthusiast</span>
                </div>

                <div class="interests-item">
                  <input
                    type="radio"
                    id="beginner"
                    name="interest"
                    value="beginner"
                  />
                  <span>Beginner</span>
                </div>

                <div class="interests-item">
                  <input
                    type="radio"
                    id="intermediate"
                    name="interest"
                    value="intermediate"
                  />
                  <span>Intermediate</span>
                </div>

                <div class="interests-item">
                  <input
                    type="radio"
                    id="amateur"
                    name="interest"
                    value="amateur"
                  />
                  <span>Serious Amateur</span>
                </div>

                <div class="interests-item">
                  <input
                    type="radio"
                    id="professional"
                    name="interest"
                    value="amateur"
                  />
                  <span>Professional</span>
                </div>
              </div>
              <button class="btn-signUp" type="submit">SIGN UP</button>
            </div>
          </div>
        </modal>
      </div>
    </div>

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
    Footer
  },
  methods: {
    showForm() {
      this.$modal.show("my-first-modal");
    },
    data() {
      return {};
    }
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
  padding: 1.3em 0 0 0;
}

.line {
  color: var(--active) !important;
  width: 100%;
  height: 0;
  border: 1px solid var(--active);
  margin: 2.5em 0;
}

.price {
  width: 50%;
  margin: 2em auto;
  border: 1px solid var(--active);
  padding: 1em 0;
  transition: all 0.1s linear;
}

.price:hover {
  background-color: var(--active);
  cursor: pointer;
}

.price:hover > p {
  color: var(--primary);
}

.price:hover > strong {
  color: var(--primary);
}

.price p {
  text-transform: uppercase;
  padding: 0;
  margin-bottom: 1em;
  font-size: 1rem;
}
.price strong {
  font-size: 4rem;
  font-family: "Helvetica", sans-serif;
  color: var(--active);
}

.price > span {
  position: absolute;
  transform: translateX(-25px);
  font-size: 2.3rem;
  font-weight: 600;
  color: var(--active);
}

.price span:nth-child(4) {
  font-size: 1rem;
  transform: translate(0, 3em);
}

.price p:last-child {
  font-size: 1.5rem;
  margin-top: 1em;
  margin-bottom: 0;
  letter-spacing: 0;
  text-transform: initial;
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
#interests {
  margin-top: 1em;
}

.interests-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5em;
}

.interests-item input {
  margin: 0;
}

.interests-item span {
  margin-left: 7px;
}

.btn-signUp {
  background-color: var(--active);
  cursor: pointer;
  outline: none;
  border: none;
  width: 100%;
  padding: 1em 2em;
  margin-top: 1.5em;
  transition: all 0.1s linear;
}

.btn-signUp:hover {
  background-color: var(--primary);
  color: var(--active);
}

/*MEDIA QUERIES*/
@media screen and (max-width: 1200px) {
  .container {
    max-width: 90%;
  }
}
</style>
