import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import {ApkData } from '../../../../interfaces/models'
import Loader from '../../../helpers/Loader/Loader'
import LeftLayout from '../../HomePage/Layout/LeftLayout/LeftLayout'
import RightLayout from '../../HomePage/Layout/RightLayout/RightLayout'

interface Props {
    sourceCodes: Array<ApkData>,
}

const SearchLayout: React.FC<Props> = ({ sourceCodes }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='my-5'>
            <div className="flex flex-col md:flex-row gap-5 container-x">
                {
                    sourceCodes.length === 0 ?
                        (
                            <div className="flex justify-center items-start h-[60vh] sm:w-full md:w-[80%] p-3">
                                <Loader />
                            </div>
                        ) : sourceCodes[0].message === "No Data" ?
                            <div className="flex justify-center items-start  sm:w-full md:w-[80%] p-3">
                                <p className="text-psclightblack text-2xl mt-2">No Results Found</p>
                            </div>
                            :
                            <>
                                <div className='flex flex-col gap-4 sm:w-full md:w-[80%] p-3'>
                                    <div className=''>
                                        <p className='mt-5 text-2xl'>Found Results For "<span>{states.searchValue}</span>"</p>
                                    </div>
                                    <LeftLayout
                                        sourceCodes={sourceCodes}
                                    />
                                </div>
                            </>
                }

                <RightLayout />
            </div>
        </div>
    )
}

export default SearchLayout