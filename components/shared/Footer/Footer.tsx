import React from 'react'


interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className='bg-white py-2 flex justify-center items-center container-x'>
             <div className='flex items-center text-psclightteal justify-center font-bold text-sm md:text-md'>
                <div >Copyright © 2023 - Premium APK Downloader |<span><a className="hover:bg-transparent" href='/server-sitemap.xml' target="_blank">&nbsp; Sitemap
                </a></span></div>
                
            </div>
        </div>
    )
}

export default Footer