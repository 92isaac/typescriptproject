import ProductPage from "../components/ProductPage"
import { useState } from "react";
import { useGetPaginateProductQuery } from "../features/productApiSlice";
import Pagination from "../components/commonfiles/Pagination";
import ErrorPage from "../components/commonfiles/ErrorPage";
import Loading from "../components/commonfiles/Loading";

const AllProduct = () => {
  const [pageValue, setPageValue] = useState(20)
  const {data: allproducts, isSuccess, isLoading} = useGetPaginateProductQuery(pageValue)
  const [currentPage, setCurrentPage] = useState(1);

  console.log(allproducts)
  console.log(allproducts?.products)


  const handlePageChange = (page: number): void => {
    setCurrentPage(page + 1);
    setPageValue((prev)=> prev + 20)
  };

  if(isLoading) return (<Loading />);

  return (
    <>
  {
    isSuccess ? (
     <>
      <ProductPage products={allproducts?.products}/>
      <Pagination 
          currentPage={currentPage}
          totalPages={5} // Replace with the actual number of pages
          onPageChange={handlePageChange}
        />
     </>
    ) : (<ErrorPage message='Something went wrong' />)
  }
   
    </>
  )
}

export default AllProduct