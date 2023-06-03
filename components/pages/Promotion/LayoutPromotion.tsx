import React from 'react'
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Link from 'next/link';
import ReactImageFallback from 'react-image-fallback';

interface Props {
    item: any
}

const LayoutPromotion: React.FC<Props> = ({ item }) => {

    const states = useSelector(() => controller.states)

    const getColor = (item:string) => {
        if(item==='Gamer')
             return '#00876b33'; // Replace with your own logic
        else if (item === 'Adult Content Creator')
            return '#ff001a33';
        else if (item === 'Audio Content Creator')
            return '#8c2e0033';
        else if (item === 'Video Course Creator')
            return '#8c2e0033';
        else if (item === 'Community Leader')
            return '#ff001a33';
        else if (item === "Coach")
            return "#dd008133"
        else if (item === "Content Creator")
            return "#e9a80033"
        else if (item === "E-commerce")
            return "#6724de33"
        else if (item === "Event Organizer")
            return "#0078df33"
        else if (item === "Driver")
            return "#9b9a9766"
        else if (item === "Fitness Instructor")
            return "#0078df33"
        else if (item === "Health")
            return "#e9a80033"
        else if (item === "Livestreamer")
            return "#dd008133"
        else if (item === "Personal Shopper")
            return "#00876b33"
        else if (item === "Podcaster")
            return "#6724de33"
        else if (item === "Rentals")
            return "#dd008133"
        else if (item === "Chef")
            return "#f55d0033"
        else if (item === "Teacher")
        return "#f55d0033"
            else if (item === "Salesperson")
        return "#8c2e0033"
            else if (item === "Writer")
        return "#e9a80033"
            else if (item === "Tasks & Services")
        return "#ff001a33"
            else if (item === "Reseller")
        return "#6724de33"
            else if (item === "Tech")
        return "#dd008133"
            else 
        return '#e9a80033'
       };

    return (
        <>       
            {item.link && <Link className=" h-full hover:shadow-2xl bg-transparent" href={item.link}>
     
                <div className=" h-full rounded bg-white "
                >
                    <div className='flex flex-col ' style={{ columnGap: '25px', width: '100%' }}>
                        <div className='overflow-hidden cursor-pointer rounded w-[100%] '>
                        <ReactImageFallback
                        src={item.imgSrc}
                        className="h-[250px] bg-gray-100 w-full md:w-[18rem] object-cover scale-[1] hover:scale-[1.1] transition-all duration-300"
                        fallbackImage={`api/placeholder?text=${item.title}`}
                        initialImage="loader.gif"
                      />
                            {/* <img src={item.imgSrc ? item.imgSrc : ''} alt="" className='h-[280px] bg-gray-100 w-full md:w-[18rem] object-cover scale-[1] hover:scale-[1.1] transition-all duration-300' /> */}
                        </div>
                        <div className='px-[12px]'>
                            <div className='flex flex-row my-[10px] gap-x-[5px]'>

                            <div className="mt-[10px] limit-2 text-black text-[15px] font-bold ">🏥 {item.title ? item.title : ''}
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

export default LayoutPromotion