import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { ApkData } from '../../../../interfaces/models'
import RightLayout from '../../HomePage/Layout/RightLayout/RightLayout'
import Loader from '../../../helpers/Loader/Loader'
import LeftLayout from '../../HomePage/Layout/LeftLayout/LeftLayout'

interface Props {
    sourceCodes: Array<ApkData>,
}

const CategoryLayout: React.FC<Props> = ({ sourceCodes }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='my-5'>
            <div className="flex flex-col md:flex-row gap-5 container-x">
                {
                    sourceCodes.length === 0 ?
                        (
                            <div className="flex justify-center items-start h-[60vh] w-full lg:w-[80%] p-3">
                                <Loader />
                            </div>
                        ) : sourceCodes[0].message === "No Data" ?
                            <div className="flex justify-center items-start w-full lg:w-[80%] p-3">
                                <p className="text-psclightblack text-xl lg:text-2xl mt-4 lg:mt-5">No Results Found</p>
                            </div>
                            :
                            <>
                                <div className='flex flex-col gap-4 w-full lg:w-[80%] p-3'>
                                    <div className=''>
                                        <p className='mt-5 text-xl lg:text-2xl text-psclightblack'>Found Results For "<span>{states.categoryValue}</span>"</p>
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

export default CategoryLayout