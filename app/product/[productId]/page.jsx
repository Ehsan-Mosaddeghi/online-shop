import { Button } from "@/components/ui/button";
import { getProductDetail } from "@/lib/queries";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

const page = async ({ params }) => {
  const { productId } = await params;
  const data = await getProductDetail(productId);

  console.log(data);
  return (
    <section className="">
      <div className="container mx-auto p-4 pt-6 grid grid-cols-2 gap-4">
        <div className="relative w-[500px] h-[500px] justify-self-end">
          <Image
            src={data.image}
            fill
            alt={data.title}
            className="rounded-xl"
          />
        </div>

        <div className="space-y-4 flex flex-col">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="font-sans text-lg">{formatCurrency(data.price)}</p>
          <p className="opacity-50">{data.category}</p>
          <hr />
          <p>Description: {data.description}</p>

          <Button className="px-5 flex z-0 mx-auto rounded-2xl btn-lg items-center gap-1 relative duration-[400ms] after:duration-500  before:block before:absolute before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:bg-gradientBtn before:-left-[2px] before:-top-[2px] before:transition-all  before:-z-10  before:animate-[glowing_20s_ease-in-out_infinite] before:rounded-2xl  before:bg-[length:400%] before:blur-sm hover:before:blur-md after:-z-10 after:block after:absolute after:w-full after:h-full after:bg-black before:opacity-100 after:top-0 after:left-0 after:rounded-2xl hover:-translate-y-1">
            Add To Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default page;
