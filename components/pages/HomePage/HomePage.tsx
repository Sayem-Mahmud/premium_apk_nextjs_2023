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

interface Props {

}

const HomePage: React.FC<Props> = () => {
    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<ApkData>>([]);
    const router = useRouter();
    const { page } = router.query;
    // if (!page) {
    //     return
    // }
    

    const fetchCodeData = async () => {
        console.log('page',page)
        const { res, err } = await PremiumApkApi.getAllApk();
        if (err) {
            console.log(err);
        }
        //@ts-ignore
        setSourceCodes(res)
    }
    useEffect(() => {
        fetchCodeData()
    }, [])

    return <>
        <Header />
        <Search sourceCodes={sourceCodes} />
        <Layout
            sourceCodes={sourceCodes}
        />
    </>
}

export default HomePage