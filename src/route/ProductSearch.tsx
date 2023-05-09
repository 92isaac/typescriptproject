import { useSelector } from 'react-redux';
import ProductSearchResult from '../components/ProductSearchResult'
import { useGetSearchProductQuery } from '../features/apiSlice';
import ErrorPage from '../components/commonfiles/ErrorPage';


const ProductSearch = () => {
    const search = useSelector((state:any) => state.productSearch);
    console.log(search)
    const { data: result } = useGetSearchProductQuery(search);
    console.log(result)
  return (
    <div>
    {result 
    ? <ProductSearchResult products={result} /> 
    : (<ErrorPage />)
    }
    </div>
  )
}

export default ProductSearch