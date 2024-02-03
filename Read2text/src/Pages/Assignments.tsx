import Empty from "../Components/BrandingComponents/Empty";
import expandToggleIcon from "../assets/expandToggleIcon.svg";
import { brandingColor } from "../Utils/themes";

const Assignments = () => {
  const { OnQueue } = brandingColor;
  return (
    <div className="w-full md:w-[90%] h-[90dvh] max-[1920px]:w-full flex flex-col gap-5 items-center max-w-[1920px]">
      <Empty type="empty" />
      <div
        className="w-full h-[500px] p-3 rounded-lg"
        style={{ backgroundColor: `${OnQueue.primary}` }}
      >
        <div className="w-full h-fit px-[2%] flex flex-row justify-between items-center border-b border-gray-300">
          <span className="font-semibold text-3xl">Queued Assignments</span>
          <button>
            <img src={expandToggleIcon} alt="" />
          </button>
        </div>
        <div className="w-full h-auto px-3">
          <Empty type="onQueue" />
        </div>
      </div>
    </div>
  );
};

export default Assignments;
