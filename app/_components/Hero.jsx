import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex flex-col py-[9.5rem]  text-slate-200 items-center gap-5 bg-[url('/layered-waves-haikei.svg')] bg-no-repeat bg-cover">
      <h1 className="text-4xl">
        Your Style, Your <strong className="text-primary">Way</strong>
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro
        recusandae rem labore nemo laudantium.
      </p>

      <Button size="lg" variant="outline">
        <Link href="products" className="text-lg text-stone-950">
          Buy Now!
        </Link>
      </Button>
    </div>
  );
};

export default Hero;
