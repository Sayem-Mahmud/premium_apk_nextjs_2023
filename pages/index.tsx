import { useSelector } from "react-redux";
import HomePage from "../components/pages/HomePage/HomePage";
import { controller } from "../src/state/StateController";
import { GetServerSidePropsContext } from "next";
import { PremiumApkApi } from "../src/API/PremiumApkApi";
import { ToastMessage } from "../src/utils/ToastMessage";
import { ApkData } from "../interfaces/models";
import AllSeos from "../components/shared/AllSeos";

interface Props {
  apk: Array<ApkData>;
  allApkLength: number
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const pageNumber = parseInt(context.query.page as string) || 1;
    const { res, err } = await PremiumApkApi.getAllApk(pageNumber);

    if (err) {
      console.log('error', err);
      ToastMessage.notifyError("Server Error");
      return {
        props: {
         apk: [],
         allApkLength: ""
        }
      }
    }
    return {
      props: {
        apk: res?.apkAllData || [],
        allApkLength: res.apkAllDataLength || ""
      }
    }
  } catch (error) {
    console.error(error);
    ToastMessage.notifyError("Server Error");
    return {
      props: {
        apk: [],
        allApkLength: "",
      },
    };
  }
}




const index : React.FC<Props> = ({apk,allApkLength}) => {
  const states = useSelector(() => controller.states);
  return (<>
    <AllSeos />
    <HomePage apk={apk} allApkLength={allApkLength} />
</>)};

export default index;
