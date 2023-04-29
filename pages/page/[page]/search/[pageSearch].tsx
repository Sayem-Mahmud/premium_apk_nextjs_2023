import { useSelector } from "react-redux";
import HomePage4 from "../../../../components/pages/HomePage/HomePage4";
import {controller } from "../../../../src/state/StateController";





const index = () => {
    const states = useSelector(() => controller.states);
    // const router = useRouter();
    // const { page} = router.query;
  return <HomePage4 />
};

export default index;
