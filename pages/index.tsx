import { useSelector } from "react-redux";
import HomePage from "../components/pages/HomePage/HomePage";
import { controller } from "../src/state/StateController";



const index = () => {
  const states = useSelector(() => controller.states);
  return <HomePage />
};

export default index;
