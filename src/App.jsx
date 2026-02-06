import { useState } from 'react'
import ProductTable  from './components/ProductTable';

function App() {
  return (
    <>
      <div className="container">
        <h1>Fetch Product Details</h1>
        <ProductTable />
      </div>
    </>
  );
}

export default App

    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       const firstEntry = entries[0];

    //       if(firstEntry.isIntersecting && !loading) {
    //         setSkip((prev) => prev + limit);
    //       }
    //     },

    //     {
    //       root: null,
    //       rootMargin: "0px",
    //       threshold: 1.0
    //     }
    //   );

    //   const currentElement = loaderRef.current;

    //   if(currentElement) {
    //     observer.observe(currentElement);
    //   }

    //   return () => {
    //     if(currentElement) {
    //       observer.unobserve(currentElement);
    //     }
    //   };
    // }, [loading]);
