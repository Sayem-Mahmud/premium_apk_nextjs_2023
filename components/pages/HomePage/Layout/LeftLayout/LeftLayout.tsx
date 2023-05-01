import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import BigSourceCodeCard from './BigSourceCodeCard/BigSourceCodeCard'
import ReactPaginate from 'react-paginate';
import { ApkData } from '../../../../../interfaces/models';
import Loader from '../../../../helpers/Loader/Loader';
interface Props {
    sourceCodes: Array<ApkData>
}

const LeftLayout: React.FC<Props> = ({ sourceCodes }) => {


    // const [itemOffset, setItemOffset] = useState(0);

    const states = useSelector(() => controller.states)
    // const endOffset = itemOffset + states.itemsPerPage;
    // const currentSourceCodes = sourceCodes.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(states.totalApk / states.itemsPerPage);

    const handlePageClick = (event: any) => {
        // const newOffset = (event.selected * states.itemsPerPage) % sourceCodes.length;
        // setItemOffset(newOffset);
           // const allApkSearch = await PremiumApkApi.getAllApkSearch(wordEntered)
           const url = window.location.href;

        if (url.includes('search')) {
            console.log('kkk');
            window.location.href = `/page/${event.selected + 1}/search/${states.searchValue}`;
        }
        else if (url.includes('category')) {
            window.location.href = `/page/${event.selected + 1}/category/${states.categoryValue}`;
        }
        else {
            window.location.href = `/page/${event.selected + 1}`;
        }
    };

    useEffect(() => {
    
    },[states.currentPage])


    return (
        <>
            {
                sourceCodes
                    ? <>
                        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-7 gap-y-10 md:gap-y-10'> */}
                        <div>
                    {
                        sourceCodes.map((item) => {
                            return (
                                <>
                                    <BigSourceCodeCard item={item} />

                                </>

                            )
                        }
                        )
                    }
                </div>
                <div className='my-10'>
                    <ReactPaginate
                        breakLabel="..."
                        breakLinkClassName={"pageNumber"}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        renderOnZeroPageCount={null}
                        onPageChange={handlePageClick}
                        pageCount={pageCount}
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        forcePage={states.currentPage -1}
                        containerClassName={'paginationContainer'}
                        pageLinkClassName={'pageNumber'}
                        previousLinkClassName={'pageNumber'}
                        nextLinkClassName={'pageNumber'}
                        activeLinkClassName={'active'}
                        disabledLinkClassName={'disable'}
                    />
                </div>
            </>
                 :
                 (
                     <div className="flex justify-center items-start h-[60vh]">
                         <Loader />
                     </div>
                 )
            }
        </>
    )
}

export default LeftLayout