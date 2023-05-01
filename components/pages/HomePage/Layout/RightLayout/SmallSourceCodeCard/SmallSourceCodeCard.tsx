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
            {/* <Link href={`/sourceCode/${item.id}`} className="hover:bg-transparent"> */}
            <li>
                <div className='flex flex-col gap-y-1 '>
                    <div >
                        {/* <img src={item.image} alt="" className='w-full h-[100px] bg-gray-400 object-cover' loading='lazy' /> */}
                        <Link href={`/category/${item.catagory.includes('android-games')?'games':item.catagory.replace(/-/g," ")}`}>
                    <p style={{fontSize:'15px', fontWeight:'bold',marginTop:'15px'}}>{item.catagory.includes('android-games')?'GAMES':item.catagory.replace(/-/g," ").toUpperCase()}</p>
                    </Link>
                    </div>
                    <ul style={{marginLeft:'15px',marginTop:'2px',listStyle: 'disc',color:'#00AD7F'}}>
                <div className='flex flex-col gap-y-2 flex-1 justify-between'>
                    {item.subcatagory.map((cat:any) => { 
                        return (
                            <li>
                        <div>
                            <p className="text-[#020202] text-[15.3481px]">{cat.replace(/-/g," ")}</p>
                                </div>
                                </li>
                            
                    )})
                  }
                        </div>
                        </ul>
                </div>
            </li> 
        </>
    )
}

export default SmallSourceCodeCard