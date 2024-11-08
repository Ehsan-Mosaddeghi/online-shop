import Image from "next/image";

const page = () => {
  return (
    <section className="grid grid-cols-5 w-full mx-auto container my-10 items-center gap-12">
      <div className="col-span-3 leading-8">
        <h1 className="text-2xl text-primary">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          molestiae suscipit modi, alias maiores sequi placeat ad deleniti
          inventore quia?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae qui
          dolorum esse, at quod placeat, deleniti atque obcaecati, voluptatibus
          tempora quos illum aperiam ipsam dolore?
        </p>
      </div>
      <div className="col-span-2">
        <Image
          src="/preview.webp"
          alt="shoping store"
          width={400}
          height={400}
          className="aspect-square"
        />
      </div>

      <div className="col-span-3 col-start-3 leading-8">
        <h1 className="text-2xl text-primary">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          molestiae illum quis labore asperiores voluptas sunt exercitationem,
          officiis maxime? Magni sed officiis expedita dolorem. Laudantium
          aliquid labore fuga quidem? Sed.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde natus
          tempore minima fuga rem dolorum. Quas, voluptas placeat? Quasi
          exercitationem reiciendis magni nulla odio sunt, iste officiis
          impedit.
        </p>
      </div>
      <div className="col-span-2 row-start-2">
        <Image
          src="/family.webp"
          alt="shoping store"
          width={400}
          height={400}
          className="aspect-square"
        />
      </div>
    </section>
  );
};

export default page;
