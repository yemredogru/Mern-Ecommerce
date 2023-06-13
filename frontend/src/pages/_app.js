import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import CartContextProvider from "../helpers/cart/CartContext";
import { AuthProvider } from "../context/authProvider";
import Headers from "next/dist/client/components/headers";


export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();
  return (
    <>
                <AuthProvider>
                  <CartContextProvider>
                    
                        <Component {...pageProps} />
                  
                    
                  </CartContextProvider>
                 
                  </AuthProvider>
                  <ToastContainer />
        
        </>

  );
}