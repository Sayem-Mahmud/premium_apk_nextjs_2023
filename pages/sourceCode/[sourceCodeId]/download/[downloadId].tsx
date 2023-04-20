import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import DownloadPage from '../../../../components/pages/DownloadPage/DownloadPage'

interface Props {
}

const downloadId: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <DownloadPage />
}

export default downloadId