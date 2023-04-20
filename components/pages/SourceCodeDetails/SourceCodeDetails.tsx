import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useRouter } from 'next/router'
import Header from '../../shared/Header/Header'
import Search from '../../Search/Search'
import SourceCodeDetailsLayout from './SourceCodeLayout/SourceCodeDetailsLayout'

interface Props {
}

const SourceCodeDetails: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const router = useRouter();
    const { sourceCodeId } = router.query;

    return (
        <>
            <Header />
            <Search />
            <SourceCodeDetailsLayout sourceCodeId={sourceCodeId} />
        </>
    )
}

export default SourceCodeDetails