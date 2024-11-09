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
          <Image src={data.image} fill alt={data.title} />
        </div>

        <div>
          <h1 className="text-2xl">{data.title}</h1>
          <p>{formatCurrency(data.price)}</p>
          <p className="opacity-50">{data.category}</p>
          <hr />
          <p>Description: {data.description}</p>

          <Button>Add To Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default page;
