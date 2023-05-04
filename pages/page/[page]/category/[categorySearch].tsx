import { GetServerSidePropsContext } from "next";
import CategoryPagePaginated from "../../../../components/pages/CatagoryPage/CategoryPagePaginated";
import { ApkData } from "../../../../interfaces/models";
import { PremiumApkApi } from "../../../../src/API/PremiumApkApi";
import { ToastMessage } from "../../../../src/utils/ToastMessage";


interface Props {
    apk: Array<ApkData>;
    allApkLength: number,
    categoryValue: string | string[] ,
    page: number,
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;

    const categorySearch = query.categorySearch;
    const page = parseInt(query.page as string);

    if (!categorySearch || !page || isNaN(page) || page < 1) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const categoryString = Array.isArray(categorySearch) ? categorySearch[0].toString() : categorySearch.toString();
    const pageNum = page;

    const { res, err } = await PremiumApkApi.getAllCategorizedApk(categoryString, pageNum,'');

    if (err) {
        console.log(err);
        ToastMessage.notifyError("Server Error");
    }

    const apk = res?.categorizedApk || [];
    const allApkLength = res?.apkAllDataLengthCategorized || 0;

    return {
        props: {
            apk,
            allApkLength,
            categoryValue: categoryString,
            page: pageNum >= 1 ? pageNum : 1,
        },
    };
}


const index: React.FC<Props> = ({ apk,allApkLength,categoryValue,page }) => {
    return <CategoryPagePaginated apk={apk} allApkLength={allApkLength} categoryValue={categoryValue} page={page } />
};

export default index;
