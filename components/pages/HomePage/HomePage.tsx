import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Header from '../../shared/Header/Header'
import Layout from './Layout/Layout'
import { Jsondata } from '../../../src/utils/Jsondata'
import Search from '../../Search/Search'
import { PremiumApkApi } from '../../../src/API/PremiumApkApi'
import { ApkData } from '../../../interfaces/models'
import { useRouter } from 'next/router'
import Loader from '../../helpers/Loader/Loader'
import { ToastMessage } from '../../../src/utils/ToastMessage'


interface Props {
    apk: Array<ApkData>;
    allApkLength: number
  }

const HomePage: React.FC<Props> = ({apk,allApkLength}) => {
    const states = useSelector(() => controller.states)
    // const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    states.totalApk = allApkLength
    states.currentPage=1
    

    // const fetchCodeData = async (pageNumber:number) => {
    //     console.log('page',pageNumber)
    //     const { res, err } = await PremiumApkApi.getAllApk(pageNumber);
    //     if (err) {
    //         console.log(err);
    //         ToastMessage.notifyError("Server Error");
    //     }
    //     //@ts-ignore
    //     states.sourceCode=res.apkAllData
    //     setSourceCodes(res.apkAllData)
    //     // states.catSubValue=res.catSub
    //     states.totalApk = res.apkAllDataLength
    //     states.currentPage=1
    // }
    // useEffect(() => {
    //         fetchCodeData(1)
    // }, [])

    return <>
        {apk?.length > 0 ? <div>
            <Search
                apk={apk} />
        <Layout
            apk={apk}
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

export default HomePage