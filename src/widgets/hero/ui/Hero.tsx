import { memo } from "react";
import leaf from "@/shared/assets/leaf.png";
import danger from "@/shared/assets/danger.png";
import tea from "@/shared/assets/tea.png";

export const Hero = memo(() => {
  return (
    <section className="py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-10 bg-[#EAF1EB] rounded-2xl p-0!">
        <div className=" px-20 py-12">
          <h1 className="text-4xl font-bold text-sy leading-snug mb-4">
            SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting
          </h1>
          <p className="text-sy mb-6">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. <br /> Your easy growing experience is our
            guarantee
          </p>

          <div className="flex items-center gap-3 mb-6 ">
            <img src={danger} alt="Hot" className="w-6 h-6" />
            <span className="text-2xl font-bold text-sy">$12.56</span>
            <span className="text-lg text-fh line-through">$15.56</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-py text-white border border-transparent rounded-lg hover:bg-transparent hover:border hover:border-py hover:text-py cursor-pointer">
              Add to card
            </button>
            <button className="px-6 py-3 bg-white text-py rounded-lg cursor-pointer hover:bg-py hover:text-white">
              Discover
            </button>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <img src={tea} alt="Seedra Product" className="relative z-10 " />

          <img
            src={leaf}
            alt="Leaf decoration"
            className="absolute bottom-0 right-3 opacity-90"
          />
        </div>
      </div>
    </section>
  );
});
