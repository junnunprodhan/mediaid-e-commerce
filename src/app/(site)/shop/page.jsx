
import FlashSellingProduct from "@/components/product/flashSale/FlashSellingProduct";
import { getProducts } from "@/hooks/getProducts";

async function Page({ searchParams }) {
    const searchText = searchParams.search;
    // category
    // inStock
    // maxPrice
    // minPrice
    // rating

    const url = `${process.env.NEXTAUTH_URL}/api/search?keyword=${searchText}`
    const { products, success } = await getProducts(url)
    if (!success) {
        return <div className="min-h-[60vh] flex justify-center items-center">
            <span className="text-2xl text-gray-500">Something want wrong !</span>
        </div>
    }

    return (
        <div className="min-h-screen">
            <div>
                <div className="grid grid-cols-5">
                    {products.map((item, i) =>
                        <FlashSellingProduct item={item} key={i} />
                    )}
                </div>
                <div className="flex justify-center my-5">
                    <button
                        disabled={products.length < 15}
                        className="bg-[#60b7a5] disabled:bg-[#60b7a5] disabled:cursor-not-allowed hover:bg-[#509e8e] transition text-white rounded py-1 px-5">Load more</button>
                </div>
            </div>
        </div>
    )
}

export default Page