import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About";
import PageNotFound from "../views/PageNotFound";
import Locations from "../views/Locations";
import Contributing_Partners from "../views/Contributing_Partners";
import Pricing from "../views/Pricing";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
    meta: {
      title: "404 Error"
    }
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About"
    },
    component: About
  },
  {
    path: "/contributing-partners",
    name: "Contributing Partners",
    meta: {
      title: "Contributing Partners"
    },
    component: Contributing_Partners
  },
  {
    path: "/locations",
    name: "Locations",
    meta: {
      title: "Locations"
    },
    component: Locations
  },
  {
    path: "/pricing",
    name: "Pricing",
    meta: {
      title: "Pricing"
    },
    component: Pricing
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
