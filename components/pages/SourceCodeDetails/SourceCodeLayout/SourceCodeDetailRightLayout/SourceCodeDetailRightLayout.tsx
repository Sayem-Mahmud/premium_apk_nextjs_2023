import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import { Jsondata } from '../../../../../src/utils/Jsondata'
import SmallSourceCodeCard from '../../../HomePage/Layout/RightLayout/SmallSourceCodeCard/SmallSourceCodeCard'
import Loader from '../../../../helpers/Loader/Loader'
import { PremiumApkApi } from '../../../../../src/API/PremiumApkApi'

interface Props {
    sourceCodeId: string | string[] | undefined
}

const SourceCodeDetailRightLayout: React.FC<Props> = ({sourceCodeId}) => {

    const states = useSelector(() => controller.states)
    const [catSub,setCatSub]=useState<Array<any>>([])

    const fetchSingleCodeDetails = async (sourceCodeId: string) => {
        const { res, err } = await PremiumApkApi.getSingleApk(sourceCodeId);
        if (err) {
            console.log(err);
        }
        console.log("res", res);
        // setApk(res.apkOne)
        setCatSub(res.catSub)
    }

    useEffect(() => {
        if (sourceCodeId === undefined) {
            return
        }
        fetchSingleCodeDetails(sourceCodeId as string)
    }, [sourceCodeId])


    return (
       
        <div className='sm:w-full md:w-[25%] md:m-auto pl-[25px] pe-[25px]  bg-[#f9f9f9]' style={{marginTop:'25px', marginBottom:'25px',paddingBottom:'20px'}}>
            <div className='grid grid-cols-1 md:mt-[10px]'>
            <ul style={{listStyle: 'disc',color:'#00AD7F'}}>
                {
                    // Jsondata.blogsTrendingData.map((item) => {
                        setCatSub.length?
                        catSub.map((item) => {
                        return (
                            <SmallSourceCodeCard item={item} />
                        )
                    }
                    ) :
                    <div className="flex justify-center items-start h-[60vh]">
                 <Loader />
                </div>
                }
            </ul>
            </div>
        </div>
    )
}

export default SourceCodeDetailRightLayout