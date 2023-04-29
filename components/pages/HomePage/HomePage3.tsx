import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { controller } from '../../../src/state/StateController';
import { ApkData } from '../../../interfaces/models';
import { PremiumApkApi } from '../../../src/API/PremiumApkApi';
import Header from '../../shared/Header/Header';
import Search from '../../Search/Search';
import Layout from './Layout/Layout';

export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

interface Props {

}

const HomePage3: React.FC<Props> = () => {
    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { search } = router.query;
   
    

    const fetchCodeData = async (searchVal:string) => {
        console.log('page',searchVal)
        const { res, err } = await PremiumApkApi.getAllApkSearch(searchVal,1);
        if (err) {
            console.log(err);
        }
        //@ts-ignore
        setSourceCodes(res.apkAllDataSearch)
        states.totalApk = res.apkAllDataLengthSearch
        states.currentPage = 1
        states.searchValue=searchVal
    }
    useEffect(() => {
        if (search) {
            const searchC = search.toString()
                fetchCodeData(searchC)
   
        }
    }, [search])

    return <>
        {/* {sourceCodes.length > 0 && */}
        <div>
            {sourceCodes.length === 0 && <div>null</div>}
             <Header />
        <Search sourceCodes={sourceCodes} />
        <Layout
            sourceCodes={sourceCodes}
        />
        </div>
        {/* } */}
       
        
    </>
}

export default HomePage3