import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { controller } from '../../../src/state/StateController';
import { ApkData } from '../../../interfaces/models';
import { PremiumApkApi } from '../../../src/API/PremiumApkApi';
import Header from '../../shared/Header/Header';
import Search from '../../Search/Search';
import Layout from './Layout/Layout';
import Loader from '../../helpers/Loader/Loader';
import { ToastMessage } from '../../../src/utils/ToastMessage';

export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

interface Props {

}

const HomePage2: React.FC<Props> = () => {
    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { page } = router.query;
   
    

    const fetchCodeData = async (pageNumber:number) => {
        console.log('page',pageNumber)
        const { res, err } = await PremiumApkApi.getAllApk(pageNumber);
        if (err) {
            console.log(err);
            ToastMessage.notifyError("Server Error");
        }
        //@ts-ignore
        setSourceCodes(res.apkAllData)
        states.totalApk = res.apkAllDataLength
        states.catSubValue= res.catSub
        states.currentPage=pageNumber>=1?pageNumber:1
    }
    useEffect(() => {
        if (page) {
            const pageNum = (parseInt(page.toString()))
            if (pageNum >= 1) {
              const pageNumber = pageNum
                fetchCodeData(pageNumber)
            }
            else {
                window.location.href = '/';
            }
        }
    }, [page])

    return <>
        {sourceCodes.length > 0 ? <div>
             {/* <Header /> */}
        <Search sourceCodes={sourceCodes} />
        <Layout
            sourceCodes={sourceCodes}
        />
        </div>
         :
         <div className="my-5">
             <div className='container-x bg-white flex justify-center items-start h-[100vh]'>
                 <Loader />
             </div>
         </div>}
       
        
    </>
}

export default HomePage2