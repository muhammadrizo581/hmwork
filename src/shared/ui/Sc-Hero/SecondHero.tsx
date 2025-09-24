import { memo } from "react";

const SecondHero = () => {
  return (
    <section className="bg-[#EAF1EB] py-12 px-6 rounded-lg container mt-8 ">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Who we are and what we do
        </h2>
        <p className="text-gray-600">
          Here you can find a lot of interesting and useful information that you
          need in gardening and creating a beautiful garden
        </p>
      </div>
    </section>
  );
};

export default memo(SecondHero);
