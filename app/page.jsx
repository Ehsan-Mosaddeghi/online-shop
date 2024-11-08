import { Button } from "@/components/ui/button";
import Link from "next/link";
import PopularItems from "./_components/PopularItems";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularItems />
    </>
  );
}
