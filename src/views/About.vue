<template>
  <div class="about">
    <Navigation />
    <div class="passions-img">
      <div class="container">
        <div class="passions-text">
          <p>About trail notes</p>
          <h1>WE ALL HAVE PASSIONS, AND THIS IS MINE</h1>
        </div>
      </div>
    </div>

    <div class="numbers">
      <div class="numbers-grid">
        <div class="numbers-item">
          <h2>120</h2>
          <p>locations visited</p>
        </div>
        <div class="numbers-item">
          <h2>45K</h2>
          <p>miles traveled</p>
        </div>
        <div class="numbers-item">
          <h2>1,000+</h2>
          <p>cups of coffee</p>
        </div>
      </div>
    </div>

    <div class="starting-point container">
      <div class="starting-text">
        <h3>HERE’S WHY I STARTED PHOTOGRAPHERS TRAIL NOTES</h3>
        <p>
          To me, photography is a combination of art, energy, and adventure and
          allows me to share some of the beautiful places God has created.
        </p>
        <br />
        <p>
          As my passion for landscape photography has grown through the years, I
          realized how time-consuming and sometimes frustrating it can be to
          find detailed information about the locations I want to shoot. I’ve
          spent hours—even days—researching GPS coordinates, directions, trails,
          weather, and more to determine if a location was right for me. I
          realized the need for a trusted, informative, one-stop resource for
          all the information I would need to plan a shoot at a particular
          location for photographers like me. And 80+ locations and counting,
          here we are!
        </p>
      </div>
      <div class="starting-img">
        <img src="../assets/images/man with car.jpg" alt="man with car" />
      </div>
    </div>

    <div class="quote">
      <div class="container">
        <p>
          “I have personally visited each of the locations on this website,
          which required extensive research and planning beforehand. This
          collected information is presented in each Photographers Trail Notes
          offering, which includes my hands-on personal experience.”
        </p>
        <p>— TIM WIER</p>
      </div>
    </div>

    <div class="contributing container">
      <div class="contributing-img">
        <img src="../assets/images/sunshine.jpg" alt="sunshine" />
      </div>
      <div class="contributing-text">
        <h3>INTERESTED IN BEING A CONTRIBUTING PARTNER?</h3>
        <p>
          Photographers Trail Notes welcomes the opportunity to partner with
          others to help expand the geographic and creative footprint of the
          website while providing exposure and recognition (links to personal
          websites, promoting events and workshops) to other photographers which
          have a passion for landscape photography.
        </p>
        <br />
        <p>
          It is important that contributing partners share similar values, care
          and conservation of the locations, quality standards, integrity and
          goals as Photographers Trail Notes.
        </p>
        <router-link to="/contributing-partners"
          >What to learn more ➝</router-link
        >
      </div>
    </div>


    <Footer/>
  </div>
</template>
<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Navigation,
    Footer
  }
};
</script>

<style scoped>
.passions-img {
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url("../assets/images/about - nature.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 50%;
  object-fit: cover;
}

.passions-img h1,
p {
  text-align: left;
}

.passions-img p {
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 5em 0 0 0;
}

.passions-img h1 {
  font-size: var(--font-big);
  color: #fff;
  font-family: "Proxima Nova Bold", sans-serif;
}

.passions-img img {
  width: 100%;
  height: 100%;
}

.passions-text {
  position: absolute;
  top: 27%;
  width: 40%;
}

.numbers {
  background-color: var(--primary);
  padding-top: 4.5em;
}

.numbers-item {
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
}

.numbers-item p {
  padding: 0;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  color: var(--active);
  text-align: center;
}

.numbers-item h2 {
  margin-bottom: 0.3em;
  font-family: "Proxima Nova Regular", sans-serif;
  color: #fff;
}

.numbers-grid {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}

.starting-point,
.contributing {
  display: grid;
  padding: 3em 0;
  grid-column-gap: 7em;
  align-items: center;
  grid-template-columns: 1fr 1fr;
}

.starting-text h3,
.contributing-text h3 {
  color: #000;
  font-size: 2rem;
  text-align: left;
  margin: 0 0 1em 0;
  font-family: "Proxima Nova Bold", sans-serif;
}

.starting-text p,
.contributing-text p {
  color: rgba(20, 20, 20, 0.75);
  font-size: 1rem;
  font-family: "Freight Sans Pro", sans-serif;
  line-height: 1.7em;
  padding: 0;
}

.starting-img {
  height: 80%;
}

.starting-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quote {
  text-align: center;
  background-color: var(--primary);
}

.quote p {
  text-align: left;
  line-height: 1.6em;
  font-family: "Proxima Nova Regular", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  margin: 0 auto;
  padding-bottom: 0;
  width: 85%;
}

.quote p:last-child {
  padding: 1em 0 7em;
  color: var(--active);
  font-size: 0.8rem;
  font-weight: 600;
}

.contributing-img {
  height: 90%;
  width: 85%;
  justify-self: end;
}

.contributing-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contributing-text a {
  font-family: "Proxima Nova Regular", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 3.1em;
  font-size: 0.8rem;
  border: 1px solid var(--active);
  padding: 1.2em 3em;
  margin-top: 3em;
  max-width: 50%;
  display: block;
  color: #000;
  transition: all 0.1s linear;
}

.contributing-text a:hover {
  background-color: #000;
  color: var(--active);
  border:1px solid #000
}
</style>
