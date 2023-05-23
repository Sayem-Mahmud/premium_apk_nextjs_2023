import { useSelector } from "react-redux";
import {controller } from "../../../../src/state/StateController";
import SearchPagePaginated from "../../../../components/pages/SearchPage/SearchPagePaginated";
import { GetServerSidePropsContext } from "next";
import { PremiumApkApi } from "../../../../src/API/PremiumApkApi";
import { ToastMessage } from "../../../../src/utils/ToastMessage";
import { ApkData } from "../../../../interfaces/models";
import AllSeos from "../../../../components/shared/AllSeos";

interface Props {
  apk: Array<ApkData>;
  page: number
  searchValue: string | string[] ;
  searchValueApkLength: number
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { pageSearch, page } = query;
  
  const searchC = pageSearch?.toString();
  if (!page) {
    return
  }
  const pageNum = parseInt(page?.toString());

  if (pageNum >= 1 && searchC !== '') {
    if (!searchC) {
      return
    }
    const { res, err } = await PremiumApkApi.getAllApkSearch(searchC, pageNum);
    if (err) {
      console.log(err);
      ToastMessage.notifyError("Server Error");
      // return { props: {} };
    }

    let apk = res?.apkAllDataSearch
    if (apk.length===0) {
      apk = [{
        message:'No Data'
      }]
    }
    return {
      props: {
        apk: apk,
        searchValueApkLength: res?.apkAllDataLengthSearch,
        page: pageNum,
        searchValue: searchC
      }
    };
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
}




const index: React.FC<Props> = ({apk,searchValueApkLength,searchValue,page}) => {
    const states = useSelector(() => controller.states);
    // const router = useRouter();
    // const { page} = router.query;
  return(<>
    <AllSeos type={searchValue.toString()}/>
  <SearchPagePaginated apk={apk} searchValueApkLength={searchValueApkLength} page={page} searchValue={searchValue} />
  </>)
};

export default index;
