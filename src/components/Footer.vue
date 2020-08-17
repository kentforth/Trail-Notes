<template>
  <div class="footer">
    <div class="container">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/locations">Locations</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/about">About</router-link>

        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-color: var(--primary);
  padding: 3em 0;
  margin: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 70%;
  margin: 0 auto;
}

.nav a {
  color: var(--active);
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;
}

.nav a:hover {
  color: rgba(255, 175, 138, 0.5);
}

/*MEDIA QUERIES*/
@media screen and (max-width: 900px) {
  .nav {
    max-width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .footer {
    padding: 2em 1.5em;
  }

  .container {
    max-width: 100%;
  }
}

@media screen and (max-width: 393px) {
  .nav {
    flex-direction: column;
  }

  .nav a {
    font-size: 1rem;
    margin-bottom: 1em;
  }

}
</style>
