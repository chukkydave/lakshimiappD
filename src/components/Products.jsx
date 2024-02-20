import selected from "../assets/images/selectedproduct1.png";
import selected2 from "../assets/images/selectedProduct2.png";
import Features from "./Features";

const Products = () => {
  return (
    <section className="bg-pink-50">
      <div className="md:mx-[150px]">
        <div>
          <h1 className="text-orange-700 font-bold text-3xl md:text-4xl pt-12">
            Selected Products
          </h1>
          <h3 className="text-0xl font-thin">
            Indulge in Our exception Tea collection
          </h3>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8">
          <div>
            <img src={selected} alt="" className="h-[40] w-[40]" />
            <h1 className="text-black mt-4 text-left text-3xl font-semibold">
              Premium Honey Tea
            </h1>
            <p className="text-left font-thin mt-4">
              As a product delivered by a tea sommelier from a tea specialty
              shop, we have maximized the flavor of the tea leaves. We blend
              powdered multi-floral honey from Spain into the tea. The sweetness
              of the honey is so strong that there is no need to use sugar. Just
              one sip brings a feeling of happiness, a rich flavor. It’s a
              delicious tea, whether hot or iced, straight or as a milk tea.
            </p>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
              Buy Now
            </button>
          </div>
          <div>
            <img src={selected2} alt="" className="h-[30]  md:h-[370px] w-[400px]" />
            <h1 className="text-black mt-4 text-left text-3xl font-semibold">
              Premium Honey Lemon Tea
            </h1>
            <p className="text-left font-thin mt-4">
              Indulge in the harmonious blend of natures finest ingredients with
              Lakshimi Premium Honey Lemon Tea. Crafted with meticulous care,
              this exquisite infusion combines the sweetness of pure honey, the
              zest of sun-kissed lemons, and the premium quality tea leaves to
              create a tea experience like no other. Elevate your tea ritual
              with Lakshimi Premium Honey Lemon Tea, where every sip is a
              celebration of taste and tranquility.
            </p>
            <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
              Buy Now
            </button>
          </div>
        </div>
        <Features />
      </div>
    </section>
  );
};

export default Products;
