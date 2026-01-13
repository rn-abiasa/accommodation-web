import { Instagram, Facebook, Youtube } from "lucide-react";
import Input from "@/components/customs/input";
import Social from "@/components/customs/social";

interface FooterItems {
  title: string;
  items: { title: string; link: string }[];
}

const aboutLinks = [
  { title: "About Us", link: "" },
  { title: "Blog", link: "" },
  { title: "Careers", link: "" },
  { title: "Jobs", link: "" },
  { title: "In Press", link: "" },
  { title: "Gallery", link: "" },
];

const FooterItems = ({ title, items }: FooterItems) => {
  return (
    <>
      <div>
        <p className="text-base font-semibold text-white">{title}</p>
        <div className="mt-4">
          {items.map((item) => (
            <a
              href={item.link}
              key={item.title}
              className="block text-sm font-normal text-white/50 mt-3"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="bg-black px-6 py-10 sm:px-16">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-5 gap-y-10 sm:grid-cols-3 md:gap-24">
            <FooterItems title="About" items={aboutLinks} />
            <FooterItems title="About" items={aboutLinks} />
            <FooterItems title="About" items={aboutLinks} />
          </div>
          <div className="mt-10">
            <p className="text-base font-semibold text-white">Newsletter</p>
            <p className="text-sm font-normal text-white/70 mt-3 mb-5">
              Lorem ipsum dolor sit amet consectetur
              <br />
              adipisicing elit.
            </p>
            <Input />
            <div className="flex gap-5 mt-10">
              <Social icon={<Instagram size={16} />} link="" />
              <Social icon={<Facebook size={16} />} link="" />
              <Social icon={<Youtube size={16} />} link="" />
            </div>
          </div>
        </div>
        <p className="text-xs text-white/50 text-start mt-10">
          2026 Abiasa. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
