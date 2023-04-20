import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import { Jsondata } from '../../../../../src/utils/Jsondata'
import SmallSourceCodeCard from '../../../HomePage/Layout/RightLayout/SmallSourceCodeCard/SmallSourceCodeCard'

interface Props {
}

const SourceCodeDetailRightLayout: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='sm:w-full md:w-[20%] p-3'>
            <div className='grid grid-cols-1 gap-y-10 md:gap-y-10'>
                {
                    Jsondata.blogsTrendingData.map((item) => {
                        return (
                            <SmallSourceCodeCard item={item} />
                        )

                    }
                    )}
            </div>
        </div>
    )
}

export default SourceCodeDetailRightLayout