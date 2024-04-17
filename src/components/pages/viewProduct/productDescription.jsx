

const ProductDescription = ({ item }) => {
    return (
        <>
            {/* highlight part */}
            <div className="border h-fit p-2 mt-3 md:p-5 mx-2 md:mx-0">
                <p className="font-semibold text-sm md:text-base">Highlight:</p>
                {/* <ul className="list-disc pl-7 text-medium text-sm md:text-base">
                    {product?.highlights?.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul> */}
            </div>

            <div className="border  md:mx-auto mx-2 md:my-3  mb-4  px-6 py-4 ">

                <div
                    className={
                        "pb-8 pt-0  text-base leading-normal mt-3 text-gray-600 "
                    }
                    id="sect">
                    <h2 className="font-bold text-base  md:text-xl">
                        Products summery and specification
                    </h2>
                    <div>
                        <h3 className="font-bold mt-3 ">Specification :</h3>
                        <p className="text-base leading-4 mt-2 text-gray-600">
                            SKU: {item.sku}
                        </p>
                        <p className="text-base leading-4 mt-2 text-gray-600">
                            category: {item.category?.name}
                        </p>
                        <div className="text-base leading-4 mt-2 text-gray-600">
                            tags:
                            <div className="flex items-center gap-1 my-1">
                                {item.tag.map((tag, index) => (
                                    <div key={index}>
                                        <span className="text-sm py-px px-1 rounded bg-slate-300">
                                            {tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-base leading-4 mt-2 text-gray-600">
                            Brand :{item.brand?.name || "No brand"}
                        </p>
                    </div>
                    <div className=" ">
                        <h3 className="font-bold mt-3 mb-2 ">Summary :</h3>
                        <p className=" text-base lg:leading-tight leading-normal text-gray-600 ">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDescription;
