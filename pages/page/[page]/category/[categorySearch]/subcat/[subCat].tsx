import { GetServerSidePropsContext } from "next";
// const CategorySubPaginated = dynamic(
//     () => import("../../../../../../components/pages/CategorySubPage/CategorySubPaginated"),
//     { ssr: false }
//   );
import CategorySubPaginated from "../../../../../../components/pages/CategorySubPage/CategorySubPaginated";
import { ApkData } from "../../../../../../interfaces/models";
import { ToastMessage } from "../../../../../../src/utils/ToastMessage";
import { PremiumApkApi } from "../../../../../../src/API/PremiumApkApi";
import AllSeos from "../../../../../../components/shared/AllSeos";
// import dynamic from "next/dynamic";

interface Props {
    apk: Array<ApkData>;
    allApkLength: number,
    categoryValue: string | string[] ,
    page: number,
    subCat:string | string[] 
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;

    const categorySearch = query.categorySearch;
    const subCat = query.subCat;
    const page = parseInt(query.page as string);

    if (!categorySearch || !subCat || !page || isNaN(page) || page < 1) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const categoryString = Array.isArray(categorySearch) ? categorySearch[0].toString() : categorySearch.toString();
    const subcategory = Array.isArray(subCat) ? subCat[0].toString() : subCat.toString();
    const pageNum = page;

    try {
        const { res, err }: { res?: { categorizedApk: Array<ApkData>, apkAllDataLengthCategorized: number }, err?: any } = await PremiumApkApi.getAllCategorizedApk(categoryString, pageNum,subcategory);

        if (err) {
            console.log(err);
            ToastMessage.notifyError("Server Error");
        }

        let apk = res?.categorizedApk || [];
        const allApkLength = res?.apkAllDataLengthCategorized || 0;

        
        if (apk.length === 0) {
         apk = [
        {
            message: "No Data"
        }
         ]
        }

        return {
            props: {
                apk,
                allApkLength,
                categoryValue: categoryString,
                page: pageNum >= 1 ? pageNum : 1,
                subCat:subcategory
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                apk: [],
                allApkLength: 0,
                categoryValue: "",
                page: 1,
                subCat: ""
            }
        }
    }
}

const Index: React.FC<Props> = ({ apk, allApkLength, categoryValue, page, subCat }) => {
    return (<>
        <AllSeos type={`${categoryValue.toString()} | ${subCat.toString()}`} />
        <CategorySubPaginated apk={apk} allApkLength={allApkLength} categoryValue={categoryValue} page={page} subCat={subCat} />
    </>)
};

export default Index;






// // import CategoryPagePaginated from "../../../../../../components/pages/CatagoryPage/CategoryPagePaginated";

// import { GetServerSidePropsContext } from "next";
// import CategorySubPaginated from "../../../../../../components/pages/CategorySubPage/CategorySubPaginated";
// import { ApkData } from "../../../../../../interfaces/models";
// import { ToastMessage } from "../../../../../../src/utils/ToastMessage";
// import { PremiumApkApi } from "../../../../../../src/API/PremiumApkApi";

// interface Props {
//     apk: Array<ApkData>;
//     allApkLength: number,
//     categoryValue: string | string[] ,
//     page: number,
//     subCat:string | string[] 
// }


// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const { query } = context;
//     // const {subCat} =context.si

//     const categorySearch = query.categorySearch;
//     const subCat = query.subCat;
//     const page = parseInt(query.page as string);

//     if (!categorySearch || !subCat || !page || isNaN(page) || page < 1) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     }

//     const categoryString = Array.isArray(categorySearch) ? categorySearch[0].toString() : categorySearch.toString();
//     const subcategory = Array.isArray(subCat) ? subCat[0].toString() : subCat.toString();
//     const pageNum = page;

//     const { res, err } = await PremiumApkApi.getAllCategorizedApk(categoryString, pageNum,subcategory);

//     if (err) {
//         console.log(err);
//         ToastMessage.notifyError("Server Error");
//     }

//     const apk = res?.categorizedApk || [];
//     const allApkLength = res?.apkAllDataLengthCategorized || 0;

//     return {
//         props: {
//             apk,
//             allApkLength,
//             categoryValue: categoryString,
//             page: pageNum >= 1 ? pageNum : 1,
//             subCat:subcategory
//         },
//     };
// }



// const index: React.FC<Props> = ({ apk, allApkLength, categoryValue, page, subCat }) => {
//     return <CategorySubPaginated apk={apk} allApkLength={allApkLength} categoryValue={categoryValue} page={page} subCat={subCat} />
// };

// export default index;
