import { useGetByCategoriesQuery } from "../features/productApiSlice";
import Loading from "./commonfiles/Loading";
import { ProductCartegory } from "./commonfiles/ProductCartegory";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import { FadeIn } from "../animation/FadeIn";


export const Cartegories = () => {
  const { data: byCategory, isLoading } = useGetByCategoriesQuery('mens-shoes');
  const { data: jewellery, isLoading:isLoadingJewellery } = useGetByCategoriesQuery('womens-jewellery');
  const { data: groceries, isLoading:isLoadingGroceries } = useGetByCategoriesQuery('groceries');
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
        <div className="">
            <h3 className="capitalize font-bold text-xl">mens shoes</h3>
        <FadeIn>
        {isLoading ? (
          <Loading />
          ) : (
            <ProductCartegory
            product={byCategory ? byCategory.products : []}
            />
            )}
            </FadeIn>
        </div>
        <div className="my-5"> 
        <h3 className="capitalize font-bold text-xl">womens jewellery</h3>
        <FadeIn>

        {isLoadingJewellery ? (
          <Loading />
          ) : (
            <ProductCartegory
            product={jewellery ? jewellery.products : []}
            />
            )}
            </FadeIn>
        </div>
        <div className="my-5">   
        <h3 className="capitalize font-bold text-xl">groceries</h3>   
        <FadeIn>
        {isLoadingGroceries ? (
          <Loading />
          ) : (
            <ProductCartegory
            product={groceries ? groceries.products : []}
            />
            )}
          </FadeIn>     
        </div>
    </div>
  )
}
