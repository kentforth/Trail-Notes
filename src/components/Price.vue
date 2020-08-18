<template>
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
</template>

<script>
import VModal from "vue-js-modal/dist/index.nocss.js";
import "vue-js-modal/dist/styles.css";
import Vue from "vue";

Vue.use(VModal, {
  adaptive: true
});
export default {
  name: "Price",
  methods: {
    showForm() {
      this.$modal.show("my-first-modal");
    }
  }
};
</script>

<style scoped>
.adventure {
  background-color: var(--primary);
  padding: 8.7em 0;
}

.adventure h2 {
  margin-top: 0;
  padding: 0;
  color: #fff;
  font-family: "Proxima Nova Bold", sans-serif;
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
  margin-right: 0.5em;
}

.price > span {
  position: absolute;
  transform: translateX(-0.7em);
  font-size: 2.3rem;
  font-weight: 600;
  color: var(--active);
}

.price span:nth-child(4) {
  font-size: 1rem;
  transform: translate(-2em, 3em);
}

.price:hover > strong {
  color: var(--primary);
}

.price:hover > span,
strong {
  color: var(--primary);
}

.price:hover p {
  color: var(--primary);
}

.price p:last-child {
  font-size: 1.5rem;
  margin-top: 1em;
  margin-bottom: 0;
  letter-spacing: 0;
  text-transform: initial;
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

@media screen and (max-width: 480px) {
  .price {
    margin: 2.5em auto 0;
    width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .price strong {
    font-size: 3rem;
  }

  .price > span {
    font-size: 1.7rem;
  }

  .price span:nth-child(4) {
    transform: translate(-20px, 2.5em);
  }
}
</style>
