import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import Link from 'next/link'
import { PremiumApkApi } from '../../../../../src/API/PremiumApkApi'
import Loader from '../../../../helpers/Loader/Loader'
import { ToastMessage } from '../../../../../src/utils/ToastMessage'
import { ApkData } from '../../../../../interfaces/models'


interface Props {
    apk: ApkData
    sourceCodeId: string | string[] | undefined
}

const SourceCodeDetailLeftLayout: React.FC<Props> = ({apk, sourceCodeId }) => {

    const states = useSelector(() => controller.states)

    // const [apk, setApk] = useState<any>(null)

    // const fetchSingleCodeDetails = async (sourceCodeId: string) => {
    //     const { res, err } = await PremiumApkApi.getSingleApk(sourceCodeId);
    //     if (err) {
    //         console.log(err);
    //         ToastMessage.notifyError("Server Error");
    //     }
    //     console.log("res", res);
    //     setApk(res.apkOne)
    //     // states.catSubValue = res.catSub
    // }


    // useEffect(() => {
    //     if (sourceCodeId === undefined) {
    //         return
    //     }
    //     fetchSingleCodeDetails(sourceCodeId as string)
    // }, [sourceCodeId])
    return (
        // <div className='sm:w-full md:w-[80%] p-3'>
        //     <div className="flex flex-col gap-y-4 rounded"
        //     >
        //         <div className='overflow-hidden cursor-pointer rounded'>
        //             <img src={apk?.imgSrc} alt="" className='bg-gray-400 w-3/4 object-cover transition-all duration-300' />
        //         </div>
        //         <div className='px-4 py-2'>
        //             <div className='flex gap-x-3'>
        //                 <span className="text-[13px] text-[#00AD7F] font-medium">{apk?.categories}</span>
        //                 {/* <span className="text-[13px] text-[#8F8F8F]"></span> */}
        //             </div>
        //             <div>
        //                 <p className='cursor-pointer text-xl text-[#121212]'>{apk?.title}</p>
        //             </div>
        //         </div>
        //         <div className="download-preview-container flex flex-col md:flex-row justify-center gap-10">
        //             <div>
        //                 <Link className='bg-psclightteal py-3 px-5 text-white rounded hover:bg-pscblack' href="/">Preview</Link>
        //             </div>
        //             <div>
        //                 <Link className='bg-psclightteal py-3 px-5 text-white rounded hover:bg-pscblack' href={`/sourceCode/${sourceCodeId}/download/${sourceCodeId}`}>Download</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            {apk ?
                <div className=' rounded my-[20px] bg-[#f9f9f9] flex flex-col  pl-[5px]' style={{padding:'0px 20px 8px 20px'}}>
                    <div className="flex flex-col md:flex-row gap-y-4 " style={{columnGap:'25px'}}
                    >
                        <div className='overflow-hidden cursor-pointer rounded w-[100%] md:w-[20%]'>
                            <img src={apk?.imgSrc} alt="" className='mt-[10px] bg-gray-400 w-[50%] m-auto md:w-52 object-cover scale-[1] hover:scale-[1.1] transition-all duration-300' />
                        </div>
                        <div className='px-4 py-2 w-[100%] md:w-[75%]'>
                            <div className='flex flex-col gap-y-2'>
                                <span className="text-xl text-black font-bold ">{apk?.title && apk?.title}</span>
                                {/* {apk?.categories.split(',').map((cat:any)=>{return ()})} */}
                                <span className="text-[13px] text-[#8F8F8F]"><span className="text-[#0e0d0d]">Catagories:</span> {apk?.categories && apk?.categories}</span>
                                <span className="text-[13px] text-[#8F8F8F]"><span className="text-[#0e0d0d]">Created at:</span> {apk?.created && apk?.created}</span>
                            </div>
                            <div>
                                {/* <span className="text-xl text-[#00AD7F] font-medium">{apk.categories}</span> */}
                                <p title={apk?.title} className='cursor-pointer text-md text-[#121212] '>{apk.allText  && (!apk.allText[1].includes('<img') || !apk.allText[1].includes('src=')) && apk.allText[1]}</p>
                                <div className='mt-3'>
                                    {/* <a href={apk.url} target='_blank' className="text-[13px] text-[#8F8F8F] hover:text-ecodarkgreen">Read the full blog..</a> */}
                                </div>
                            </div>
                        </div>

       
                    </div>
                    <div style={{ margin: "auto", marginTop: '20px', marginBottom: '20px' }}>
                        <Link className='bg-psclightteal  m-[20px auto] text-center py-3 px-5 text-white rounded hover:bg-pscblack' href={`/sourceCode/${sourceCodeId}/download/${sourceCodeId}`}>Download Now</Link>
                    </div>
                    {
                        apk?.allText?.map((text: any) => {
                            return (
                                <>
                                    {(!text.includes('<img') || !text.includes('src=')) &&
                                        < p className='mt-[10px] leading-6 text-black' > {text}</p>
                                    }
                                </>
                            )
                        })
                    }
                    {
                        apk?.imgSrcAll?.map((img: any) => {
                            return (
                                <>
                                    {img !== "" &&
                                        <img src={img} className="" style={{ margin: '10px auto', width: '50%' }} />
                                    }
                            </>
                            )
                        })
                    }

                <div className='flex flex-col gap-y-3'>
                <div style={{ margin: "auto", marginTop: '20px', height:'50px', width:'50%',marginBottom: '20px'}} className='bg-psclightteal text-center rounded hover:bg-pscblack'>
                        <Link className='text-white flex justify-center text-[14px] sm:text-[18px] h-full items-center md:text-[30px] hover:bg-pscblack' href={`/sourceCode/${sourceCodeId}/download/${sourceCodeId}`}>Download Now</Link>
                    </div>
                        {apk?.version && <span className="text-[20px] text-[#8F8F8F]"><span className="text-[#dc0101]">Version:</span> {apk?.version}</span>}
                        {apk?.fileSize && <span className="text-[20px] text-[#8F8F8F]"><span className="text-[#dc0101]">File Size:</span> {apk?.fileSize}</span>}
                        {apk?.developer && <span className="text-[20px] text-[#8F8F8F]"><span className="text-[#dc0101]">Developer:</span> {apk?.developer}</span>}
                            </div>
                </div >
                :  <div className="my-5">
                <div className='container-x bg-white flex justify-center items-start h-[100vh]'>
                    <Loader />
                </div>
            </div>}
        </>
    )
}

export default SourceCodeDetailLeftLayout