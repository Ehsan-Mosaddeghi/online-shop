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
    <section className="flex justify-center p-2 px-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full container"
      >
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/5 ">
              <div className="p-1">
                <Card>
                  <CardContent className=" bg-card rounded-xl aspect-square hover:text-green-800 hover:shadow-2xl duration-300 p-3 ">
                    <Link href={`product/123`} className="flex flex-col gap-1">
                      <Image
                        src={item.image}
                        width={300}
                        height={100}
                        alt={item.title}
                        className="aspect-square rounded-xl self-center"
                      />
                      <p className="opacity-50">{item.category}</p>
                      <h2 className="line-clamp-1">{item.title}</h2>
                      <p className="font-sans text-green-900 text-lg">
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
