import two from "../../assets/two.svg";

import PriceBox from "../PriceComponent/PriceBox";
import { PricingDetails } from "../../Utils/Details";

const PricingComponent = () => {
  return (
    <main className="w-full min-h-[90dvh] h-auto flex items-center justify-center max-w-[1920px] relative overflow-hidden">
      <div className="absolute w-fit h-fit left-0">
        <img src={two} alt="" />
      </div>
      <div className="flex flex-col justify-center h-auto gap-5 w-full md:w-[60%] items-center relative p-1">
        <div className="h-full flex flex-col gap-9 justify-center w-full text-center items-center">
          <span className="text-3xl md:text-5xl font-bold">
            {PricingDetails.Title}
          </span>
          <span className=" md:text-lg w-fit">{PricingDetails.SubTitle}</span>
        </div>
        <div className="w-full h-auto flex flex-col gap-3 p-3 md:flex-row py-3">
          {PricingDetails.CardDetails.map((details) => (
            <PriceBox
              key={details.id}
              title={details.cardTitle}
              subTitle={details.subTitle}
              price={details.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PricingComponent;
