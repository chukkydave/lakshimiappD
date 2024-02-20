/* eslint-disable react/no-unescaped-entities */
const FAQs = () => {
  return (
    <div className="p-6 md:mx-[300px]">
      <div>
        <h1 className="text-5xl text-orange-700 text-center font-semibold">
          Frequently Asked Questions
        </h1>
        <h2 className="font-thin text-center mt-6">
          Dive into the details! Here are answers to some commonly asked
          questions. If you don't find what you're looking for, feel free to
          reach out to us – we're here to help!
        </h2>
      </div>
      <div className="flex self-center flex-col w-[400px]">
        <div className="flex flex-row self-center mt-12">
          <h1 className="text-orange-700 font-bold text-3xl">01</h1>
          <div className="text-left ml-12">
            <h2 className="text-black">Can children drink it?</h2>
            <h3 className="text-gray-600">
              No. Do not give to children under 1 year old.
            </h3>
          </div>
        </div>
        <div className="flex flex-row self-center mt-12">
          <h1 className="text-orange-700 font-bold text-3xl">02</h1>
          <div className="text-left ml-12">
            <h2 className="text-black">
              Are there staples attached to the tea bag?
            </h2>
            <h3 className="text-gray-600">
              There are no staples nor any metals attached. So, please drink it
              with peace of mind.
            </h3>
          </div>
        </div>
        <div className="flex flex-row self-center mt-12">
          <h1 className="text-orange-700 font-bold text-3xl">03</h1>
          <div className="text-left ml-12">
            <h2 className="text-black">Is there an expiration date?</h2>
            <h3 className="text-gray-600">
              The expiration date is 2 years after the date of manufacture.
            </h3>
          </div>
        </div>
      </div>

      <button className="rounded-lg bg-orange-600 text-white w-full md:w-48 h-10 mt-6">
        Buy Now
      </button>
    </div>
  );
};

export default FAQs;
