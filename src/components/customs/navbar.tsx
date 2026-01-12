import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-5 py-6 sm:px-16">
        <div>
          <a href="" className="text-lg font-semibold text-white">
            Logo
          </a>
        </div>
        <div>
          <Button variant="ghost" className="text-white">
            <Menu />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
