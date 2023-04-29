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

const HomePage4: React.FC<Props> = () => {
    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { page, pageSearch } = router.query;
   
    

    const fetchCodeData = async (searchVal:string, pageNum:number) => {
        console.log('page',searchVal)
        const { res, err } = await PremiumApkApi.getAllApkSearch(searchVal,pageNum);
        if (err) {
            console.log(err);
        }
        //@ts-ignore
        setSourceCodes(res.apkAllDataSearch)
        states.totalApk = res.apkAllDataLengthSearch
        states.currentPage = pageNum >= 1 ? pageNum : 1
        states.searchValue=searchVal
    }
    useEffect(() => {
        if (pageSearch && page ) {
            const searchC = pageSearch.toString()
            const pageNum = (parseInt(page.toString()))
            console.log('searchC', searchC)
            console.log('searchC',pageNum)
            if (pageNum >= 1 && searchC !=='') {
                fetchCodeData(searchC, pageNum)
            }
            else {
                console.log('grt');
                window.location.href = '/';
            }
   
        }
      
    }, [pageSearch,page])

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

export default HomePage4