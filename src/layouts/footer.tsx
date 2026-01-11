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
              className="block text-sm font-normal text-white/70 mt-3"
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
      <footer className="bg-black px-6 py-10">
        <div>
          <div className="grid grid-cols-2 gap-5 gap-y-10">
            <FooterItems title="About" items={aboutLinks} />
            <FooterItems title="About" items={aboutLinks} />
            <FooterItems title="About" items={aboutLinks} />
          </div>
          <div className="mt-10">
            <p className="text-base font-semibold text-white">Newsletter</p>
            <p className="text-sm font-normal text-white/70 mt-3">
              Lorem ipsum dolor sit amet consectetur
              <br />
              adipisicing elit.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
