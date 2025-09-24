import { memo } from "react";
import farmerImg from "../../../shared/assets/farmer.png";

export const SeedraHelps = memo(() => {
  return (
    <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Seedra helps to grow fast and efficiant
        </h3>
        <p className="text-gray-600 mb-4">
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional
          instructions created by PhD Helga George
        </p>
        <p className="text-gray-600 mb-4">
          Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination
          ratings. Your easy growing experience is our guarantee.
        </p>
        <p className="text-gray-600 mb-4">
          Spinach common culinary uses: salads, soups, smoothies, lasagne,
          pizza, pies, risotto, and more.
        </p>
        <p className="text-gray-600">
          Proudly sourced in the USA - our garden seeds are grown, harvested,
          and packaged in the USA. We support local farmers and are happy to
          produce this American-made product.
        </p>
      </div>

      <div className="flex justify-between">
        <div className="relative">
          <img
            src={farmerImg}
            alt="Farmer holding tomatoes"
            className="rounded-full   object-cover"
          />
        </div>
      </div>
    </section>
  );
});
