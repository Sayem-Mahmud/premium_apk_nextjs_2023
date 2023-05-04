import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import SourceCodeDetailLeftLayout from './SourceCodeDetailLeftLayout/SourceCodeDetailLeftLayout'
import SourceCodeDetailRightLayout from './SourceCodeDetailRightLayout/SourceCodeDetailRightLayout'
import { ApkData } from '../../../../interfaces/models'
import Loader from '../../../helpers/Loader/Loader'

interface Props {
    apk:ApkData
    sourceCodeId: string | string[] | undefined
}

const SourceCodeDetailsLayout: React.FC<Props> = ({ apk,sourceCodeId }) => {

    const states = useSelector(() => controller.states)

    return (
        <>{apk ?
            <div className='my-5'>
            <div className="flex flex-col md:flex-row md:gap-x-[1rem] gap-y-3 container-x">
                <div className='w-full md:w-[75%] p-1'>
                        <SourceCodeDetailLeftLayout
                            apk={apk}
                    // sourceCodes={sourceCodes}
                    sourceCodeId={sourceCodeId}
                    />
                    </div>
                <SourceCodeDetailRightLayout />
            </div>
        </div>
            :
            <div className="my-5">
            <div className='container-x bg-white flex justify-center items-start h-[100vh]'>
                <Loader />
            </div>
        </div>
            }</>
       
    )
}

export default SourceCodeDetailsLayout