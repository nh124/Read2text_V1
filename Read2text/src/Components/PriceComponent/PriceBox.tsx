import { primaryColors, secondaryColors } from "../../Utils/themes";
const PriceBox = ({
  title,
  subTitle,
  price,
}: {
  title: string;
  subTitle: string;
  price: string;
}) => {
  return (
    <div
      className="w-full h-full border rounded-[19px] p-[50px] gap-4 flex flex-col"
      style={{ borderColor: `${secondaryColors.LightGray}` }}
    >
      <span className="text-lg md:text-2xl font-semibold">{title}</span>
      <span className="text-sm md:text-base font-semibold">{subTitle}</span>
      <span className="text-3xl md:text-5xl font-semibold">{price}</span>
      <button
        className="py-3 rounded-md  font-semibold text-white mt-3"
        style={{ backgroundColor: `${primaryColors.green}` }}
      >
        Buy Now!!
      </button>
    </div>
  );
};

export default PriceBox;
