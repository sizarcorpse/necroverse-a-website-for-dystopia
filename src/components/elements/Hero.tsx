import { GradientButton, Spotlight } from "@/components/ui";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="h-screen w-full bg-zinc-950  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 ">
        <h1 className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Necroverse <br /> The sinister realm of technology.
        </h1>
        <p className="mt-8 font-normal text-2xl text-neutral-300 max-w-xl text-center mx-auto">
          Enter the Necroverse, a sinister and thrilling world where necromancy
          and technology collide.
        </p>
        <div className="flex items-center justify-center mt-8">
          <GradientButton>Join this Dystopia</GradientButton>
          <Button variant="link">Fallen to the abyss</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
