import React from 'react'


interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className='bg-white py-2 flex justify-center items-center container-x'>
            <div>
                <span className='text-pscdarkblue font-bold text-sm md:text-md'>Copyright © 2023 - Premium APK Downloader</span>
            </div>
        </div>
    )
}

export default Footer