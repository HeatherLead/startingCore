import one from "../../assets/card/1.png";
import two from "../../assets/card/2.png";
import three from "../../assets/card/3.png";
import four from "../../assets/card/4.png";
import five from "../../assets/card/5.png";
import { GoGraph } from "react-icons/go";
import { FaCalculator } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { RiMenuSearchLine } from "react-icons/ri";
export const houseData = [
  {
    name: "Buy a house",
    image: one,
  },
  {
    name: "Rent a house",
    image: two,
  },
  {
    name: "PG /Co - living",
    image: three,
  },
  {
    name: "commercial space",
    image: four,
  },
  {
    name: "Buy plot",
    image: five,
  },
];

export const companyDetail = [
  {
    title: "Market Rates",
    description: "Get the latest property rates and trends at glance.",
    logo: <GoGraph />,
  },
  {
    title: "Pay in small EMI'S",
    description: "plan your mortage paments in small, managable emi",
    logo: <FaCalculator />,
  },
  {
    title: "Top investment spots",
    description: "find the best area for real estate investments",
    logo: <FaHouseChimney />,
  },
  {
    title: "Market Insights",
    description: "access key research findings for smater decisions",
    logo: <RiMenuSearchLine />,
  },
];
