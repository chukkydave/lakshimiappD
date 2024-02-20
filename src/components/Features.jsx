import feature from "../assets/images/feature.png";
import feature2 from "../assets/images/feature2.png";
const Features = () => {
  return (
    <section>
      <div className="mb-12 ml-12">
        <h1 className="text-orange-700 text-left font-bold text-6xl md:text-4xl pt-12">
          Product Features
        </h1>
        <h3 className="font-thin text-left">Discover the Essence of Our Tea Collection</h3>
      </div>
      <div>
        <div className="p-6 md:flex flex-row gap-6 ">
          <img
            src={feature}
            alt=""
            className="item-center h-80 w-50 md:h-[300px] object-cover"
          />
          <div className="h-auto">
            <h1 className="text-black mt-4 text-left text-3xl font-semibold">
              Honey that took over 2 years to find.
            </h1>
            <p className="text-left font-thin mt-4">
              Discover the liquid gold that embodies patience and persistence –
              our honey took over 2 years to find. We have tried over a 1000
              different types of honey of different locations and finally, after
              2 years of extensive search and going all the way from Japan to
              Spain, we discovered the perfect honey for the perfect flavored
              blend of tea.
            </p>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mb-20 p-6 md:flex flex-row gap-6">
          <div className="h-auto">
            <h1 className="text-black mt-4 text-left text-3xl font-semibold">
              Blended by Japanese tea sommelier Yoko Toda.
            </h1>
            <p className="text-left font-thin mt-4">
              Crafted with precision and expertise, each blend bears the mark of
              Japanese tea sommelier Yoko Toda. Immerse yourself in the artistry
              of tea, perfected by a master for an unparalleled experience in
              every sip.
            </p>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6 item-start">
              Buy Now
            </button>
          </div>
          <img
            src={feature2}
            alt=""
            className="item-center h-80 w-50 md:h-[300px] object-cover mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
