import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useRouter } from 'next/router'
import { ApkData} from '../../../interfaces/models'
import Search from '../../Search/Search'
import CategoryLayout from './CategoryLayout/CategoryLayout'
import Loader from '../../helpers/Loader/Loader'
import { PremiumApkApi } from '../../../src/API/PremiumApkApi'
import { ToastMessage } from '../../../src/utils/ToastMessage'

interface Props {
}

const CategoryPagePaginated: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { page, categorySearch } = router.query;

    const fetchCodeData = async (category: string, pageNum: number) => {
        const { res, err } = await PremiumApkApi.getAllCategorizedApk(category, pageNum);
        if (err) {
            console.log(err);
            ToastMessage.notifyError("Server Error");
        }
        //@ts-ignore
        setSourceCodes(res?.categorizedApk)
        states.totalApk = res?.apkAllDataLengthCategorized
        states.catSubValue=res.catSub
        states.currentPage = pageNum >= 1 ? pageNum : 1
        states.categoryValue= category
    }
    useEffect(() => {
        if (categorySearch && page) {
            const categoryString = categorySearch.toString()
            const pageNum = (parseInt(page.toString()))
            if (pageNum >= 1 && categoryString !== '') {
                fetchCodeData(categoryString, pageNum)
            }
            else {
                window.location.href = '/';
            }

        }

    }, [categorySearch, page])

    return (
        <>
            {sourceCodes?.length > 0 ? <div>
                <Search />
                <CategoryLayout
                    sourceCodes={sourceCodes}
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

export default CategoryPagePaginated