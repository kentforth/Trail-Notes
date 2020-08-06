<template>
  <div class="home">
    <Navigation />
    <div class="canyon">
        <div class="container">
            <h1 class="canyon-text">LET US TAKE YOU TO SOME OF AMERICAS BEST PHOTOGRAPHY LOCATIONS</h1>
        </div>
    </div>

      <div class="show-way">
          <div class="container">
              <p>Trail Notes is a resource for landscape photographers and outdoor enthusiasts. For each of our 90+
                 locations, we provide a comprehensive guide to help you find, understand and shoot some of the best
                 landscape photography locations in the country.</p>
              <h1>LET US SHOW YOU THE WAY</h1>
          </div>

      </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";

export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>
<style scoped>
  .canyon {
    width: 100%;
    background-image: url('../assets/images/image - 001.jpg');
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
        padding-top: 6em;
    }

    .show-way {
        background-color: var(--primary);
    }

  .show-way p {
      padding: 5em 0 3em 0;
  }

    .show-way h1 {
        color: #fff;
        font-family: "Proxima Nova Regular", sans-serif;
        padding-bottom: 2em;
        font-size: 3.6vw;
    }
</style>
