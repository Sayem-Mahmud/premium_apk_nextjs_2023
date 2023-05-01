import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Header from '../../shared/Header/Header'
import Search from '../../Search/Search'
import { useRouter } from 'next/router'
import { PremiumApkApi} from '../../../src/API/PremiumApkApi'
import { ToastMessage } from '../../../src/utils/ToastMessage'

interface Props {
}

const DownloadPage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const router = useRouter();
    const { downloadId } = router.query;

    const [apk, setApk] = useState<any>(null)

    const fetchSingleCodeDetails = async (downloadId: string) => {
        const { res, err } = await PremiumApkApi.getSingleApk(downloadId);
        if (err) {
            console.log(err);
            ToastMessage.notifyError("Server Error");
        }
        console.log("resCode", res);
        setApk(res.apkOne)
    }

    const splitUrlName = (url: string) => {
        console.log("🚀 ~ file: DownloadPage.tsx:30 ~ splitUrlName ~ url:", url)

        let domain = url.split("://")[1]; // get the domain by splitting at "://"
        if (domain.startsWith("www.")) {
            domain = domain.substring(4); // remove "www." if it exists
        }
        const parts = domain.split("."); // split at the first dot
        const result = parts[0]; // get the first part
        console.log(result); // prints "workupload"
        return result
    }


    useEffect(() => {
        if (downloadId === undefined) {
            return
        }
        fetchSingleCodeDetails(downloadId as string)
    }, [downloadId])

    useEffect(() => {
        if (states.seconds > 0) {
            setTimeout(() => controller.setState({ seconds: states.seconds - 1 }), 1000);
        } else {
            controller.setState({ showData: true });
        }
    }, [states.seconds]);

    return (
        <>
            {/* <Header /> */}
            <Search />
            <div className='flex flex-col container-x justify-center items-center py-5 '>
                <p>{downloadId}</p>
                <div>
                    {states.showData ? (
                        <div className='flex flex-col gap-10 items-center '>
                            <div>
                                <p>Your Download Links</p>
                            </div>
                            <div>
                                {
                                    apk?.downloadFile.map((item:any, index:any) => {
                                        return (
                                            <div key={index} className=' my-[10px] flex flex-col gap-5 items-center text-black bg-white hover:bg-black  border-solid border-2 border-black cursor-pointer '>
                                                <a href={item?.href} className='capitalize hover:bg-none ' download>{item.innerText}</a>
                                            </div>
                                        )
                                    })
                                }
                                  {apk?.requiredAndroid && <span className="text-[20px] text-[#8F8F8F]"><span className="text-[#dc0101]">Required Android:</span> {apk?.requiredAndroid}</span>}
                            </div>
                        </div>
                    ) : (
                        <div className='text-white rounded-[50%] py-7 px-9 bg-psclightteal'>
                            <p className='text-xl font-semibold'>{states.seconds}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default DownloadPage