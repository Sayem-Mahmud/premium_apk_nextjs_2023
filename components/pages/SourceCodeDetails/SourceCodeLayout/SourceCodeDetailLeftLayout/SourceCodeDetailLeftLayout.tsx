import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import Link from 'next/link'

interface Props {
    sourceCodeId: string | string[] | undefined
}

const SourceCodeDetailLeftLayout: React.FC<Props> = ({ sourceCodeId }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='sm:w-full md:w-[80%] p-3'>
            <div className="flex flex-col gap-y-4 rounded"
            >
                <div className='overflow-hidden cursor-pointer rounded'>
                    <img src="https://www.nulledtemplates.com/wp-content/uploads/Romancy-Hotel-Booking-WordPress-Theme-39375460.jpg" alt="" className='bg-gray-400 w-3/4 object-cover transition-all duration-300' />
                </div>
                <div className='px-4 py-2'>
                    <div className='flex gap-x-3'>
                        <span className="text-[13px] text-[#00AD7F] font-medium">Wordpress</span>
                        {/* <span className="text-[13px] text-[#8F8F8F]"></span> */}
                    </div>
                    <div>
                        <p className='cursor-pointer text-xl text-[#121212]'>Romancy – Hotel Booking WordPress Theme – 39375460</p>
                    </div>
                </div>
                <div className="download-preview-container flex flex-col md:flex-row justify-center gap-10">
                    <div>
                        <Link className='bg-psclightteal py-3 px-5 text-white rounded hover:bg-pscblack' href="/">Preview</Link>
                    </div>
                    <div>
                        <Link className='bg-psclightteal py-3 px-5 text-white rounded hover:bg-pscblack' href={`/sourceCode/${sourceCodeId}/download/${sourceCodeId}`}>Download</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SourceCodeDetailLeftLayout