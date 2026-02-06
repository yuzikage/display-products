import { useState, useEffect, useRef } from "react";
import { fetchProducts } from "../services/productsApi";

const LIMIT = 20;

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false);

  const loaderRef = useRef(null);
  const observerRef = useRef(null);
  const isFetchingRef = useRef(false);

  const handleChangeTitle = (id, event) => {
    const newTitle = event.target.value;

    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, title: newTitle } : p
      )
    );
  };

  useEffect(() => {
    const loadProducts = async () => {
      if (isFetchingRef.current || !hasMore) return;

      isFetchingRef.current = true;
      setLoading(true);

      try {
        const newProducts = await fetchProducts({
          limit: LIMIT,
          skip,
        });

        setProducts(prev => {
          const merged = [...prev, ...newProducts];

          const uniqueById = Array.from(
            new Map(merged.map(p => [p.id, p])).values()
          );

          return uniqueById;
        });

        if (newProducts.length < LIMIT) {
          setHasMore(false);
        }
      } catch (err) {
        setError('Failed to load the data')
      } finally {
        isFetchingRef.current = false;
        setLoading(false);
      }
    };

    loadProducts();
  }, [skip, hasMore]);

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isFetchingRef.current) {
        observerRef.current.disconnect();
        setSkip(prev => prev + LIMIT);
      }
    });

    observerRef.current.observe(loaderRef.current);

    return () => observerRef.current?.disconnect();
  }, [loading, hasMore]);

  return (
    <>
      {error && (
        <div style={{ color: "red", marginBottom: "8px" }}>
        {error}
        </div>
      )}

      <div className="table-wrapper" >    
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>

      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>
              <input
                value={product.title}
                onChange={e => handleChangeTitle(product.id, e)}
              />
            </td>
            <td>{product.brand || "N/A"}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.rating}</td>
          </tr>
        ))}

        <tr ref={loaderRef}>
          <td colSpan="6" style={{ textAlign: "center" }}>
            {hasMore
              ? loading
                ? "Loading..."
                : "Scroll to load more products"
              : "No more products"}
          </td>
        </tr>
      </tbody>
    </table> 
    </div>

    </> 
  );
}
