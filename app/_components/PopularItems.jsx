import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProducts } from "@/lib/queries";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const PopularItems = async () => {
  const data = await getProducts();

  return (
    <section className="flex justify-center text-black p-2 px-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full container"
      >
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="p-1 flex items-center  justify-center">
                <Card className="w-[200px] h-[282x] hover:-translate-y-1 duration-300">
                  <CardContent className=" bg-card rounded-xl aspect-square hover:text-neutral-300 hover:shadow-2xl duration-300 p-2">
                    <Link
                      href={`product/${item.id}`}
                      className="flex flex-col relative gap-1"
                    >
                      <div className="aspect-square w-[150px] self-center relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="rounded-xl"
                        />
                      </div>
                      <p className="opacity-50">{item.category}</p>
                      <h2 className="line-clamp-1">{item.title}</h2>
                      <p className="font-sans  text-lg">
                        {formatCurrency(item.price)}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default PopularItems;
