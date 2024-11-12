import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ item }) => {
  return (
    <div className="p-1 flex items-center justify-center">
      <Card className="relative w-[235px] h-[282x] before:block before:absolute before:w-full before:h-0 before:rounded-xl hover:before:h-full  before:top-0   before:bg-neutral-50   duration-300 before:duration-500">
        <CardContent className=" bg-card rounded-xl aspect-square hover:text-blue-900  hover:shadow-2xl  duration-300 p-2">
          <Link
            href={`products/${item.id}`}
            className="flex flex-col relative gap-1"
          >
            <div className="aspect-square w-[180px] self-center relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+BMAAoEBvJSWGnYAAAAASUVORK5CYII="
                className="rounded-xl"
              />
            </div>
            <p className="opacity-50">{item.category}</p>
            <h2 className="line-clamp-1">{item.title}</h2>
            <p className="font-sans  text-lg">{formatCurrency(item.price)}</p>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductItem;
