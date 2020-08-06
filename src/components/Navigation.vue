<template>
  <div id="nav">
    <div class="container">
      <div class="navigation-left">
        <router-link to="/locations">Locations</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/members">Members</router-link>
      </div>
      <div class="navigation-center">
        <router-link to="/">Photographers Trail Notes</router-link>
      </div>
      <div class="navigation-right">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

    </div>

  </div>
</template>

<script>
export default {};
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
  letter-spacing: .12em;
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
  color: #fff !important;
  font-size: 1.5rem !important;
  margin: 0;
}



  .container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }



</style>
