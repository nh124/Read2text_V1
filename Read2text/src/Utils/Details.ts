import check from "../assets/check.svg";
import textToSpeech from "../assets/speechToText.svg";
import pause from "../assets/pause.svg";
import deleteIcon from "../assets/delete.svg";

export const LandingPageDetails = {
  Title: "Test Your Reading",
  SubTitle:
    "Improve your literacy skills using our intuitive webapp, designed to efficiently evaluate and enhance your reading and pronunciation. Join us on the journey to fluency and confident communication!",
};
export const PricingDetails = {
  Title: "Pricing plans for teams of all sizes",
  SubTitle:
    "Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sale.",
  CardDetails: [
    {
      id: 1,
      cardTitle: "200 Reading Assignments",
      subTitle: "Expired in 2 months",
      price: "$12.99",
    },
    {
      id: 2,
      cardTitle: "2 Months",
      subTitle: "Maximum of 200 reading assignments",
      price: "$12.99",
    },
  ],
};

export const HomePage = {
  BrandingCardDefaultTitle: "Get Instant Reading Feedback",
  BrandingCardDefaultInstruction: {
    text: "Click the microphone to recorded yourself then submit it for feedback",
  },
  cartTextLimit: 200,
  DefaultCard: { icons: [{ check }] },
  onQueueCard: {
    icons: [{ textToSpeech }],
  },
  inprogressCard: {
    icons: [{ pause }, { deleteIcon }],
  },
  completedStatusCard: {
    color: "#EDF6EE",
    metrics: {
      color: "#85A4C8",
      items: ["Accuracy", "Words/minute"],
    },
    icons: [{ textToSpeech }, { deleteIcon }],
  },
};
