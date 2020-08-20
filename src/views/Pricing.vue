<template>
  <div class="pricing">
    <Navigation />

    <!--PLAN-->
    <div class="plan">
      <div class="container">
        <h3>Pricing & features</h3>
        <h1>Plan your next trip with ease</h1>
      </div>
    </div>

    <!--PRICE-->
    <Price />

    <!--PRIMARY FEATURES-->
    <Primary_Features
      v-for="(feature, index) in features"
      :feature="feature"
      :key="'primary' + index"
      title="PRIMARY FEATURES"
      text="PHOTOGRAPHER GEARED INFORMATION"
    />

    <!--BUILT FOR PHOTOGRAPHERS-->
    <div class="build-for-photographers container">
      <img src="../assets/images/built for fotographers.jpg" alt="" />
      <div
        class="built__text"
        data-aos="fade-up-left"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <h2>BUILT FOR PHOTOGRAPHERS</h2>
        <p>
          What does it take to get the perfect shot - it takes time spent on
          research; planning and mapping - time you would rather be spending on
          the trail. We’ve done the research, and we’ve been to the locations
          and offer a one-stop resource with the tools and information needed
          for put you in the right place to capture your next great image.
        </p>
        <router-link to="#">PREVIEW A SAMPLE LOCATION →</router-link>
      </div>
    </div>

    <!--ADDITIONAL FEATURES-->
    <Primary_Features
      v-for="(feature, index) in additionalFeatures"
      :feature="feature"
      :key="'secondary' + index"
      title="ADDITIONAL FEATURES"
      text="OTHER HELPFUL LOCATION INFORMATION"
    />

    <!--ADVENTURERS-->
    <div class="adventurers container">
      <img src="../assets/images/adventurers.jpg" alt="" />
      <div
        class="adventurers__text"
        data-aos="fade-up-right"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <h2>BUILT FOR PHOTOGRAPHERS</h2>
        <p>
          What does it take to get the perfect shot - it takes time spent on
          research; planning and mapping - time you would rather be spending on
          the trail. We’ve done the research, and we’ve been to the locations
          and offer a one-stop resource with the tools and information needed
          for put you in the right place to capture your next great image.
        </p>
        <router-link to="#">PREVIEW A SAMPLE LOCATION →</router-link>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Price from "../components/Price";
import Primary_Features from "../components/Primary_Features";

