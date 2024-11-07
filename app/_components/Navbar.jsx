import Link from "next/link";
import NavbarItem from "./NavbarItem";
import { ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { name: "About", to: "about" },
    { name: "Categories", to: "categories" },
    { name: <ShoppingCartIcon />, to: "cart" },
  ];

  return (
    <nav className="w-full py-6 bg-primary">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="">
          LOGO
        </Link>

        <ul className="flex items-center gap-10">
          {menuItems.map(({ name, to }) => (
            <NavbarItem key={to} name={name} to={to} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
