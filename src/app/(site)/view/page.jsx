import ViewProductHandler from "@/components/mobile/cart/viewProductHandler";
import ImageBanner from "@/components/pages/viewProduct/ImageBanner";
import ProductQuestionAndAnswer from "@/components/pages/viewProduct/ProductQuestionAndAnswer";
import ProductReviews from "@/components/pages/viewProduct/ProductReviews";
import RelatedProducts from "@/components/pages/viewProduct/RelatedProducts";
import ProductDescription from "@/components/pages/viewProduct/productDescription";
import ProductHandler from "@/components/pages/viewProduct/productHandler";
import ProductInfo from "@/components/pages/viewProduct/productInfo";
import { getProducts, getReviews } from "@/utils/api_config";
import { discountCalculator } from "@/utils/generator";
import { notFound } from "next/navigation";
import { TbCurrencyTaka } from "react-icons/tb";

async function Page({ searchParams }) {
    // Check search params available or not
    if (!searchParams.product) {
        notFound()
    }
    const url = `/api/product?sku=${searchParams.product}`
    const product = await getProducts(url) // Get SSR product
    // console.log(product)

    // check product 
    if (!product) {
        notFound()
    }
    const reviewUrl = `/api/review?product=${product._id}`
    const getReviewData = await getReviews(reviewUrl)

    const discountPrice = discountCalculator(product.price, product.discountPercent)
    return (
        <div className="lg:grid grid-cols-5 relative w-full gap-3 mt-3">
            <div className="lg:sticky top-28 lg:max-h-[110vh] col-start-1 col-end-3 px-3 md:px-5 lg:px-0">
                <ImageBanner item={product} />
                <div className="md:flex items-center justify-between hidden sm:inline-block w-full ">
                    <ProductHandler item={product} />
                </div>
                <div>
                    <div className="mt-4">
                        <h2 className="font-medium text-gray-600">
                            {product.title}
                        </h2>
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center">
                                    <TbCurrencyTaka size={24} />
                                    <p className="text-2xl font-bold">{discountPrice}</p>
                                </div>
                                <div className="flex items-center text-gray-400">
                                    {
                                        discountPrice !== product.price ?
                                            <>
                                                <TbCurrencyTaka color="gray" />
                                                <del>{product.price}</del>
                                            </> : null
                                    }
                                </div>
                                {
                                    discountPrice !== product.price ?
                                        <span className="text-green-500 font-medium">{product.discountPercent}% Off</span>
                                        : null
                                }
                            </div>
                            <div className="flex gap-2 mt-1 items-center">
                                <p className="bg-green-600 w-fit px-1.5 text-white rounded-md ">
                                    {product.rating}★
                                </p>
                                <p className="text-gray-500">{getReviewData.totalRatings} Ratings & {getReviewData.totalReview} Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-start-3 col-end-6 px-3 md:px-5 lg:px-0 mt-5 lg:mt-0">
                <ProductInfo
                    item={product}
                    totalRating={getReviewData.totalRatings}
                    totalReview={getReviewData.totalReview} />
                <ProductDescription item={product} />
                <ProductReviews item={product} totalRating={getReviewData.totalRatings} />
                <ProductQuestionAndAnswer getReviewData={getReviewData} item={product} />
                <RelatedProducts item={product} />
            </div>
            <ViewProductHandler item={product} />
        </div>
    );
}

export default Page

