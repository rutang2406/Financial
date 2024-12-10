import React,{useEffect, useState} from "react";
import Loadingscreen from "./Loadingscreen.jsx";
import "./App.css"
import Mainarchitecture from "./Mainarchitecture.jsx";
function App() {
    const subURL1="https://newsapi.org/v2/everything?q=trending&apiKey=0a6d830670a8447ab8ca8bce035d61e6";
    const URL="https://newsapi.org/v2/top-headlines?country=us&apiKey=0a6d830670a8447ab8ca8bce035d61e6"    
    const subURL2="https://newsapi.org/v2/everything?q=geopolitics&apiKey=0a6d830670a8447ab8ca8bce035d61e6"
    const [Data,setData]=useState();
    let[loading,Setloading]=useState(true);
    useEffect(() => {
      const fetchData = async () => {
      Setloading(true);

      try {
        // Fetch first URL
        let response1 = await fetch(URL);
        let result1 = await response1.json();
        result1.articles = result1.articles.map(article => ({
          ...article,
          topHeadline:true }))
        
        // Fetch second URL
        let response2 = await fetch(subURL1);
        let result2 = await response2.json();
        result2.articles = result2.articles.map(article => ({
          ...article,
          topHeadline:true }))

        // Fetch third URL
        let response3 = await fetch(subURL2);
        let result3 = await response3.json();
        result3.articles = result3.articles.map(article => ({
            ...article,
            topHeadline:false }))
          
        // Combine all results
        setData({
          ...result1,
          articles: [...(result1.articles || []), ...(result2.articles || []),...(result3.articles || [])]
        });

        Setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        Setloading(false);
      }
    };

    fetchData();
  },[]);
  
  if(loading){
    return <Loadingscreen/>
  }
  
  const newswimg = Data && Data.articles && Data.articles.filter(article => article.title!=="[Removed]" && article.urlToImage !== null && article.content !== null);
  const newswoimg = Data && Data.articles && Data.articles.filter(article =>article.title!=="[Removed]" && article.urlToImage === null && article.content !== null);
  const newswoimgcontent = Data && Data.articles && Data.articles.filter(article =>article.title!=="[Removed]" && article.urlToImage === null && article.content === null);
  return (
    <>
      <Mainarchitecture newswimg={newswimg} newswoimg={newswoimg} newswoimgcontent={newswoimgcontent}/>
    </>
  );
}

export default App;