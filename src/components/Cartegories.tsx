import { useGetByCategoriesQuery } from "../features/productApiSlice";
import Loading from "./commonfiles/Loading";
import { ProductCartegory } from "./commonfiles/ProductCartegory";


export const Cartegories = () => {
  const { data: byCategory, isLoading } = useGetByCategoriesQuery('mens-shoes');
  const { data: jewellery, isLoading:isLoadingJewellery } = useGetByCategoriesQuery('womens-jewellery');
  const { data: groceries, isLoading:isLoadingGroceries } = useGetByCategoriesQuery('groceries');

  return (
    <div>
        <div className="">
            <h3 className="capitalize font-bold text-xl">mens shoes</h3>
        {isLoading ? (
          <Loading />
        ) : (
          <ProductCartegory
            product={byCategory ? byCategory.products : []}
          />
        )}
        </div>
        <div className="my-5">
        <h3 className="capitalize font-bold text-xl">womens jewellery</h3>
        <h3 className="capitalize"></h3>
        {isLoadingJewellery ? (
          <Loading />
        ) : (
          <ProductCartegory
            product={jewellery ? jewellery.products : []}
          />
        )}
        </div>
        <div className="my-5">
        <h3 className="capitalize font-bold text-xl">groceries</h3>
        {isLoadingGroceries ? (
          <Loading />
        ) : (
          <ProductCartegory
            product={groceries ? groceries.products : []}
          />
        )}
        </div>
    </div>
  )
}
