import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import useAxios from "./hooks/useAxios";
import Images from "./components/Images";

export const ImageContext = createContext();
function App() {
  const {response, isLoading, err , fetchData} = useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_KEY}`);
  console.log(response);
  const contextCall = {
    response,
    isLoading,
    err,
    fetchData,
    
  }


  return (
    <>
      <ImageContext.Provider value={contextCall}>
      <Header>
        <Searchbar></Searchbar>
        </Header>
        <Images/>
      </ImageContext.Provider>
      
    </>
  )
}

export default App;
