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
            <div className="flex gap-5 container-x">
                <SourceCodeDetailLeftLayout
                    // sourceCodes={sourceCodes}
                    sourceCodeId={sourceCodeId}
                />
                <SourceCodeDetailRightLayout />
            </div>
        </div>
    )
}

export default SourceCodeDetailsLayout