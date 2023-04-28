import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../../src/state/StateController'
import Link from 'next/link'
import { ApkData } from '../../../../../../interfaces/models'

interface Props {
    item: ApkData
}

const BigSourceCodeCard: React.FC<Props> = ({ item }) => {

    const states = useSelector(() => controller.states)

    return (
        <>
            <Link href={`/sourceCode/${item._id}`} className="hover:bg-transparent">
                <div className="flex flex-col gap-y-4 shadow-lg rounded"
                >
                    <div className='overflow-hidden cursor-pointer rounded'>
                        <img src={item.imgSrc} alt="" className='bg-gray-400 w-full h-[280px] object-cover scale-[1] hover:scale-[1.3] transition-all duration-300' />
                    </div>
                    <div className='px-4 py-2'>
                        <div className='flex gap-x-3'>
                            <span className="text-[13px] text-[#00AD7F] font-medium">{item.categories}</span>
                            <span className="text-[13px] text-[#8F8F8F]">{item.createdAt}</span>
                        </div>
                        <div>
                            <p title={item.title} className='cursor-pointer text-xl text-[#121212] whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</p>
                            <div className='mt-3'>
                                {/* <a href={item.url} target='_blank' className="text-[13px] text-[#8F8F8F] hover:text-ecodarkgreen">Read the full blog..</a> */}
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default BigSourceCodeCard