import { useSelector } from 'react-redux';
import ProductSearchResult from '../components/ProductSearchResult'
import { useGetSearchProductQuery } from '../features/productApiSlice';
import ErrorPage from '../components/commonfiles/ErrorPage';
import { RootState } from '../features/store';
import Loading from '../components/commonfiles/Loading';


const ProductSearch = () => {
  const searchValue = useSelector((state: RootState) => state.search.searchValue);

    console.log(searchValue)
    const { data: result, isLoading, isSuccess } = useGetSearchProductQuery(searchValue);
    console.log(result)
    if(isLoading ) return <Loading />;
    if(searchValue === '') return <ErrorPage message={`Search field can't be empty`} />
    
  return (
    <div>
      <div className="mt-10">
        <h3 className='text-bold'>{isSuccess ? (<div>Search result for {searchValue}, {result.products.length} items found</div>) : (<ErrorPage message={`Result for ${searchValue} not found`} />)}</h3>
      </div>
    {result 
    ? <ProductSearchResult products={result?.products} /> 
    : (<ErrorPage message='Something went wrong'/>)
    }
    </div>
  )
}

export default ProductSearch