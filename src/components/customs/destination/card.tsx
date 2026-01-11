import { Card, CardFooter } from "@/components/ui/card";

interface Props {
  className?: string;
  name: string;
  location: string;
  image: string;
}

const DestinationCard = ({ className, name, location, image }: Props) => {
  return (
    <>
      <Card
        style={{ backgroundImage: `url(${image})` }}
        className={`${className} bg-cover bg-center rounded-3xl flex justify-end`}
      >
        <CardFooter className="flex flex-col justify-start items-start">
          <h3 className="text-sm font-normal text-white">{name}</h3>
          <p className="text-base font-semibold text-white">{location}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default DestinationCard;
