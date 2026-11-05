import React from "react";
import Navbar from "./components/NavBarr";
import BannerUrgencia from "./components/BannerUrgencia";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import BookingAndPayment from "./components/BookingAndPayment";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-pink-500 selection:text-white">
      <BannerUrgencia />
      <Navbar brand={brand} />
      <Hero hero={hero} brand={brand} />
      <Services services={services} />
      <Gallery gallery={gallery} />
      <AboutMe aboutMe={aboutMe} />

      {/* Sección fija de Agendamiento y Pasarela de Pago */}
      <BookingAndPayment payment={payment} brand={brand} services={services} />

      <Reviews reviews={reviews} />
      <FAQ faq={faq} />
      <Footer brand={brand} footer={footer} />
    </div>
  );
}
