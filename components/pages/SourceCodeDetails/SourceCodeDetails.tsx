import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useRouter } from 'next/router'
import Header from '../../shared/Header/Header'
import Search from '../../Search/Search'
import SourceCodeDetailsLayout from './SourceCodeLayout/SourceCodeDetailsLayout'
import { ApkData } from '../../../interfaces/models'
import Loader from '../../helpers/Loader/Loader'

interface Props {
    apk: ApkData
    sourceCodeId: string | string[] | undefined
}

const SourceCodeDetails: React.FC<Props> = ({apk, sourceCodeId}) => {

    const states = useSelector(() => controller.states)
    const router = useRouter();
   
    return (
        <>
            {sourceCodeId ? <>
                <Search />
                <SourceCodeDetailsLayout apk={apk} sourceCodeId={sourceCodeId} />
            </>
                :
                <div className="my-5">
                    <div className='container-x bg-white flex justify-center items-start h-[100vh]'>
                        <Loader />
                    </div>
                </div>
            }
        </>
    )
}

export default SourceCodeDetails