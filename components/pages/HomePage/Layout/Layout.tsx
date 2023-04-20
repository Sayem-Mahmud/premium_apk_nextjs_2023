import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import LeftLayout from './LeftLayout/LeftLayout'
import RightLayout from './RightLayout/RightLayout'

interface Props {
    sourceCodes: Array<any>
}

const Layout: React.FC<Props> = ({ sourceCodes }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='my-5'>
            <div className="flex gap-5 container-x">
                <LeftLayout
                    sourceCodes={sourceCodes}
                />
                <RightLayout />
            </div>
        </div>
    )
}

export default Layout