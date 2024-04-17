// CSR Hooks fetch request methods
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// SSR Render data request methods
// Uses area::
// View Product,
// Suggested Related product
export async function getProducts(pathname) {
  try {
    // get product
    const result = await fetch(process.env.NEXTAUTH_URL + pathname, {
      method: "GET",
    });
    const data = await result.json(); // parse to json
    // checking actual data
    if (data?.success) {
      return data?.product;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
// SSR Render data request methods
// Uses area::
// View Product
export async function getReviews(pathname) {
  try {
    // get product
    const result = await fetch(process.env.NEXTAUTH_URL + pathname, {
      method: "GET",
    });
    const data = await result.json(); // parse to json
    // checking actual data
    if (data?.success) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function getCategories(pathname) {
  try {
    // get product
    const result = await fetch(process.env.NEXTAUTH_URL + pathname, {
      method: "GET",
    });
    const data = await result.json(); // parse to json
    // checking actual data
    if (data?.success) {
      return data?.categories;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}
