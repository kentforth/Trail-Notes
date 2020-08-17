<template>
  <div class="contributing-partners">
    <Navigation />
    <div class="interesting-text container">
      <h2>Interested In Being A Contributing Partner?</h2>
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
    </div>

    <div class="line container"></div>

    <div class="offer container">
      <div class="offer-img">
        <img src="../assets/images/man with car - 2.jpg" alt="man with car" />
      </div>
      <div class="offer-text">
        <h3>WHAT WE OFFER TO CONTRIBUTING PARTNERS:</h3>
        <p>$100 per each accepted location</p>
        <p>
          <strong>Recognition/attribution</strong> on the location page(s) and
          images provided by the contributing partner
        </p>
        <p>
          <strong>Links</strong> to the contributing partners
          <strong>personal website</strong>
        </p>
        <p>
          A write-up (if requested) of the contributing partner in the
          <strong>“Area Guides and Workshops”</strong> section in the location
          page
        </p>
        <p>
          Include a write up/bio in the “About" section of the website - as a
          “Contributing Partner”
        </p>

        <h3>HOW TO SUBMIT A LOCATION FOR CONSIDERATION</h3>
        <p>
          To be considered as a contributing partner submit an image, with a
          brief summary and trail difficulty of the location(s) along with the
          signed
          <strong
            ><a
              href="https://static1.squarespace.com/static/5c507a04ec4eb7b4b061b1ef/t/5e07dc9c74877f00dbc46ef8/1577573532714/Photographers+Trail+Notes+Contributing+Partners+Agreement.pdf"
              class="link-document"
              target="_blank"
              >Photographers Trail Notes Contributing Partners Agreement</a
            ></strong
          >

          for review. Photographers Trail Notes has discretion in determining
          which locations are chosen for the website.
        </p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default {
  name: "Contributing_Partners",
  components: {
    Navigation,
    Footer
  }
};
</script>

<style scoped>
.interesting-text {
  padding-top: 3em;
}

.interesting-text h2 {
  font-family: "Proxima Nova Regular", sans-serif;
  font-size: 1.8rem;
}

.interesting-text p,
.offer-text p {
  font-family: "Freight Sans Pro", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  padding: 0;
  margin: 1em 0;
  text-align: left;
  line-height: 1.8em;
  text-transform: none;
  color: rgba(20, 20, 20, 0.8);
}

.line {
  background-color: rgba(20, 20, 20, 0.15);
  margin: 2em auto;

  width: 100%;
  height: 1px;
}

.offer {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  justify-content: center;
  grid-column-gap: 2em;
  align-items: center;
  padding-bottom: 5em;
}

.offer-img img {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.offer-text h3 {
  font-family: "Proxima Nova Extrabold", sans-serif;
  font-size: 1rem;
  text-align: left;
}

.offer-text h3:nth-last-child(2) {
  margin-top: 4em;
}

.link-document {
  color: var(--link-document);
  text-decoration: underline;
  font-family: "Freight Sans Pro", sans-serif;
}

/*MEDIA QUERIES*/
@media screen and (max-width: 1200px) {
  .interesting-text {
    padding-top: 6em;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
}

@media screen and (max-width: 768px) {
  .offer {
    grid-template-columns: 1fr 1fr;
  }

  .offer-text p {
    line-height: 1.3em;
  }

  .offer-text h3 {
    margin-top: 2em !important;
  }
}

@media screen and (max-width: 600px) {
  .interesting-text {
    padding-bottom: 0 !important;
  }

  .offer {
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }

  .container {
    padding-bottom: 2.5em;
  }

  .offer-text p:last-child {
    margin-bottom: 0;
  }

  .line {
    padding-bottom: 0;
    margin: 2em 0;
  }
}

@media screen and (max-width: 320px) {
  .interesting-text h2 {
    font-size: 1.3rem;
  }
}
</style>
