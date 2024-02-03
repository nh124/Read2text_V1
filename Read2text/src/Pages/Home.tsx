import HomeComponent from "../Components/Home/HomeComponent";
import PricingComponent from "../Components/Pricing/PricingComponent";
const Home = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
      <HomeComponent />
      <PricingComponent />
    </main>
  );
};

export default Home;
