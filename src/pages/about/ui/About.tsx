import { memo } from "react";
import SecondHero from "@/shared/ui/Sc-Hero/SecondHero";
import { SeedraHelps } from "@/widgets/sedraHelps";

export const About = memo(() => {
  return (
    <>
      <SecondHero />;
      <SeedraHelps />
    </>
  );
});
