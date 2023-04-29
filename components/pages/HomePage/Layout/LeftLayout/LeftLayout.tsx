import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import BigSourceCodeCard from './BigSourceCodeCard/BigSourceCodeCard'
import ReactPaginate from 'react-paginate';
import { ApkData } from '../../../../../interfaces/models';
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
        window.location.href = `/page/${event.selected+1}`;
    };

    useEffect(() => {
    
    },[states.currentPage])


    return (
        <div className='sm:w-full md:w-[80%] p-3'>
            {sourceCodes ? <>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-7 gap-y-10 md:gap-y-10'>
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
                    <div className="text-3xl text-pscblack">Loading...</div>
                )
            }
        </div>
    )
}

export default LeftLayout