import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-6 sm:px-16">
        <div className="flex items-center">
          <a href="" className="text-lg font-semibold text-white">
            Logo
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          <a
            href=""
            className="text-xs font-normal text-white hover:text-white/80 transition-colors"
          >
            ABOUT
          </a>
          <a
            href=""
            className="text-xs font-normal text-white hover:text-white/80 transition-colors"
          >
            DESTINATIONS
          </a>
          <a
            href=""
            className="text-xs font-normal text-white hover:text-white/80 transition-colors"
          >
            SERVICES
          </a>
          <a
            href=""
            className="text-xs font-normal text-white hover:text-white/80 transition-colors"
          >
            PRICING
          </a>
          <a
            href=""
            className="text-xs font-normal text-white hover:text-white/80 transition-colors"
          >
            CONTACTS
          </a>
        </nav>
        <div>
          <Button
            className="hidden bg-blue-500 text-base font-semibold rounded-full px-5 hover:bg-blue-600 md:flex"
            asChild
          >
            <a href="">Book Now</a>
          </Button>
          <Button variant="ghost" className="text-white md:hidden">
            <Menu />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
