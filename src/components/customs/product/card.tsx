import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  description: string;
  banefits: { key: string; value: string }[];
  price: number;
  image: string;
  link: string;
}

const Product = ({
  name,
  description,
  banefits,
  price,
  image,
  link,
}: Props) => {
  return (
    <>
      <Card className="p-0 rounded-3xl sm:w-70">
        <CardContent className="p-0">
          <img src={image} alt={name} className="rounded-3xl" />
          <div className="p-5">
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-sm font-normal">{description}</p>
          </div>
          <div className=" flex flex-col gap-3 px-5">
            {banefits.map((benefit) => (
              <div key={benefit.key} className="flex items-center gap-2">
                <Badge className="bg-blue-500 p-0.5">
                  <Check />
                </Badge>
                <p className="text-sm font-normal text-black/70">
                  {benefit.value}
                </p>
              </div>
            ))}
          </div>
          <div className="p-5">
            <p className="text-2xl font-semibold">
              ${price}
              <span className="text-sm font-normal">/Night</span>
            </p>
            <Button
              className="bg-blue-500 text-base font-semibold rounded-full px-5 mt-5 hover:bg-blue-600"
              asChild
            >
              <a href={link}>Book Now</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Product;
