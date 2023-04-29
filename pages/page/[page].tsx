import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
// import HomePage from "../../components/pages/HomePage/HomePage";
import HomePage2 from "../../components/pages/HomePage/HomePage2";
// import { useRouter } from "next/router";




const index = () => {
    const states = useSelector(() => controller.states);
    // const router = useRouter();
    // const { page} = router.query;
  return <HomePage2 />
};

export default index;
