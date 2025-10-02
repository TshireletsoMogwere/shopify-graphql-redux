import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../slices/productsSlice";
import Loader from "./Loader";

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
         {product.images.length > 0 && (
            <img 
              src={product.images[0]} 
              alt={product.title} 
              style={{ width: "150px", height: "150px" }}
            />
          )}
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          
        </div>
      ))}
    </div>
  );
}
