<template>
  <div id="nav">
    <div class="container">
      <div class="navigation-left">
        <router-link to="/locations" @click.native="scrollToTop"
          >Locations</router-link
        >
        <router-link to="/pricing" @click.native="scrollToTop"
          >Pricing</router-link
        >
      </div>
      <div class="navigation-center">
        <router-link to="/" @click.native="scrollToTop"
          >Photographers Trail Notes</router-link
        >
      </div>
      <div class="navigation-right">
        <router-link to="/about" @click.native="scrollToTop">About</router-link>
        <router-link to="/contact" @click.native="scrollToTop"
          >Contact</router-link
        >
      </div>
      <div class="nav-hamburger" @click="showMenu">
        <div class="nav-hamburger-item"></div>
        <div class="nav-hamburger-item"></div>
        <div class="nav-hamburger-item"></div>
      </div>
    </div>

    <transition>
      <div class="adaptive-menu" v-if="showSideBar">
        <button @click="hideMenu" class="btn-close">X</button>
        <div class="adaptive-links-container">
          <router-link
            class="adaptive-link"
            to="/locations"
            @click.native="scrollToTop"
            >Locations</router-link
          >
          <router-link
            class="adaptive-link"
            to="/pricing"
            @click.native="scrollToTop"
            >Pricing</router-link
          >
          <router-link
            class="adaptive-link"
            to="/members"
            @click.native="scrollToTop"
            >Members</router-link
          >
          <router-link
            class="adaptive-link"
            to="/about"
            @click.native="scrollToTop"
            >About</router-link
          >
          <router-link
            class="adaptive-link"
            to="/contact"
            @click.native="scrollToTop"
            >Contact</router-link
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    showMenu() {
      this.showSideBar = true;
    },
    hideMenu() {
      this.showSideBar = false;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  data() {
    return {
      showSideBar: false
    };
  }
};
</script>

<style scoped>
#nav {
  background-color: var(--primary);
  margin: 0;
  padding: 2.5em 0;
}

#nav a {
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 4em;
  font-size: 0.8rem;
  color: var(--links);
  font-family: var(--font-links);
  letter-spacing: 0.12em;
}

#nav a:hover {
  color: var(--active);
}

#nav a.router-link-exact-active {
  color: var(--active);
}

.navigation-center a {
  font-family: "Proxima Nova Extrabold", sans-serif !important;
  line-height: 1em;
  color: #fff;
  font-size: 1.3rem !important;
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
}

.nav-hamburger-item {
  width: 35px;
  height: 3px;
  background-color: var(--active);
  margin: 6px 0;
  display: none;
}

.adaptive-menu {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: var(--primary);
  overflow: hidden;
  top: 0;
  animation-name: slideIn;
  animation-timing-function: ease-out;
  z-index: 999;
  padding: 5em;
}

.adaptive-links-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.adaptive-link {
  font-size: 3rem !important;
  padding-bottom: 1em;
}
.v-enter-active {
  animation: slideIn 0.5s;
}
.v-leave-active {
  animation: slideOut 0.5s;
}

@keyframes slideIn {
  0% {
    right: -100%;
  }

  100% {
    right: 0;
  }
}

@keyframes slideOut {
  0% {
    right: 0;
  }

  100% {
    right: -100%;
  }
}

/*MEDIA QUERIES*/
@media screen and (max-width: 1200px) {
  #nav {
    padding: 1.5em 0;
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
  }
  .navigation-left {
    display: none;
  }

  .navigation-right {
    display: none;
  }

  .navigation-center a {
    font-size: 1rem;
    margin: 0;
  }

  .nav-hamburger {
    margin-right: 2em;
  }

  .nav-hamburger-item {
    width: 2.5em;
    display: block;
  }

  .nav-hamburger:hover {
    cursor: pointer;
  }

  #nav a {
    margin: 0;
  }

  .navigation-center a {
    color: #fff !important;
    font-size: 1.6rem !important;
  }

  .btn-close {
    font-size: 1.7rem;
    padding: 0.3em 0.8em;
    background-color: var(--active);
    outline: none;
    border: none;
    cursor: pointer;
    font-family: "Proxima Nova Regular", sans-serif;
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media screen and (max-width: 480px) {
  .navigation-center a {
    font-size: 1rem !important;
  }
}

@media screen and (max-width: 480px) {
  .nav-hamburger {
    margin-right: 3em;
  }
}

@media screen and (max-width: 393px) {
  .nav-hamburger {
    margin-right: 0;
  }
}

@media screen and (max-width: 320px) {

  .nav-hamburger-item {
    width: 25px;
  }

  .navigation-center a {
    font-size: 0.8rem !important;
  }

  .adaptive-menu {
    padding: 0;
  }

  .adaptive-link {
    font-size: 2rem !important;
  }

  .btn-close {
    font-size: 1.3rem;
  }
}
</style>
