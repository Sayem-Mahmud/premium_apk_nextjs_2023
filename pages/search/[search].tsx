import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
// import HomePage from "../../components/pages/HomePage/HomePage";
import HomePage2 from "../../components/pages/HomePage/HomePagePaginated";
import SearchPage from "../../components/pages/SearchPage/SearchPage";
import { ApkData } from "../../interfaces/models";
import { PremiumApkApi } from "../../src/API/PremiumApkApi";
import { GetServerSidePropsContext } from "next";
import { ToastMessage } from "../../src/utils/ToastMessage";
import AllSeos from "../../components/shared/AllSeos";
// import { useRouter } from "next/router";

interface Props {
  apk: Array<ApkData>;
  searchValue: string | string[] ;
  searchValueApkLength: number
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { search } = context.query;

  if (!search) {
    return
  }
  const { res, err } = await PremiumApkApi.getAllApkSearch(search.toString(), 1);

  if (err) {
    console.log(err);
    ToastMessage.notifyError("Server Error");
  }

  let apk = res?.apkAllDataSearch || [];

  if (apk.length === 0) {
      apk = [
          {
              message: "No Data"
          }
      ]
  }
  const searchValueApkLength = res?.apkAllDataLengthSearch;

  return {
      props: {
          apk: apk,
          searchValue: search,
          searchValueApkLength: searchValueApkLength
      }
  };
}

const index : React.FC<Props> = ({apk,searchValue,searchValueApkLength}) => {
    const states = useSelector(() => controller.states);
    // const router = useRouter();
    // const { page} = router.query;
 
  return (<>
    <AllSeos type={searchValue.toString()}/><SearchPage apk={apk} searchValue={searchValue} searchValueApkLength={searchValueApkLength} />
</>)};

export default index;
