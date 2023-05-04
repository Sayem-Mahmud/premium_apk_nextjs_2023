import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { ApkData} from '../../../interfaces/models'
import { useRouter } from 'next/router'
import { PremiumApkApi} from '../../../src/API/PremiumApkApi'
import Search from '../../Search/Search'
import CategoryLayout from '../CatagoryPage/CategoryLayout/CategoryLayout'
import Loader from '../../helpers/Loader/Loader'
import { ToastMessage } from '../../../src/utils/ToastMessage'
import CategorySubLayout from '../CatagoryPage/CategorySubLayout/CategorySubLayout'

interface Props {
    apk: Array<ApkData>;
    categoryValue: string | string[];
    allApkLength: number,
    subCat:string | string[];
}

const CategorySubPage: React.FC<Props> = ({ apk,allApkLength,categoryValue,subCat }) => {

    const states = useSelector(() => controller.states)
    // const [apk, setApk] = useState<Array<ApkData>>([]);
    // const router = useRouter();
    // const { category, subCat } = router.query;
    // setApk(res?.categorizedApk)
    states.totalApk = allApkLength
    states.currentPage = 1
    states.categoryValue = categoryValue.toString()
    states.categorySubValue=subCat.toString()

    // const fetchCodeData = async (category: string,subCat:string) => {
    //     console.log('catSubPage enterd',subCat)
    //     const { res, err } = await PremiumApkApi.getAllCategorizedApk(category, 1,subCat);
    //     if (err) {
    //         console.log(err);
    //         ToastMessage.notifyError("Server Error");
    //     }
    //     //@ts-ignore
    //     if (res?.categorizedApk.length === 0) {
    //         setApk([
    //             {
    //                 message: "No Data"
    //             }
    //         ])
    //         // states.catSubValue=res.catSub
    //     }
    //     else {
    //         setApk(res?.categorizedApk)
    //         states.totalApk = res?.apkAllDataLengthCategorized
    //         states.currentPage = 1
    //         states.categoryValue = category
    //         states.categorySubValue=subCat
    //     }

    // }
    // useEffect(() => {
    //     if (subCat && category) {
    //         console.log('catSubPage')
    //         const categoryString = category.toString()
    //         fetchCodeData(categoryString,subCat.toString())
    //     }
    // }, [category,subCat])

    return (
        <>
            {apk?.length > 0 && subCat ? <div>
                <Search />
                <CategorySubLayout
                    apk={apk}
                />
            </div>
                :
                <div className="my-5">
                    <div className='container-x bg-white flex justify-center items-start h-[100vh]'>
                        <Loader />
                    </div>
                </div>
            }
        </>
    )
}

export default CategorySubPage