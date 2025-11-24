import HeroArea from "@/components/HeroArea";
// import PricingPlans from "../components/PricingPlans.jsx";
// import Team from "../components/Team.jsx";
import Cta from "@/components/Cta.jsx";
// import Testimonial from "../components/Testimonial.jsx";
// import ContactUs from "../components/ContactUs.jsx";
// import About from "../components/About.jsx";
import About2 from "@/components/About2.jsx";
import Portfolio4 from "@/components/Portfolio4.jsx";
// import Portfolio6 from "../components/Portfolio6.jsx";
import Brands from "@/components/Brands.jsx";
// import Features from "../components/Features.jsx";
// import Blog from "../components/Blog.jsx";

export default function Home() {
  return (
    <>
      <HeroArea />
      <Brands />
      {/* <Features /> */}
      {/* <About /> */}
      <About2 />
      {/* <Team />
      <Testimonial />
      <PricingPlans /> */}
      <Portfolio4 />
      {/* <Portfolio6 /> */}
      <Cta />
      {/* <ContactUs /> */}
      {/* <Blog /> */}
    </>
  );
}
