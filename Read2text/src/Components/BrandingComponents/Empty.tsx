import microphone from "../../assets/microphone.svg";
import { brandingColor, secondaryColors } from "../../Utils/themes";
import { HomePage } from "../../Utils/Details";
const Empty = ({ type }) => {
  const {
    BrandingCardDefaultTitle,
    BrandingCardDefaultInstruction,
    DefaultCard,
  } = HomePage;
  const { empty, instructionTextColor, OnQueue, Completed } = brandingColor;
  const { icons } = DefaultCard;
  const colorChooser = () => {
    if (type === "empty") return empty.primary;
    if (type === "onQueue") return OnQueue.primary;
    if (type === "Complete") return Completed.primary;
  };
  return (
    <div className="w-full h-auto flex flex-row relative">
      <div
        className="w-[95%] h-auto flex flex-col gap-2 p-[2%] rounded-lg shadow-lg"
        style={{ backgroundColor: colorChooser() }}
      >
        <span className="text-lg">{BrandingCardDefaultTitle}</span>
        <span className="text-base" style={{ color: instructionTextColor }}>
          {BrandingCardDefaultInstruction.text}
        </span>
        <textarea
          placeholder="Paste text here"
          className="w-full h-full rounded-lg p-5 border-none focus:outline-none focus:shadow-outline appearance-none shadow-md"
          style={{
            outline: `1px solid ${secondaryColors.LightGray}`,
            resize: "none",
            height: "120px",
          }}
        ></textarea>
        <button className="hover:scale-105 duration-300 w-fit">
          <img src={microphone} width={70} />
        </button>
      </div>
      <div
        className="w-[5%] h-[100px] absolute top-[30%] right-0 rounded-tr-md rounded-br-md flex justify-center items-center border-t border-r border-b"
        style={{ backgroundColor: colorChooser() }}
      >
        {icons.map((icon) => (
          <button className="hover:scale-105 duration-300">
            <img src={Object.values(icon).toString()} alt="" width={40} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Empty;
