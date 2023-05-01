import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
// import HomePage from "../../components/pages/HomePage/HomePage";
import HomePage2 from "../../components/pages/HomePage/HomePage2";
import HomePage3 from "../../components/pages/HomePage/HomePage3";
import SearchPage from "../../components/pages/SearchPage/SearchPage";
// import { useRouter } from "next/router";




const index = () => {
    const states = useSelector(() => controller.states);
    // const router = useRouter();
    // const { page} = router.query;
  // return <HomePage3 />
  return <SearchPage />
};

export default index;
