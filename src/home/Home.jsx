import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import tea from '../assets/images/alpha.png';
import About from '../components/About';
import Products from '../components/Products';
import Extension from '../components/Extension';
import Awards from '../components/Awards';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(screenWidth);

  return (
    <div>
      {screenWidth < 786 && <NavBar />}
      <div className="bg-slate-900 from-blue-900 to-gray-700 h-[700px] w-full bg-cover bg-center relative">
        <img
          src={tea}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-12">
          <h1 className="text-white text-6xl font-semibold mt-20">
            The ultimate aroma and taste for blissful relaxation
          </h1>
          <h2 className="text-white text-1xl font-light mt-10">
            Elevate your tea experience and discover the perfect balance of
            tranquility and taste, sip by sip. Welcome to a journey where every
            cup is a celebration of serenity and indulgence.
          </h2>
          <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6 relative">
            Buy Now
          </button>
        </div>
      </div>
      <About />
      <Products />
      <Extension />
      <Awards />
      <FAQs />
      <Footer />
      <Contact />
    </div>
  );
};

export default Home;
