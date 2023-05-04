import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import { Jsondata } from '../../../../../src/utils/Jsondata'
import SmallSourceCodeCard from './SmallSourceCodeCard/SmallSourceCodeCard'
import Loader from '../../../../helpers/Loader/Loader'

interface Props {
}

const RightLayout: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className="sm:w-full md:w-[25%] md:m-auto pe-[25px] bg-[#f9f9f9]" style={{ marginTop: '25px', marginBottom: '25px', paddingBottom: '20px' }}>
             <div className='h-[50px] flex items-center text-left pl-[5px] bg-psclightteal w-full  text-lg font-bold text-white list-none hover:bg-black'>CATEGORIES</div>
            <div className='grid grid-cols-1 md:mt-[10px]  pl-[25px]'>
                <ul style={{listStyle: 'disc',color:'#00AD7F'}}>
                {
                    Jsondata.categoriesSub.length?
                    Jsondata.categoriesSub.map((item) => {
                        // states?.catSubValue.length?
                        // states?.catSubValue.map((item) => {
                        return (
                            <SmallSourceCodeCard item={item} />
                        )

                    }
                            ) :
                          
                        <div className="flex justify-center items-start h-[60vh]">
                    <Loader />
                     </div>
                    }
                    </ul>
            </div>
        </div>
    )
}

export default RightLayout