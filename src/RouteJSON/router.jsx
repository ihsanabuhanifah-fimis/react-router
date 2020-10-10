import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";
const dashboardRoutes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    layout: "/admin"
  },
  {
    path: "/About",
    name: "About",
    component: About,
    layout: "/admin"
  }
];

export default dashboardRoutes;
