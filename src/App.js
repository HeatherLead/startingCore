import Navbar from "./components/Navbar";
import building from "./assets/building.png";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import ButtonComponent from "./components/Button";
import Card from "./components/card/Card";
import Stats from "./components/Stats";
import Trust from "./components/Trust";
import Offers from "./components/Offers";
import Demand from "./components/Demand";
import NewLaunched from "./components/NewLaunched";
import PopularBuilders from "./components/PopularBuilders";
import Footer from "./components/Footer";
function App() {
  return (
    <Theme accentColor="orange">
      <div className=" overflow-hidden ">
        <Navbar />
        <div className="bg-[url('./assets/background.png')] bg-cover flex flex-wrap justify-start items-start pt-20 w-screen  overflow-hidden">
          <div className="flex justify-end items-end w-full md:w-1/2">
            <img src={building} className="w-full" alt="Building" />
          </div>

          <div className="flex flex-col justify-start items-start w-full md:w-1/2 p-4 pt-14">
            <h1 className="text-4xl w-full font-bold pb-5">
              Find your Perfect Home with Dreamhausi
            </h1>
            <p className="lg:w-2/3 pb-5">
              Search through our handpicked selection of homes and apartments to
              find the one that fits your lifestyle perfectly.
            </p>
            <p className="lg:w-2/3 pb-10">
              Whether you're looking for a cozy apartment in the city or a
              spacious family home in the suburbs, our listings are designed to
              help you find the perfect place to call home.
            </p>
            <ButtonComponent />
          </div>
        </div>
      </div>
      <div className=" p-5 md:p-20 space-y-10 ">
        <h1 className=" text-xl font-bold">Our Services</h1>
        <Card />
        <div className=" w-full flex justify-center items-center">
          <ButtonComponent />
        </div>
        <Trust />
        <Stats />
        <div className=" w-full bg-[#C2EAF8] font-bold p-6  rounded-md shadow-md flex flex-wrap justify-between">
          <h1 className=" text-[#FF6400]">Book Your Dream Home with Just ₹1</h1>
          <ButtonComponent />
        </div>
        <Offers />
        <Demand />
        <NewLaunched />
        <PopularBuilders />
      </div>
      <Footer />
    </Theme>
  );
}

export default App;
