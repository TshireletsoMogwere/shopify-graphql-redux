const SHOPIFY_STORE = import.meta.env.VITE_SHOPIFY_STORE_URL;
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

export const fetchProducts = async () => {
  try {
    const query = `
      {
        products(first: 20) {
          nodes {
            id
            title
            description
            images(first: 1) {
              nodes {
                src
              }
            }
          }
        }
      }
    `;

    const res = await fetch(
      `https://${SHOPIFY_STORE}.myshopify.com/api/2025-07/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
        },
        body: JSON.stringify({ query }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    // Flatten images into a simple array of URLs
    return data.data.products.nodes.map(product => ({
      ...product,
      images: product.images.nodes.map(img => img.src), 
    }));
  } catch (error) {
    console.error("Fetch products failed:", error);
    throw error;
  }
};
