import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import LeftLayout from './LeftLayout/LeftLayout'
import RightLayout from './RightLayout/RightLayout'
import { ApkData } from '../../../../interfaces/models'

interface Props {
    sourceCodes: Array<ApkData>
}

const Layout: React.FC<Props> = ({ sourceCodes }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='my-5'>
            <div className="flex flex-col md:flex-row md:gap-x-[1rem] gap-y-3 container-x">
                <div className='w-full md:w-[75%] p-1'>
                <LeftLayout
                    sourceCodes={sourceCodes}
                    />
                    </div>
                <RightLayout />
            </div>
        </div>
    )
}

export default Layout