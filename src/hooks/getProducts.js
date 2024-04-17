import axios from "axios";

export async function getProducts(url) {
  try {
    const { data } = await axios(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.success) {
      return data;
    } else {
      return {
        products: [],
        success: false,
        message: "Something went wrong !",
      };
    }
  } catch (error) {
    return {
      products: [],
      success: false,
      message: "Something went wrong !",
    };
  }
}
