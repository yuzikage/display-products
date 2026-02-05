import { useState } from "react";
import { useEffect } from "react";

export default function ProductTable() {

    let [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const limit = 20;

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

            try {
                const res = await fetch(url);
                const result = await res.json();

                console.log(result.products);

                setProducts((prevProducts) => {
                    return [prevProducts, ...result.products]
                });
            } catch (err){
                console.log(err)
            }

        };

        fetchData();

    }, [skip])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if(window.innerHeigh + window.scrollY >= document.body.offsetHeigh - 500){
    //             setSkip(prevSkip => prevSkip + limit);
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll)
    // })

    console.log(products)
    return (
      <>
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );

}
