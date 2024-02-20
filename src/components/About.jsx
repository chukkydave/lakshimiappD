import aboutImg from "../assets/images/Lakshimi.png";

const About = () => {
  return (
    <section className="p-12 lg:mx-[150px] mt-[100px] gap-8 md:flex flex-row items-center text-left">
      <div className="grid gap-4">
        <h1 className="text-orange-700 font-bold text-5xl mb-5">About Brand</h1>
        <p>
          Lakshimi started with a tea class that the representative, Yoko Toda,
          started at home. In 2005, “Lakshimi Tea Shop” opened in Kitano, Kobe.
        </p>
        <p>
          In 2008, we started to blend our own original tea. Initially, we
          started with only a few blends, but as we learned about the tastes and
          preferences of our customers, we gradually increased the number of
          original blends.
        </p>
        <p>
          In 2011, we developed our popular product, “Premium Honey Tea”. This
          tea was well-received by customers who enjoyed its sweet yet
          low-calorie content, making it a mainstay in our store
        </p>
        <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
          Buy Now
        </button>
      </div>
      <div>
        <img src={aboutImg} alt="" className="mt-20 md:mt-10" />
      </div>
    </section>
  );
};

export default About;
