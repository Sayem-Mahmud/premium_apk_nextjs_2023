import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../../src/state/StateController'
import Link from 'next/link'

interface Props {
    item: any
}

const SmallSourceCodeCard: React.FC<Props> = ({ item }) => {

    const states = useSelector(() => controller.states)

    return (
        <>
            <Link href={`/sourceCode/${item.id}`} className="hover:bg-transparent">
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <img src={item.image} alt="" className='w-full h-[100px] bg-gray-400 object-cover' loading='lazy' />
                    </div>
                    <div className='flex flex-col gap-y-2 flex-1 justify-between'>
                        <div>
                            <p className="text-[#020202] text-[17.3481px] font-medium">{item.title}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SmallSourceCodeCard