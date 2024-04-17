import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const keyword = req.nextUrl.searchParams.get("keyword");
  // const category = req.nextUrl.searchParams.get("category"); //null or id
  // const min = req.nextUrl.searchParams.get("min");
  // const max = req.nextUrl.searchParams.get("max");
  // const inStock = req.nextUrl.searchParams.get("inStock");
  // const limit = req.nextUrl.searchParams.get("limit");

  // console.log(keyword, category, min, max, inStock, limit);

  try {
    // Search products by title and tags from keywords
    const products = await productModel
      .find({
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { tag: { $in: keyword } },
        ],
      })
      .limit(12);
    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong !" },
      { status: 400 }
    );
  }
}
