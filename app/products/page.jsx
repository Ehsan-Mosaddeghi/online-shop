import { getProducts } from "@/lib/queries";
import SortBy from "../_components/SortBy";
import ProductItem from "../_components/ProductItem";

const page = async ({ searchParams }) => {
  const data = await getProducts();
  const sortBy = (await searchParams?.sort) ?? "most-rated";

  let sortedItems;

  if (sortBy === "highest-price") {
    sortedItems = data.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "lowest-price") {
    sortedItems = data.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "most-rated") {
    sortedItems = data.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <section className="container mx-auto p-4">
      <div className="py-10">
        <SortBy />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 ">
        {sortedItems.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default page;
