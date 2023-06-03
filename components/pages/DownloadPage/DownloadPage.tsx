import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Header from '../../shared/Header/Header'
import Search from '../../Search/Search'
import { useRouter } from 'next/router'
import { PremiumApkApi} from '../../../src/API/PremiumApkApi'
import { ToastMessage } from '../../../src/utils/ToastMessage'
import Link from 'next/link'
import { ApkData } from '../../../interfaces/models'

interface Props {
    apk:ApkData
}

const DownloadPage: React.FC<Props> = ({apk}) => {

       const states = useSelector(() => controller.states)

    const [seconds, setSeconds] = useState(10);
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((prevSeconds: any) => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        if (seconds <= 0) {
            setShowData(true);
        }
    }, [seconds]);


    // const splitUrlName = useMemo(() => {
    //     return (url: string) => {
    //         let domain = url.split("://")[1];
    //         if (domain.startsWith("www.")) {
    //             domain = domain.substring(4);
    //         }
    //         const parts = domain.split(".");
    //         const result = parts[0];
    //         return result;
    //     };
    // }, []);



    return (
        <>
            <Search />
            <div className='my-5'>
                <div className='flex flex-col container-x justify-center items-center py-10 gap-10'>
                    {showData ? (
                        <div className='h-[70vh] '>
                            <div className='flex justify-center items-center text-xl lg:text-2xl text-pscblack text-center'>
                                <p>Your Download Links</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                            <div>
                                {
                                    apk?.downloadFile?.map((item:any, index:any) => {
                                        return (
                                        <div>
                                         { item?.href &&  <div key={index} className=' my-[10px] flex flex-col gap-5 items-center text-black bg-white border-solid border-2 border-black cursor-pointer '>
                                                <Link href={item?.href} className='capitalize w-full text-center' target='_blank' >{item.innerText}</Link>
                                            </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                                  {apk?.requiredAndroid && <span className="text-[20px] text-[#8F8F8F]"><span className="text-[#dc0101]">Required Android:</span> {apk?.requiredAndroid}</span>}
                            </div>
                            </div>

                        </div>

                    ) : (
                        <div className='flex flex-col container-x justify-start items-center py-10 gap-10 h-[70vh]'>
                            <div className='flex justify-center items-center text-xl lg:text-2xl text-pscblack text-center'>
                                <p>Your Download Links Are Getting Ready!</p>
                            </div>
                            <div className='text-white rounded-[50%] py-7 px-9 bg-psclightteal'>
                                <p className='text-xl font-semibold'>{seconds}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default DownloadPage