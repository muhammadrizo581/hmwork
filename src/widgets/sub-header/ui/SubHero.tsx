import { memo } from "react";
import sub_hero from "@/shared/assets/sub-hero.png";

export const SubHero = memo(() => {
  return (
    <section
      className="container relative w-full rounded-xl  overflow-hidden"
      style={{
        backgroundImage: `url(${sub_hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-py">
          We sell seeds
        </h2>
        <p className="text-fh mt-2">
          that always sprout and gardening supplies which never break
        </p>
      </div>
    </section>
  );
});
