<template>
  <div class="contact">
    <Navigation />
    <div class="contact-content">
      <div class="overlay">
        <div class="container">
          <form action="" class="form" @submit.prevent="submit">
            <label for="name">Your Name</label>
            <input type="text" id="name" />
            <label for="email">Your Email</label>
            <input type="email" id="email" />
            <label for="subject">Subject</label>
            <input type="text" id="subject" />
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5"></textarea>
            <button type="submit" class="btn-submit" @click="showNotification">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";

import Swal from "sweetalert2";

export default {
  name: "Contact",
  components: { Navigation },
  methods: {
    showNotification() {
      Swal.fire({
        title: "Your message has been sent",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
};
</script>

<style scoped>
.contact-content {
  width: 100%;
  background-image: url("../assets/images/contact.jpg");
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 6.25em);
}

.overlay {
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin: 0 auto;
  padding-top: 4em;
}

label {
  font-size: 1.5rem;
  color: #fff;
  font-family: "Proxima Nova Bold", sans-serif;
  margin-bottom: 0.4em;
  text-align: left;
}

input {
  margin-bottom: 1em;
  font-size: 2.5rem;
  font-family: "Futura", sans-serif;
  padding: 5px 15px;
  color: var(--primary);
}

textarea {
  font-size: 1.6rem;
  font-family: "Proxima Nova Regular", sans-serif;
  padding: 5px 10px;
  margin-bottom: 1.6em;
}

input,
textarea {
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  outline: none;
  border: 2px solid #dddddd;
}

input:focus,
textarea:focus {
  box-shadow: 0 0 7px var(--active);
  border: 2px solid var(--active);
}

.btn-submit {
  font-size: 1.7rem;
  padding: 5px 10px;
  font-family: "Proxima Nova Bold", sans-serif;
  cursor: pointer;
  background-color: var(--active);
  border: none;
  transition: background-color 0.1s linear;
  width: 50%;
  margin: 0 auto;
}

.btn-submit:active,
.btn-submit:focus {
  outline: none;
  border: none;
}

.btn-submit:hover {
  background-color: #ca7a55;
}
</style>
