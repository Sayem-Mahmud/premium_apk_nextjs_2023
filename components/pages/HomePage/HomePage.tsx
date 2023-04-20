import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Header from '../../shared/Header/Header'
import Layout from './Layout/Layout'
import { Jsondata } from '../../../src/utils/Jsondata'
import Search from '../../Search/Search'

interface Props {
}

const HomePage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const [sourceCodes, setSourceCodes] = useState<Array<any>>([]);

    useEffect(() => {
        setSourceCodes(Jsondata.blogsData)
    }, [])

    return <>
        <Header />
        <Search sourceCodes={sourceCodes} />
        <Layout
            sourceCodes={sourceCodes}
        />
    </>
}

export default HomePage