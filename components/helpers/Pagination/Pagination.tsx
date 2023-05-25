import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { ApkData } from "../../../interfaces/models";

// import Loader from "../../../components/helpers/Loader/Loader";
// import Faq from "../../../components/shared/Faq/Faq";
// import Header from "../../../components/shared/Header/Header";


interface Props {
    pageCount: number ;
    apk?: Array<ApkData>
    currentPage: number
}

const Pagination: React.FC<Props> = ({pageCount, currentPage}) => {
  const states = useSelector(() => controller.states);
  const [showPagination, setShowPagination] = useState(false);
  const [arrayStart, setArrayStart] = useState(0);
  const [arrayEnd, setArrayEnd] = useState(2);
  const [clicked, setClicked] = useState<number | null>(null)
  const [lPclick, setLPClicked]=useState(false)

  const [selectedPage, setSelectedPge] = useState(0);
  // const [startShowData, setStartShowData] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [showPaginateNumberArray, setShowPaginateNumberArray] = useState<
    number[]
  >([]);
//   const [demo, setDemo] = useState<number[]>([]);
  const [selectedDta, setSelectedDta] = useState(0);


  const handlePageClick = (event: any) => {
 
    // const newOffset = (event.selected * states.itemsPerPage) % sourceCodes.length;
    // setItemOffset(newOffset);
       // const allApkSearch = await PremiumApkApi.getAllApkSearch(wordEntered)
       const url = window.location.href;

    if (url.includes('search')) {
        console.log('kkk');
        window.location.href = `/page/${event }/search/${states.searchValue}`;
    }
    else if (url.includes('category') && !url.includes('subcat')) {
        window.location.href = `/page/${event }/category/${states.categoryValue}`;
    }
    else if (url.includes('subcat') && url.includes('category')) {
        window.location.href = `/page/${event}/category/${states.categoryValue}/subcat/${states.categorySubValue}`;
    }
    // else if (url.includes('tag')) {
    //     window.location.href = `/page/${event}/tag/${states.tagValue}`;
    // }
    else {
        window.location.href = `/page/${event}`;
    }
};

    
    useEffect(() => {
        if (pageCount) {
          setTotalPage(pageCount);
          if (currentPage !== 1) {
            setArrayStart(currentPage - 2)
            setArrayEnd(currentPage)
          }
            //@ts-ignore 
          setShowPaginateNumberArray([...Array(pageCount).keys()]);
          setShowPagination(true);
    }
  }, [pageCount]);



  return (
    <div>
    
      {showPagination && (
        <div className=" gap-x-[50px] h-[48px] flex border-t-[1px] mt-[20px] border-[#C0C0C0] items-center">
      
          {/* <div className="flex-1 text-center"> */}
          <div className="flex flex-row">
          {currentPage >2 &&
              <div className="flex">
                 <p onClick={() => { setLPClicked(true); handlePageClick(1) }} className={`w-[32px] cursor-pointer border-[1px] border-[#C0C0C0] flex justify-center items-center h-[32px] hover:bg-[#C0C0C0] rounded-[3px] ${lPclick && 'text-[#555252] font-bold'}`}>
                  {/* {pageCount} */}
                  1
                </p>
                <p>&nbsp;&nbsp;......&nbsp;&nbsp;</p>
              </div>}
            <div className="flex flex-row gap-x-[20px] justify-center  m-auto h-full">
              {showPaginateNumberArray
                ?.slice(arrayStart, arrayEnd)
                // ?.slice(0, 2)
                .map((data, ind) => {
                  return (
                    <>
                      {console.log('ind',currentPage,ind)}
                      <div
                        onClick={() => {
                          // pageChange(ind, data);
                          if (currentPage != (data + 1)) {
                            setClicked(ind)
                            handlePageClick(data + 1)
                          }
                        }}
                        className="cursor-pointer"
                      >
                        <p
                          className={`w-[32px] flex border-[1px] border-[#C0C0C0] justify-center items-center h-[32px] ${
                            currentPage === data+1 ?
                            "text-white rounded-[3px] bg-psclightteal font-bold"
                          :'hover:bg-[#C0C0C0]'} ${
                            clicked === ind &&
                            "text-[#525455] font-bold"
                            }`
                          }
                        >
                          {data + 1}
                        </p>
                      </div>
                    </>
                  );
                })}
            </div>
            {currentPage !== pageCount && pageCount>2 &&
              <div className="flex">
                <p>&nbsp;&nbsp;......&nbsp;&nbsp;</p>
                <p onClick={() => { setLPClicked(true); handlePageClick(pageCount) }} className={`w-[32px] cursor-pointer border-[1px] border-[#C0C0C0] flex justify-center items-center h-[32px] hover:bg-[#C0C0C0] rounded-[3px] ${lPclick && 'text-[#555252] font-bold'}`}>
                  {pageCount}
                </p>
              </div>}
          </div>
          <div className="flex flex-row gap-x-[10px] text-[#616161]">
            <img
              src="/images/Right.svg"
              className={`cursor-pointer ${currentPage === 1 && "invisible"}`}
              onClick={() => {
                setClicked(0)
                handlePageClick(currentPage - 1)
                // pageChange(selectedPage - 1, selectedDta - 1);
              }}
            />
            <img
              src="/images/Left.svg"
              className={`cursor-pointer ${
                currentPage === pageCount && "invisible"
              }`}
              onClick={() => {
                if (currentPage == 1) {
                  setClicked(1)
                }
                handlePageClick(currentPage + 1)
                // pageChange(selectedPage + 1, selectedDta + 1);
              }}
            />
          </div>
          {/* <div
            onClick={() => {
              hello();
            }}
          ></div> */}
        </div>
      )}
    </div>
  );
};

export default Pagination;
