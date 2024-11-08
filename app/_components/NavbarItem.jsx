import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavbarItem = ({ name, to }) => {
  return (
    <li>
      <Button variant="ghost" asChild>
        <Link href={to} className="text-lg">
          {name}
        </Link>
      </Button>
    </li>
  );
};

export default NavbarItem;
