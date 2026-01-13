import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import Navbar from "@/components/customs/navbar";
import DestinationCard from "@/components/customs/destination/card";
import Service from "@/components/customs/service";
import ProductCard from "@/components/customs/product/card";
import Footer from "@/layouts/footer";

const IndexPage = () => {
  return (
    <>
      <main className="h-screen p-2">
        <div className="bg-[url('/background.png')] bg-cover bg-center h-full rounded-3xl">
          <div className="bg-linear-to-r from-black/20 to-transparent h-full rounded-3xl">
            <Navbar />
            <div className="px-5 sm:px-16">
              <div className="mt-26 sm:ml-12">
                <p className="text-base font-medium text-white">
                  Book now and get a discount
                </p>
                <h1 className="text-4xl font-semibold text-white mt-2">
                  A Comfortable Place for Your Vacation.
                </h1>
                <p className="text-base font-normal text-white/70 max-w-96 mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="mt-10">
                  <Button
                    className="bg-blue-500 text-base font-semibold rounded-full px-5 hover:bg-blue-600"
                    asChild
                  >
                    <a href="">Book Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="px-6 mt-24 sm:px-16">
        <div className="sm:flex sm:justify-between">
          <div>
            <p className="text-sm font-normal text-black">RECOMMENDED</p>
            <h2 className="text-3xl font-semibold text-black">
              POPULAR DESTINATIONS
            </h2>
          </div>
          <p className="text-sm font-normal text-black/70 max-w-70 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-10 md:flex md:gap-x-2">
          <DestinationCard
            className="aspect-3/2"
            name="Lorem ipsum"
            location="BEACH, INDONESIA"
            image="/Yacht.png"
          />
          <div className="w-full flex gap-2 mt-2 md:flex-col">
            <DestinationCard
              className="w-80 h-40"
              name="Lorem ipsum"
              location="BEACH, INDONESIA"
              image="/Autumnal.png"
            />
            <DestinationCard
              className="w-80 h-40"
              name="Lorem ipsum"
              location="BEACH, INDONESIA"
              image="/Dome.png"
            />
          </div>
        </div>
      </section>
      <section className="px-6 mt-24 sm:px-16">
        <div>
          <h2 className="text-3xl font-semibold text-center">
            Discover The World From Above
          </h2>
          <p className="text-sm font-normal text-black/70 text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center gap-16 mt-10 sm:grid sm:grid-cols-3">
          <Service
            icon={<Map size={20} />}
            title="Tour Guide"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Service
            icon={<Map size={20} />}
            title="Tour Guide"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Service
            icon={<Map size={20} />}
            title="Tour Guide"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </section>
      <section className="px-6 mt-24 mb-24 sm:px-16">
        <div>
          <div>
            <p className="text-sm font-normal text-black">RECOMMENDED</p>
            <h2 className="text-3xl font-semibold text-black">
              CHOOSE YOUR PACKAGE
            </h2>
          </div>
          <p className="text-sm font-normal text-black/70 max-w-96 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 md:grid-cols-3">
          <ProductCard
            name="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            banefits={[
              { key: "1", value: "2 Large beds" },
              { key: "2", value: "Bathroom" },
              { key: "3", value: "Breakfast" },
            ]}
            price={100}
            image="/Serene Bedroom Scene.png"
            link=""
          />
          <ProductCard
            name="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            banefits={[
              { key: "1", value: "2 Large beds" },
              { key: "2", value: "Bathroom" },
              { key: "3", value: "Breakfast" },
            ]}
            price={100}
            image="/Serene Interior Space with Armchair and Plants.png"
            link=""
          />
          <ProductCard
            name="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            banefits={[
              { key: "1", value: "2 Large beds" },
              { key: "2", value: "Bathroom" },
              { key: "3", value: "Breakfast" },
            ]}
            price={100}
            image="/Serene Interior Space with Armchair and Plants.png"
            link=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