import "aos/dist/aos.css";
import AOS from "aos";
export default {
  name: "Pricing",
  components: {
    Navigation,
    Footer,
    Price,
    Primary_Features
  },
  created() {
    AOS.init();
  },
  data() {
    return {
      features: [
        {
          featureHeaders: [
            "Trail Difficulty (1 out of 5)",
            "GPS Coordinates & Elevation",
            "Google Maps Birds-Eye-View",
            "Directions",
            "Best Time of Day to Shoot",
            "What Lens(es) Do You Need",
            "Special Nuances of the Shot",
            "Special Equipment Needed",
            "Best Time of Year to Shoot",
            "Permits",
            "Photographers to Expect",
            "Direction of Shot"
          ],
          featureText: [
            "Know beforehand what you are getting into! We provide a quick overview of the location. Is it easy, moderate or difficult to access?",
            "We provide exact GPS coordinates & elevation with automatic links directly into Google maps.",
            "For each location we provide a birds-eye view to provide a better understanding of the layout and terrain of the location.",
            "For each location we provide detailed directions along with a direct link to Google maps allowing turn by turn directions.",
            "It is all about the light! We help you plan your trip and let you know if the location is a sunrise, sunset or anytime shot.",
            "If you are hiking a long distance, weight is important. We provide which lens(es) are needed to help lighten your load.",
            "Not every place is as you might think. We provide a personal insight into the location and an approach to taking the shot.",
            "Knowing what equipment is needed can save time and money. Waders, walking stick, pano equipment, rain sleeve, ND filter.",
            "Sunrise might be best in summer or the waterfall conditions are best for spring. We will let you know.",
            "Have you ever been in the field and wondered if you need a permit to be there? We provide information on when or if a permit is required.",
            "Ever show up to a great location to find there are too many photographers for the location? We will let you know how many to expect.",
            "Is the shot facing east or west? We provide this information to best understand the direction of the shot."
          ],
          images: [
            require("../assets/images/primary_features/trail.png"),
            require("../assets/images/primary_features/gps.png"),
            require("../assets/images/primary_features/earth.png"),
            require("../assets/images/primary_features/directions.png"),
            require("../assets/images/primary_features/time.png"),
            require("../assets/images/primary_features/lens.png"),
            require("../assets/images/primary_features/nuance.png"),
            require("../assets/images/primary_features/special-equipment.png"),
            require("../assets/images/primary_features/calendar.png"),
            require("../assets/images/primary_features/permits.png"),
            require("../assets/images/primary_features/people.png"),
            require("../assets/images/primary_features/shot-directions.png")
          ]
        }
      ],
      additionalFeatures: [
        {
          featureHeaders: [
            "Weather",
            "Cell Service",
            "Google Maps Birds-Eye-View",
            "Overnight Lodging/Camping",
            "Nearby Restaurants",
            "Laundry Mat",
            "Other Photo Opportunities",
            "Airport Options",
            "Area Guides and Workshops",
            "Other Resources"
          ],
          featureText: [
            "We provide a direct link to both current and historical weather (via NOAA) for each location.",
            "Being in the field can limit access to your phone service and important information. It is great to know when you can find coverage.",
            "We provide the closest camping (with direct links via Google maps) and lodging (with direct links to TripAdvisor).",
            "After a long day of shooting, it is great to know where you can grab a good meal and a cold refreshment. We share personal favorites.",
            "When traveling, it is great to know where you can wash clothes and freshen up. We provide known laundry mats in the area.",
            "Why not take advantage of other photographic opportunities while you are traveling?",
            "We provide the closest national or regional airports to specific locations. This can help plan your travel.",
            "Often, a professional guide or workshop is the very best way to get a great shot. If we know of one, we will provide this for you.",
            "The Photographer's Ephemeris can be a photographer's best friend. We provide a direct link so you can know the direction of the sunrise/sunset."
          ],
          images: [
            require("../assets/images/additional-features/weather.png"),
            require("../assets/images/additional-features/cellphone.png"),
            require("../assets/images/additional-features/camping.png"),
            require("../assets/images/additional-features/shop.png"),
            require("../assets/images/additional-features/laundry.png"),
            require("../assets/images/additional-features/photo.png"),
            require("../assets/images/additional-features/airplane.png"),
            require("../assets/images/additional-features/workshop.png"),
            require("../assets/images/additional-features/resources.png")
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.plan {
  background-image: url("../assets/images/plan.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.plan h3 {
  margin-top: 0;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  font-family: "Proxima Nova Regular", sans-serif;
  letter-spacing: 0.12em;
  font-size: 2rem;
  text-align: left;
}

.plan h1 {
  color: #fff;
  text-transform: uppercase;
  font-family: "Proxima Nova Extrabold", sans-serif;
  font-size: 4rem;
  max-width: 70%;
  text-align: left;
}

.adventure {
  background-color: var(--primary);
  padding: 8em 0;
}

.adventure h2 {
  margin-top: 0;
  font-size: 3vw;
  font-family: "Proxima Nova Bold", sans-serif;
  color: #fff;
}

.adventure p {
  color: #fff;
  font-family: "Proxima Nova Regular", sans-serif;
  font-size: 2rem;
  width: 65%;
  margin: 0 auto;
}

.build-for-photographers,
.adventurers {
  height: 53em;
}

.build-for-photographers img,
.adventurers img {
  width: 100%;
}

.built__text,
.adventurers__text {
  background-color: var(--primary);
  position: relative;
  width: 50%;
  margin: 0 auto;
  padding: 2.5em;
  top: -14em;
  left: 23em;
  bottom: 0;
  text-align: left;
}

.built__text h2,
.adventurers__text h2 {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: #fff;
}

.built__text p,
.adventurers__text p {
  font-size: 1rem;
  font-family: "Freight Sans Pro", sans-serif;
  letter-spacing: 0.01em;
  color: #b0b0b0;
}

.built__text a,
.adventurers__text a {
  font-size: 0.7rem;
  color: var(--active);
}

.built__text a:hover {
  color: #ca7a55;
}

.adventurers {
  margin-bottom: 3em;
}

.adventurers__text {
  top: -14em;
  left: -23em;
  bottom: 0;
}

@media screen and (max-width: 1200px) {
  .built__text {
    left: 18em;
  }

  .adventurers__text {
    left: -20em;
    top: -17em;
  }
  .adventurers {
    margin-bottom: 0;
    height: 45em;
  }
}

@media screen and (max-width: 1024px) {
  .build-for-photographers {
    height: 28em;
  }

  .built__text {
    padding: 1.8em;
    left: 13em;
  }

  .built__text h2,
  .adventurers__text h2 {
    font-size: 1rem;
  }

  .built__text p,
  .adventurers__text p {
    font-size: 0.8rem;
    line-height: 1.5em;
  }

  .adventurers {
    height: 36em;
  }

  .adventurers__text {
    padding: 1.8em;
    left: -17em;
    top: -14em;
  }
}

@media screen and (max-width: 768px) {
  .plan h3 {
    margin-top: 2em;
    font-size: 1.5rem;
  }

  .plan h1 {
    font-size: 3rem;
    max-width: 80%;
  }

  .built__text {
    width: 80%;
    left: 6em;
    top: -5em;
  }

  .built__text h2,
  .adventurers__text h2 {
    font-size: 0.7rem;
  }

  .built__text a,
  .adventurers__text a {
    font-size: 0.5rem;
  }

  .adventurers__text {
    width: 80%;
    left: -6em;
    top: -5em;
  }
}

@media screen and (max-width: 600px) {
  .adventurers {
    height: 30em;
  }
}

@media screen and (max-width: 480px) {
  .container {
    max-width: 90%;
  }

  .plan {
    padding-top: 15em;
  }

  .plan h1 {
    font-size: 2.5rem;
  }

  .built__text {
    left: 0;
  }

  .adventurers__text {
    left: 0.5em;
  }
}

@media screen and (max-width: 393px) {
  .plan h3 {
    font-size: 1.2rem;
  }

  .plan h1 {
    font-size: 2rem;
  }

  .build-for-photographers {
  }
}

@media screen and (max-width: 320px) {
  .plan {
    height: 500px;
  }

  .build-for-photographers {
    height: 21em;
  }

  .built__text {
    left: 28px;
  }

  .built__text,
  .adventurers__text {
    margin: 0;
    padding: 1em;
  }

  .built__text h2,
  .adventurers__text h2 {
    font-size: 0.6rem;
  }

  .adventurers__text {
    left: 1.6em;
    top: -3em;
  }

  .adventurers {
    height: 28em;
  }
}
</style>
