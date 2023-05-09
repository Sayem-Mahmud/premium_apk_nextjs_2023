import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
// import HomePage from "../../components/pages/HomePage/HomePage";

import { GetServerSidePropsContext } from "next";
import { ApkData } from "../../interfaces/models";
import HomePagePaginated from "../../components/pages/HomePage/HomePagePaginated";
import { PremiumApkApi } from "../../src/API/PremiumApkApi";
import { ToastMessage } from "../../src/utils/ToastMessage";
// import { useRouter } from "next/router";


interface Props {
  apk: Array<ApkData>;
  allApkLength: number,
  page: number,
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { page } = context.query;

  const fetchCodeData = async (pageNumber: number) => {
    console.log('page', pageNumber);
    const { res, err } = await PremiumApkApi.getAllApk(pageNumber);
    if (err) {
      console.log(err);
      ToastMessage.notifyError("Server Error");
      return {
        props: {
          apk: [],
          allApkLength: "",
          pageNumber: ""
        }
      }
    }
    return { apk: res.apkAllData, allApklength: res.apkAllDataLength, page: pageNumber };
  };

  if (page) {
    const pageNum = parseInt(page.toString());
    if (pageNum >= 1) {
      const pageNumber = pageNum;
      const data = await fetchCodeData(pageNumber);

      let apk= data.apk
      if (apk && apk.length === 0) {  
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
      return {
        props: {
          apk: apk,
          allApkLength: data.allApklength,
          page: data.page,
        },
      };
    } else {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  } else {
    return {
      props: {
        apk: [],
        allApkLength: "",
        page: "",
      },
    };
  }
}

const index: React.FC<Props> = ({apk,allApkLength,page}) => {
    const states = useSelector(() => controller.states);
    // const router = useRouter();
    // const { page} = router.query;
  return <HomePagePaginated apk={apk} allApkLength={allApkLength} page={page} />
};

export default index;
