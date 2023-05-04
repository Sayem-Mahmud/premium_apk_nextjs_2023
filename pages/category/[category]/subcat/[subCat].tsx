import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { ToastMessage } from "../../../../src/utils/ToastMessage";
import { ApkData } from "../../../../interfaces/models";
import { PremiumApkApi } from "../../../../src/API/PremiumApkApi";
// import CategorySubPage from "../../../../components/pages/CategorySubPage/CatagorySubPage";

const CategorySubPage = dynamic(
  () => import("../../../../components/pages/CategorySubPage/CatagorySubPage"),
  { ssr: false }
);

interface Props {
  apk: Array<ApkData>;
  categoryValue: string | string[];
  allApkLength: number;
  subCat: string | string[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { category, subCat } = context.query;

  if (!category || !subCat) {
    return {
      notFound: true,
    };
  }

  const { res, err } = await PremiumApkApi.getAllCategorizedApk(
    category.toString(),
    1,
    subCat.toString()
  );

  if (err) {
    console.log(err);
    ToastMessage.notifyError("Server Error");
  }

    let apk = res?.categorizedApk || [];
    
    if (apk?.length === 0) {
                apk = [
                    {
                        message: "No Data"
                    }
                ]
            }

  const allApkLength = res?.apkAllDataLengthCategorized;

  return {
    props: {
      apk,
      categoryValue: category,
      allApkLength,
      subCat,
    },
  };
}

const IndexPage: React.FC<Props> = ({
  apk,
  allApkLength,
  categoryValue,
  subCat,
}) => {
  return (
    <CategorySubPage
      apk={apk}
      allApkLength={allApkLength}
      categoryValue={categoryValue}
      subCat={subCat}
    />
  );
};

export default IndexPage;




// import { GetServerSidePropsContext } from "next";
// import CategorySubPage from "../../../../components/pages/CategorySubPage/CatagorySubPage";
// import { ToastMessage } from "../../../../src/utils/ToastMessage";
// import { ApkData } from "../../../../interfaces/models";
// import { PremiumApkApi } from "../../../../src/API/PremiumApkApi";
// // import CategoryPage from "../../../../components/pages/CatagoryPage/CategoryPage";

// interface Props {
//     apk: Array<ApkData>;
//     categoryValue: string | string[];
//     allApkLength: number,
//     subCat:string | string[];
// }


// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const { category, subCat } = context.query;

//     if (!category) {
//         return
//     }
//     if (!subCat) {
//         return
//     }
//     const { res, err } = await PremiumApkApi.getAllCategorizedApk(category.toString(), 1,subCat.toString());

//     if (err) {
//         console.log(err);
//         ToastMessage.notifyError("Server Error");
//     }

//     let apk = res?.categorizedApk || [];

//     if (apk?.length === 0) {
//         apk = [
//             {
//                 message: "No Data"
//             }
//         ]
//     }
//     const allApkLength = res?.apkAllDataLengthCategorized;

//     return {
//         props: {
//             apk: apk,
//             categoryValue: category,
//             allApkLength: allApkLength,
//             subCat: subCat
//         }
//     };
// }


// const index: React.FC<Props> = ({ apk,allApkLength,categoryValue,subCat }) => {
//     return <CategorySubPage apk={apk} allApkLength={allApkLength} categoryValue={categoryValue} subCat={subCat} />
// };

// export default index;
