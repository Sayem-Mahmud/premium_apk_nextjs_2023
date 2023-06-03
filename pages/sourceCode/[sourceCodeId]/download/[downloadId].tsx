import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import DownloadPage from '../../../../components/pages/DownloadPage/DownloadPage'
import { PremiumApkApi } from '../../../../src/API/PremiumApkApi'
import { GetServerSidePropsContext } from 'next'
import { ApkData } from '../../../../interfaces/models'
import { ToastMessage } from '../../../../src/utils/ToastMessage'
import AllSeos from '../../../../components/shared/AllSeos'

interface Props {
    apk: ApkData
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;

    const downloadId = query.downloadId as string;

    if (!downloadId) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const { res, err } = await PremiumApkApi.getSingleApk(downloadId);

    if (err) {
        console.log(err);
        ToastMessage.notifyError("Server Error");
    }

    let apk = res?.apkOne;
    
    if (!apk) {
         apk={message:'No Data'}
        // return {
        //     redirect: {
        //       destination: '/',
        //       permanent: false,
        //     },
        //   };
    }

    return {
        props: {
            apk,
        },
    };
}

const downloadId: React.FC<Props> = ({apk}) => {

    const states = useSelector(() => controller.states)
    useEffect(() => {
        controller.setState({ seconds: 10 })
    },[])
    return(<>
        <AllSeos type={`${apk.title} ${apk?.categories}`} />
        <DownloadPage apk={apk} />
        </>)
}

export default downloadId