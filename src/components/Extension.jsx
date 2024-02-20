import feature from "../assets/images/feature3.png";
import feature2 from "../assets/images/feature4.png";
const Extension = () => {
  return (
    <section className="md:mx-[150px]">
      <div className="mb-12 ml-12 self-center">
        <h1 className="text-orange-700 text-left font-bold text-6xl md:text-4xl pt-12">
          Get the best from our tea
        </h1>
        <h3 className="font-thin text-left">Style your own taste</h3>
      </div>
      <div>
        <div className="p-6 md:flex flex-row gap-6">
          <img
            src={feature}
            alt=""
            className="item-center md:h-[220px] object-cover"
          />
          <div>
            <h1 className="text-black mt-4 text-left text-3xl font-semibold">
              with milk
            </h1>
            <p className="text-left font-thin mt-4">
              Savor the perfect union of tradition and comfort by enjoying our
              tea with milk. Elevate your tea-drinking experience as the rich,
              robust flavors intertwine with the creamy embrace of milk,
              creating a symphony of taste that lingers in every delightful sip.
            </p>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mb-20 p-6 md:flex flex-row gap-6">
          <div>
            <h1 className="text-black mt-4 text-left text-3xl font-semibold">
              With Ice
            </h1>
            <p className="text-left font-thin mt-4">
              Embrace the refreshing symphony of flavors as you take a cool
              journey through our teas enjoyed with ice. Immerse yourself in the
              invigorating fusion of iced tea, where each sip unfolds a
              delightful dance of chilled sophistication and exceptional taste.
            </p>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6 item-start">
              Buy Now
            </button>
          </div>
          <img
            src={feature2}
            alt=""
            className="item-center md:h-[250px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Extension;
