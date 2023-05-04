import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useRouter } from 'next/router'
import { ApkData} from '../../../interfaces/models'
import Search from '../../Search/Search'
import CategoryLayout from '../CatagoryPage/CategoryLayout/CategoryLayout'
import Loader from '../../helpers/Loader/Loader'
import { PremiumApkApi } from '../../../src/API/PremiumApkApi'
import { ToastMessage } from '../../../src/utils/ToastMessage'
import CategorySubLayout from '../CatagoryPage/CategorySubLayout/CategorySubLayout'

interface Props {
    apk: Array<ApkData>;
    allApkLength: number,
    categoryValue: string | string[] ,
    page: number,
    subCat:string | string[] 
}

const CategorySubPaginated: React.FC<Props> = ({ apk, allApkLength, categoryValue, page, subCat }) => {

    const states = useSelector(() => controller.states)
    // const [apk, setApk] = useState<Array<ApkData>>([]);
    // const router = useRouter();
    // const { page, categorySearch,subCat } = router.query;


    // setApk(res?.categorizedApk)
        states.totalApk = allApkLength
        // states.catSubValue=res.catSub
        states.currentPage = page >= 1 ? page : 1
        states.categoryValue =categoryValue.toString()
        states.categorySubValue=subCat.toString()

    // const fetchCodeData = async (category: string, pageNum: number, subCat:string) => {
    //     const { res, err } = await PremiumApkApi.getAllCategorizedApk(category, pageNum,subCat);
    //     if (err) {
    //         console.log(err);
    //         ToastMessage.notifyError("Server Error");
    //     }
    //     //@ts-ignore
    //     setApk(res?.categorizedApk)
    //     states.totalApk = res?.apkAllDataLengthCategorized
    //     // states.catSubValue=res.catSub
    //     states.currentPage = pageNum >= 1 ? pageNum : 1
    //     states.categoryValue = category
    //     states.categorySubValue=subCat
    // }
    // useEffect(() => {
    //     if (categorySearch && page && subCat) {
    //         console.log('subcatuu',subCat)
    //         const categoryString = categorySearch.toString()
    //         const pageNum = (parseInt(page.toString()))
    //         // if (pageNum >= 1) {
    //         //     console.log('hello')
    //         //     fetchCodeData(categoryString, pageNum,'')
               
    //         // }
    //         if (pageNum >= 1 && subCat) {
    //             console.log('no');
    //             fetchCodeData(categoryString, pageNum,subCat.toString())
    //         }
    //         else {
    //             window.location.href = '/';
    //         }

    //     }

    // }, [categorySearch, page, subCat])

    return (
        <>
            {apk?.length > 0 ? <div>
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

export default CategorySubPaginated