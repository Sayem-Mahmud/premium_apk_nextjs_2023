import { useSelector } from "react-redux";
import HomePage from "../components/pages/HomePage/HomePage";
import { controller } from "../src/state/StateController";
import { GetServerSidePropsContext } from "next";
import { PremiumApkApi } from "../src/API/PremiumApkApi";
import { ToastMessage } from "../src/utils/ToastMessage";
import { ApkData } from "../interfaces/models";
import AllSeos from "../components/shared/AllSeos";
import Promotion from "../components/pages/Promotion/Promotion";
import { Jsondata } from "../src/utils/Jsondata";

interface Props {
  apk: Array<ApkData>;
  allApkLength: number;
  dataPromo: Array<any>
}

const arraySlice = (items:any) => {
  const shuffledItems = items.sort(() => 0.5 - Math.random());

  // Select the first 4 items from the shuffled array
  const randomlySelectedItems = shuffledItems.slice(0, 8);
  return randomlySelectedItems
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const pageNumber = parseInt(context.query.page as string) || 1;
    const { res, err } = await PremiumApkApi.getAllApk(pageNumber);
    const dataPromo = await arraySlice(Jsondata.promotions)

    if (err) {
      console.log('error', err);
      ToastMessage.notifyError("Server Error");
      return {
        props: {
         apk: [],
          allApkLength: "",
          dataPromo:[]
        }
      }
    }
    return {
      props: {
        apk: res?.apkAllData || [],
        allApkLength: res.apkAllDataLength || "",
        dataPromo:dataPromo || []
      }
    }
  } catch (error) {
    console.error(error);
    ToastMessage.notifyError("Server Error");
    return {
      props: {
        apk: [],
        allApkLength: "",
        dataPromo:[]
      },
    };
  }
}




const index : React.FC<Props> = ({apk,allApkLength,dataPromo}) => {
  const states = useSelector(() => controller.states);
  return (<>
    <AllSeos />
    <HomePage apk={apk} allApkLength={allApkLength} />
    <Promotion dataPromo={dataPromo}/>
</>)};

export default index;
