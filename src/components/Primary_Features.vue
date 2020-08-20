<template>
  <div class="primary-features">
    <h3>{{ text }}</h3>
    <h1>{{ title }}</h1>

    <!--FEATURES-->
    <div class="features container">
      <div
        class="features-item"
        v-for="(image, imageIndex) in feature.images"
        :key="imageIndex"
      >
        <div class="feature__img">
          <img :src="image" alt="" />
        </div>
        <div class="feature__text">
          <h2>{{ feature.featureHeaders[imageIndex] }}</h2>
          <p>{{ feature.featureText[imageIndex] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Primary_Features",
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
      ]
    };
  },
  props: {
    feature: {
      type: Object
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
};
</script>

<style scoped>
.primary-features {
  padding-top: 5em;
}

.primary-features h3 {
  letter-spacing: 1px;
  font-family: "Proxima Nova Bold", sans-serif;
  line-height: 1.4em;
}

.primary-features h1 {
  font-family: "Proxima Nova Bold", sans-serif;
  font-size: 3rem;
}
.features {
  display: grid;
  grid-gap: 3em;
  padding-bottom: 4em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.features-item {
  display: flex;
  align-items: center;
}

.feature__img img {
  width: 100%;
}

.feature__text {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 1.5em;
}

.feature__text h2 {
  font-size: 1.4rem;
  font-family: "Proxima Nova Regular", sans-serif;
  font-weight: 300;
  margin-bottom: 0;
}

.feature__text p {
  font-family: "Freight Sans Pro", sans-serif;
  font-weight: 400;
  line-height: 1.5;
}

/*MEDIA QUERIES*/

@media screen and (max-width: 600px) {
  .primary-features h1 {
    font-size: 2rem;
  }
}

@media screen and (max-width: 480px) {
  .primary-features h1 {
    font-size: 1.5rem;
  }

  .primary-features h1 {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 393px) {
  .container {
    max-width: 90%;
  }
  .primary-features h3 {
    font-size: 1rem;
  }

  .feature__text h2 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 320px) {
  .features {
    max-width: 100%;
    grid-gap: 1.5em;
    justify-content: center;
    align-items: center;
  }

  .features-item {
    max-width: 90%;
    text-align: center;
  }

  .feature__img {
    max-width: 100%;
    margin-left: 1.5em;
  }

  .feature__img img {
    width: 70%;
  }

  .feature__text {
    margin-left: 0.5em;
    justify-content: center;
  }

  .feature__text p {
    font-size: 15px;
  }
}
</style>
