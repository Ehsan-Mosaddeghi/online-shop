import Link from "next/link";
import NavbarItem from "./NavbarItem";
import { ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { name: "About", to: "about" },
    { name: "Products", to: "products" },
    { name: <ShoppingCartIcon />, to: "cart" },
  ];

  return (
    <nav className="w-full py-4  text-slate-100 border-b border-b-neutral-700 bg-secondary">
      <div className="container mx-auto  px-4 flex justify-between">
        <Link href="/" className="my-auto">
          LOGO
        </Link>

        <ul className="flex items-center gap-1">
          {menuItems.map(({ name, to }) => (
            <NavbarItem key={to} name={name} to={to} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
