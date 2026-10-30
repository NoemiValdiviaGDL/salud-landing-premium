import AboutMe from "./components/AboutMe";
import BookingAndPayment from "./components/BookingAndPayment";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/NavBarr";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import { cosmetologaData } from "./data/cosmetologaData";
export default function App() {
  const {
    brand,
    hero,
    services,
    gallery,
    aboutMe,
    payment,
    reviews,
    faq,
    footer,
  } = cosmetologaData;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      <Navbar brand={brand} />
      <Hero hero={hero} brand={brand} />
      <Services services={services} />
      <Gallery gallery={gallery} />
      <AboutMe aboutMe={aboutMe} />
      <BookingAndPayment payment={payment} brand={brand} />
      <Reviews reviews={reviews} />
      <FAQ faq={faq} />
      <Footer brand={brand} footer={footer} />
    </div>
  );
}
