import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { ApkData } from '../../../../interfaces/models'
import RightLayout from '../../HomePage/Layout/RightLayout/RightLayout'
import Loader from '../../../helpers/Loader/Loader'
import LeftLayout from '../../HomePage/Layout/LeftLayout/LeftLayout'

interface Props {
    apk: Array<ApkData>,
}

const CategorySubLayout: React.FC<Props> = ({ apk }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='my-5'>
            <div className="flex flex-col md:flex-row gap-5 container-x">
                {
                    apk.length === 0 ?
                        (
                            <div className="flex justify-center items-start h-[60vh] w-full lg:w-[80%] p-3">
                                <Loader />
                            </div>
                        ) : apk[0].message === "No Data" ?
                            <div className="flex justify-center items-start w-full lg:w-[80%] p-3">
                                <p className="text-psclightblack text-xl lg:text-2xl mt-4 lg:mt-5">No Results Found</p>
                            </div>
                            :
                            <>
                                <div className='flex flex-col gap-4 w-full lg:w-[80%] p-3'>
                                    <div className='text-black'>
                                        <p className='mt-5 text-xl lg:text-2xl text-psclightblack'>Found Results For "<span>Category:{states.categoryValue}"</span></p>
                                        {states.categorySubValue && <div>Subcategory:"{states.categorySubValue}"</div>}
                                    </div>
                                    <LeftLayout
                                        apk={apk}
                                    />
                                </div>
                            </>
                }

                <RightLayout />
            </div>
        </div>
    )
}

export default CategorySubLayout