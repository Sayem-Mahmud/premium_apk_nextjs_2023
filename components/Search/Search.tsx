import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../src/state/StateController'
import SvgIconRenderer from '../helpers/SvgIconRenderer'
import { SvgPaths } from '../../src/utils/SvgPaths'
import Link from 'next/link'
import { PremiumApkApi } from '../../src/API/PremiumApkApi'

interface Props {
    apk?: Array<any>
}

const Search: React.FC<Props> = ({ apk }) => {

    const states = useSelector(() => controller.states)

    const [filteredData, setFilteredData] = useState<Array<any>>([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event: any) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        // const newFilter = sourceCodes?.filter((value) => {
        //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
        // });

        // if (searchWord === "") {
        //     setFilteredData([]);
        // } else {
        //     setFilteredData(newFilter!!);
        // }
    };
    const handleSubmit = async(e:any) => {
        const valueNumber = e.target.value;
        if (e.key === "Enter") {
            window.location.href = `/search/${wordEntered}`;
        }
    };


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    // const offOverlay = () => {
    //     setFilteredData([])
    // }
    return (
        <div className="search">
            <div className='relative'>
                <div className="searchInputs z-[12]">
                    <div>
                        <input
                            className="text-pscblack"
                            type="text"
                            placeholder="Search"
                            value={wordEntered}
                            onChange={handleFilter}
                            onKeyUp={handleSubmit}
                        />
                    </div>
                    <div className="searchIcon">
                        {wordEntered?.length === 0
                            ? (
                                <div >
                                    <SvgIconRenderer
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        path={SvgPaths?.search}
                                        pathFill={"#000"}
                                    />
                                </div>
                            ) :
                            (
                                <div onClick={clearInput} className="cursor-pointer">
                                    <SvgIconRenderer
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        path={SvgPaths?.clear}
                                        pathFill={"#000"}
                                    />
                                </div>
                            )}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Search