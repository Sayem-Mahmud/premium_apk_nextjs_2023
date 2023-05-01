import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Jsondata } from '../../../src/utils/Jsondata';

interface Props {
}

const Header: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const router = useRouter();
    const { asPath } = router;
    const genericHamburgerLine = `h-1 w-7  rounded-full bg-black transition ease transform duration-500`;


    return (
        <div className='w-full sticky top-0 left-0 z-[100]'>
            {/* py-4 md:px-10 px-7 */}
            <div className='flex items-center justify-between py-10 container-x shadow-md'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]text-gray-800'>
                    <Link href="/" className='text-3xl text-pscblack mr-1 hover:bg-transparent'>
                      PREMIUM APK DOWNLOADER
                    </Link>

                </div>
                <div className='flex justify-center items-center sm:flex-row flex-row-reverse'>
                    <div className="ml-4">
                        <button
                            className="flex flex-col h-12 rounded justify-center cursor-pointer md:hidden group"
                            onClick={() => controller.setState({ open: !states.open })}
                        >

                            <div
                                className={`${genericHamburgerLine} ${states.open
                                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 my-1"
                                    : "opacity-50 group-hover:opacity-100 my-[2px]"
                                    }`}
                            />
                            <div
                                className={`${genericHamburgerLine} ${states.open ? "opacity-0 my-1" : "opacity-50 group-hover:opacity-100 my-[2px]"
                                    }`}
                            />
                            <div
                                className={`${genericHamburgerLine} ${states.open
                                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 my-1"
                                    : "opacity-50 group-hover:opacity-100 my-[2px]"
                                    }`}
                            />
                        </button>
                    </div>
                    <div>
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${states.open ? 'top-32' : 'top-[-490px]'}`}>
                            {
                                Jsondata.categories.map((item) => (
                                    <li onClick={() => controller.setState({ open: !states.open })} key={item.title} className='md:mr-8 text-lg md:text-[15px] lg:text-xl md:my-0 my-7'>
                                        <Link href={`/category/${item.category}`} className={`
                                          ${asPath === `/category/${item.category}` ? 'text-psclightteal' : 'text-pscblack'}   
                                       hover:text-psclightteal duration-500 hover:bg-transparent`}
                                        >{item.title}</Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                </div>
             
            </div>
        </div>
    )
}

export default Header