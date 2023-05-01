import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { ApkData} from '../../../interfaces/models'
import { useRouter } from 'next/router'
import { PremiumApkApi} from '../../../src/API/PremiumApkApi'
import Search from '../../Search/Search'
import CategoryLayout from './CategoryLayout/CategoryLayout'
import Loader from '../../helpers/Loader/Loader'
import { ToastMessage } from '../../../src/utils/ToastMessage'

interface Props {
}

const CategoryPage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { category } = router.query;


    const fetchCodeData = async (category: string) => {

        const { res, err } = await PremiumApkApi.getAllCategorizedApk(category, 1);
        if (err) {
            console.log(err);
            ToastMessage.notifyError("Server Error");
        }
        //@ts-ignore
        if (res?.categorizedApk.length === 0) {
            setSourceCodes([
                {
                    message: "No Data"
                }
            ])
            states.catSubValue=res.catSub
        }
        else {
            setSourceCodes(res?.categorizedApk)
            states.totalApk = res?.apkAllDataLengthCategorized
            states.currentPage = 1
            states.categoryValue = category
        }

    }
    useEffect(() => {
        if (category) {
            const categoryString = category.toString()
            fetchCodeData(categoryString)

        }
    }, [category])

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

export default CategoryPage