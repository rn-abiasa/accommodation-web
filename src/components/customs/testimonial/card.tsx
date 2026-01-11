interface Props {
  name: string;
  prophecy: string;
  content: string;
  image: string;
}

const Testimonial = ({ name, prophecy, content, image }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-60">
        <p className="text-sm font-normal text-black/70 text-center">
          {content}
        </p>
        <div className="flex items-center gap-5 mt-5">
          <img src={image} alt={name} className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs font-normal text-black/70">{prophecy}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
