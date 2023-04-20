import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../src/state/StateController'
import SourceCodeDetails from '../../components/pages/SourceCodeDetails/SourceCodeDetails'

interface Props {
}

const sourceCodeId: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <SourceCodeDetails />
}

export default sourceCodeId;