import { useParams } from "react-router-dom";
import { useGetSingleProductsQuery } from "../features/productApiSlice";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/commonfiles/Loading";

export const ProductInDetails = () => {
    const { id } =useParams()
    const {data: singleproduct, isLoading } = useGetSingleProductsQuery(id)
  return (
<div>
  {isLoading ? <Loading /> : <ProductDetails products={singleproduct}/>}
</div>
  )
}
