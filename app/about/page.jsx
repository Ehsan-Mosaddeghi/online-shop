import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const page = () => {
  return (
    <section className="grid grid-cols-5 w-full mx-auto container my-10 items-center gap-12">
      <div className="col-span-3 leading-8 col-start-2 md:col-start-1">
        <h1 className="text-3xl text-primary">Lorem ipsum dolor sit amet.</h1>
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
      <div className="col-span-3 col-start-2 md:col-start-4 md:col-span-2">
        <Image
          src="/preview.webp"
          alt="shoping store"
          width={400}
          height={400}
          className="aspect-square rounded-sm"
        />
      </div>

      <div className="col-span-3 col-start-2 md:col-start-3 leading-8">
        <h1 className="text-3xl text-primary">Lorem ipsum dolor sit amet.</h1>
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
      <div className="col-span-3 col-start-2 md:col-span-2 row-start-3 md:row-start-2">
        <Image
          src="/family.webp"
          alt="shoping store"
          width={400}
          height={400}
          className="aspect-square rounded-sm"
        />
      </div>

      <Accordion
        type="single"
        collapsible
        className="col-span-5 w-full text-primary mt-10 "
      >
        <AccordionItem value="item-1 ">
          <AccordionTrigger>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            qui.?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            facilis vero, nisi nulla laboriosam in!?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default page;
