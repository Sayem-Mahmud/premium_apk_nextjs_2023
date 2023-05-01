import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { controller } from '../../../src/state/StateController';
import Search from '../../Search/Search';
import { ApkData } from '../../../interfaces/models';
import Loader from '../../helpers/Loader/Loader';
import SearchLayout from './SearchLayout/SearchLayout';
import { PremiumApkApi } from '../../../src/API/PremiumApkApi';
import { ToastMessage } from '../../../src/utils/ToastMessage';

export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

interface Props {

}

const SearchPagePaginated: React.FC<Props> = () => {
    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { page, pageSearch } = router.query;



    const fetchCodeData = async (searchVal: string, pageNum: number) => {
        const { res, err } = await PremiumApkApi.getAllApkSearch(searchVal, pageNum);
        if (err) {
            console.log(err);
            ToastMessage.notifyError("Server Error");
        }
        //@ts-ignore
        setSourceCodes(res?.apkAllDataSearch)
        states.totalApk = res?.apkAllDataLengthSearch
        states.currentPage = pageNum >= 1 ? pageNum : 1
        states.searchValue = searchVal
        states.catSubValue=res.catSub
    }
    useEffect(() => {
        if (pageSearch && page) {
            const searchC = pageSearch.toString()
            const pageNum = (parseInt(page.toString()))
            if (pageNum >= 1 && searchC !== '') {
                fetchCodeData(searchC, pageNum)
            }
            else {
                window.location.href = '/';
            }

        }

    }, [pageSearch, page])

    return <>
        {sourceCodes?.length > 0 ? <div>
            <Search />
            <SearchLayout
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
}

export default SearchPagePaginated