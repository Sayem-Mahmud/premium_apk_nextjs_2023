import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { controller } from '../../../src/state/StateController';
import Search from '../../Search/Search';
import { ApkData } from '../../../interfaces/models';
import { PremiumApkApi } from '../../../src/API/PremiumApkApi';
import Loader from '../../helpers/Loader/Loader';
import SearchLayout from './SearchLayout/SearchLayout';
import { ToastMessage } from '../../../src/utils/ToastMessage';

export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

interface Props {

}

const SearchPage: React.FC<Props> = () => {
    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { search } = router.query;



    const fetchCodeData = async (searchVal: string) => {

        const { res, err } = await PremiumApkApi.getAllApkSearch(searchVal, 1);
        if (err) {
            console.log(err);
            ToastMessage.notifyError("Server Error");
        }
        //@ts-ignore
        if (res?.apkAllDataSearch.length === 0) {
            setSourceCodes([
                {
                    message: "No Data"
                }
            ])
            states.catSubValue= res.catSub
        }
        else {
            setSourceCodes(res?.apkAllDataSearch)
            states.totalApk = res?.apkAllDataLengthSearch
            states.currentPage = 1
            states.searchValue = searchVal
            states.catSubValue= res.catSub
        }

    }
    useEffect(() => {
        if (search) {
            const searchC = search.toString()
            fetchCodeData(searchC)

        }
    }, [search])

    return <>

        <div>
            <Search />
            <SearchLayout
                sourceCodes={sourceCodes}
            />
        </div>

    </>
}

export default SearchPage