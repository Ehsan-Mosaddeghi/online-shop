import { Button } from "@/components/ui/button";
import Link from "next/link";
import PopularItems from "./_components/PopularItems";

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col justify-center  items-center gap-4  bg-[url('/blob-scene-haikei.svg')] bg-fixed  h-screen  bg-no-repeat bg-cover">
        <h1 className="text-4xl">
          Welcome to the <strong className="text-primary">Online Shop</strong>
        </h1>
        <Button size="lg" variant="outline">
          <Link href="products">Shop Now!</Link>
        </Button>
      </header>

      <PopularItems />
    </>
  );
}
