import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import Link from 'next/link'
import { PremiumApkApi } from '../../../../../src/API/PremiumApkApi'

interface Props {
    sourceCodeId: string | string[] | undefined
}

const SourceCodeDetailLeftLayout: React.FC<Props> = ({ sourceCodeId }) => {

    const states = useSelector(() => controller.states)

    const [apk, setApk] = useState<any>(null)

    const fetchSingleCodeDetails = async (sourceCodeId: string) => {
        const { res, err } = await PremiumApkApi.getSingleApk(sourceCodeId);
        if (err) {
            console.log(err);
        }
        console.log("res", res);
        setApk(res)
    }


    useEffect(() => {
        if (sourceCodeId === undefined) {
            return
        }
        fetchSingleCodeDetails(sourceCodeId as string)
    }, [sourceCodeId])
    return (
        <div className='sm:w-full md:w-[80%] p-3'>
            <div className="flex flex-col gap-y-4 rounded"
            >
                <div className='overflow-hidden cursor-pointer rounded'>
                    <img src={apk?.imgSrc} alt="" className='bg-gray-400 w-3/4 object-cover transition-all duration-300' />
                </div>
                <div className='px-4 py-2'>
                    <div className='flex gap-x-3'>
                        <span className="text-[13px] text-[#00AD7F] font-medium">{apk?.categories}</span>
                        {/* <span className="text-[13px] text-[#8F8F8F]"></span> */}
                    </div>
                    <div>
                        <p className='cursor-pointer text-xl text-[#121212]'>{apk?.title}</p>
                    </div>
                </div>
                <div className="download-preview-container flex flex-col md:flex-row justify-center gap-10">
                    <div>
                        <Link className='bg-psclightteal py-3 px-5 text-white rounded hover:bg-pscblack' href="/">Preview</Link>
                    </div>
                    <div>
                        <Link className='bg-psclightteal py-3 px-5 text-white rounded hover:bg-pscblack' href={`/sourceCode/${sourceCodeId}/download/${sourceCodeId}`}>Download</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SourceCodeDetailLeftLayout