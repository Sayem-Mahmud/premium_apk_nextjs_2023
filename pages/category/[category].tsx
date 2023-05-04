import { GetServerSidePropsContext } from "next";
import CategoryPage from "../../components/pages/CatagoryPage/CategoryPage";
import { ApkData } from "../../interfaces/models";
import { PremiumApkApi } from "../../src/API/PremiumApkApi";
import { ToastMessage } from "../../src/utils/ToastMessage";


interface Props {
    apk: Array<ApkData>;
    categoryValue: string | string[];
    allApkLength: number
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { category } = context.query;

    if (!category) {
        return
    }
    const { res, err } = await PremiumApkApi.getAllCategorizedApk(category.toString(), 1,'');

    if (err) {
        console.log(err);
        ToastMessage.notifyError("Server Error");
    }

    let apk = res?.categorizedApk || [];

    if (apk.length === 0) {
        apk = [
            {
                message: "No Data"
            }
        ]
    }
    const allApkLength = res?.apkAllDataLengthCategorized;

    return {
        props: {
            apk: apk,
            categoryValue: category,
            allApkLength: allApkLength
        }
    };
}


const index: React.FC<Props> = ({apk,categoryValue,allApkLength}) => {
    return <CategoryPage apk={apk} categoryValue={categoryValue} allApkLength={allApkLength}  />
};

export default index;
