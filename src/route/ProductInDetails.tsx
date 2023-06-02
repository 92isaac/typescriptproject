import { useParams } from "react-router-dom";
import { useGetSingleProductsQuery } from "../features/productApiSlice";
import ProductDetails from "../components/ProductDetails";

export const ProductInDetails = () => {
    const { id } =useParams()
    const {data: singleproduct } = useGetSingleProductsQuery(id)
  return (
<ProductDetails products={singleproduct}/>
  )
}
