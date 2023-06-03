import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import LayoutPromotion from './LayoutPromotion'

interface Props {
    dataPromo: Array<any>
    
}

const Promotion: React.FC<Props> = ({dataPromo}) => {

    const states = useSelector(() => controller.states)
    
    return (
        <div className=' container-x pt-[5px]'>
            <div className='flex h-[48px] my-[20px] '>
                <div className='w-[4px] h-full bg-[#2f4f4f] rounded-r'></div>
                <div className=' flex items-center text-[25px] pl-[10px]  text-black font-bold ' >Promotions</div>
            </div>    
            <div className=' mb-[40px] pb-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-10 md:gap-y-10'>
                              
                          {
                             dataPromo.map((item) => {
                                  return (
                                      <>{
                                          <LayoutPromotion item={item} />
                                      }
                                      </>
     
                                  )
                              })
                      }
                  </div>
        </div>
    )
}

export default Promotion