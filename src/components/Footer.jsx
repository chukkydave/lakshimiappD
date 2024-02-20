import footer from "../assets/images/footerimage.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-slate-900 h-[700px] w-full bg-cover bg-center relative">
        <img
          src={footer}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-12 md:w-[700px]">
          <h1 className="text-white text-5xl font-semibold mt-20 text-left">
            Indulge in the Extraordinary. Elevate Your Sip, Elevate Your Life.
          </h1>
          <h2 className="text-white font-light mt-10 text-left">
            Ready to embark on a journey of unparalleled taste and tranquility?
            Choose Lakshimi Japanese Tea where every cup is a celebration of
            flavor, wellness, and pure indulgence.
          </h2>
        </div>
        <button className="rounded-lg mx-6 bg-orange-500 text-white w-48 md:w-48 h-10 mt-6 relative">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Footer;
