import image from "../assets/people-image.png";
import Button from "./button";

function Hero() {
  return (
    <section className="w-1440 grid gap-0 grid-cols-[.45fr_.55fr] grid-rows-[1fr]">
      <div className="flex flex-col mb-[44px] mt-[]">
        <span className="text-[64px] font-belyDisplayRegular">
          A new model for open collaboration
        </span>
        <span className="text-[24px] font-futuraRoundDemi text-textColor mb-[40px]">
          Run an organization where members get rewarded for their contributions
          with fractional ownership.
        </span>
        <Button />
      </div>
      <img src={image} alt="Clapping people image" />
    </section>
  );
}

export default Hero;
