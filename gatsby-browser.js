import "./src/components/NavBar/navbar.css";
import "./src/components/Hero/hero.css";
import "./src/components/Products/products.css";
import "./src/components/Features/features.css";
import "./src/components/Testimonials/testimonials.css";
import "./src/components/Partners/partners.css";
import "./src/components/Press/press.css";
import "./src/components/Indicators/indicators.css";
import "./src/components/BlogList/bloglist.css";
import "./src/components/Newsletter/newsletter.css";
import "./src/components/ContactForm/contactform.css";
import "./src/components/TestModal/testmodal.css";
import "./src/components/HomePageTemplate/utils.css";
import "./src/components/PostCard/postcard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
