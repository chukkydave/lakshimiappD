import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png"

const Awards = () => {
  return (
    <div className="bg-pink-50">
      <div className=" p-6 md:mx-[150px]">
        <div className="mt-[70px]">
          <h1 className="text-orange-700 text-left font-bold text-6xl md:text-4xl">
            Awards & Recognition
          </h1>
          <h3 className="font-thin text-left">Our work speaks for us</h3>
        </div>
        <div className="flex flex-row gap-8 mt-12">
          <div>
            <img src={award1} alt="" />
            <h1>Top sales in tea category in Japanese EC sit</h1>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
              Buy Now
            </button>
          </div>
          <div>
            <img src={award2} alt="" />
            <h1>Top sales in tea category in department stores</h1>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
