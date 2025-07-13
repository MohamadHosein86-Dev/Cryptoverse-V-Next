type DescriptionProps = {
  name: string;
  description: string;
};

const Description = ({ description, name }: DescriptionProps) => {
  return (
    <div className="bg-surface-900  xl:w-[62.5rem] p-4 rounded-xl flex flex-col gap-3">
      <h1 className=" text-xl sm:text-2xl text-primary ">{name}</h1>
      <p
        className="coin-description text-[12px] sm:text-sm  leading-6  text-justify"
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </div>
  );
};

export default Description;
