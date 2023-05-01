import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import SourceCodeDetailLeftLayout from './SourceCodeDetailLeftLayout/SourceCodeDetailLeftLayout'
import SourceCodeDetailRightLayout from './SourceCodeDetailRightLayout/SourceCodeDetailRightLayout'

interface Props {
    sourceCodeId: string | string[] | undefined
}

const SourceCodeDetailsLayout: React.FC<Props> = ({ sourceCodeId }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='my-5'>
            <div className="flex flex-col md:flex-row md:gap-x-[1rem] gap-y-3 container-x">
                <div className='w-full md:w-[75%] p-1'>
                <SourceCodeDetailLeftLayout
                    // sourceCodes={sourceCodes}
                    sourceCodeId={sourceCodeId}
                    />
                    </div>
                <SourceCodeDetailRightLayout sourceCodeId={sourceCodeId}/>
            </div>
        </div>
    )
}

export default SourceCodeDetailsLayout