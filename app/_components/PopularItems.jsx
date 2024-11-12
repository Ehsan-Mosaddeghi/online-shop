import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProducts } from "@/lib/queries";
import ProductItem from "./PopularItem";

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
              <ProductItem item={item} />
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
