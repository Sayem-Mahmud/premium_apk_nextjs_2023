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
    apk: Array<ApkData>,
    searchValueApkLength: number,
    page:number,
    searchValue: string |string[]
}

const SearchPagePaginated: React.FC<Props> = ({apk,searchValueApkLength,page,searchValue}) => {
    const states = useSelector(() => controller.states)
    // const [apk, setApk] = useState<Array<ApkData>>([]);
    const router = useRouter();
    // const { page, pageSearch } = router.query;
    states.totalApk =searchValueApkLength
    states.currentPage = page >= 1 ? page : 1
    states.searchValue = searchValue.toString()



    // const fetchCodeData = async (searchVal: string, pageNum: number) => {
    //     const { res, err } = await PremiumApkApi.getAllApkSearch(searchVal, pageNum);
    //     if (err) {
    //         console.log(err);
    //         ToastMessage.notifyError("Server Error");
    //     }
    //     //@ts-ignore
    //     setApk(res?.apkAllDataSearch)
    //     states.totalApk = res?.apkAllDataLengthSearch
    //     states.currentPage = pageNum >= 1 ? pageNum : 1
    //     states.searchValue = searchVal
    //     // states.catSubValue=res.catSub
    // }
    // useEffect(() => {
    //     if (pageSearch && page) {
    //         const searchC = pageSearch.toString()
    //         const pageNum = (parseInt(page.toString()))
    //         if (pageNum >= 1 && searchC !== '') {
    //             fetchCodeData(searchC, pageNum)
    //         }
    //         else {
    //             window.location.href = '/';
    //         }

    //     }

    // }, [pageSearch, page])

    return <>
        {apk?.length > 0 ? <div>
            <Search />
            <SearchLayout
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
}

export default SearchPagePaginated