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
            {item.title &&
                <Link href={`/sourceCode/${item._id}`} className="hover:bg-transparent">
                    <div className=" rounded mt-[20px] bg-[#f9f9f9] flex md:pl-[5px]"
                    >
                        <div className='flex flex-col md:flex-row gap-y-4' style={{columnGap:'25px', padding:'0px 20px'}}>
                        <div className='overflow-hidden cursor-pointer rounded w-[100%] md:w-[20%]'>
                            <img src={item.imgSrc} alt="" className='mx-auto my-[10px] bg-gray-400 w-[50%] md:w-52 object-cover scale-[1] hover:scale-[1.3] transition-all duration-300' />
                        </div>
                        <div className='px-4 py-2 w-[100%] md:w-[75%]'>
                            <div className='flex flex-col gap-y-3'>
                                <span className="text-xl text-['black'] font-bold ">{item.title}</span>
                                <span className="text-[13px] text-[#8F8F8F]"><span className="text-[#0e0d0d]">Catagories:</span> {item.created && item.categories}</span>
                                <span className="text-[13px] text-[#8F8F8F]"><span className="text-[#0e0d0d]">Created at:</span> {item.created && item.created}</span>
                            </div>
                            <div>
                            {/* <span className="text-xl text-[#00AD7F] font-medium">{item.categories}</span> */}
                                <p title={item.title} className='cursor-pointer text-md mt-[15px] text-[#121212] '>{item.allText && item.allText[1] }</p>
                                <div className='mt-3'>
                                    {/* <a href={item.url} target='_blank' className="text-[13px] text-[#8F8F8F] hover:text-ecodarkgreen">Read the full blog..</a> */}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </Link>
            }
        </>
    )
}

export default BigSourceCodeCard