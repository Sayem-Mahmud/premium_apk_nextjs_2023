import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Header from '../../shared/Header/Header'
import Search from '../../Search/Search'
import { useRouter } from 'next/router'

interface Props {
}

const DownloadPage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const router = useRouter();
    const { downloadId } = router.query;

    useEffect(() => {
        if (states.seconds > 0) {
            setTimeout(() => controller.setState({ seconds: states.seconds - 1 }), 1000);
        } else {
            controller.setState({ showData: true });
        }
    }, [states.seconds]);

    return (
        <>
            <Header />
            <Search />
            <div className='flex flex-col container-x justify-center items-center py-5'>
                <p>{downloadId}</p>
                <div>
                    {states.showData ? (
                        <div className='flex flex-col gap-10 items-center'>
                            <div>
                                <p>Your Download Links</p>
                            </div>
                            <div>
                                <span>Contents</span>
                            </div>
                        </div>
                    ) : (
                        <div className='text-white rounded-[50%] py-7 px-9 bg-psclightteal'>
                            <p className='text-xl font-semibold'>{states.seconds}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default DownloadPage