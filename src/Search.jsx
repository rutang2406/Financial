import React,{useEffect, useState} from "react";
import Mainarchitecture from "./Mainarchitecture.jsx";
function Search(props){
    const [Data,setData]=useState([]);
    useEffect(()=>{
        const searchFunction = async() => { 
            if (!props.value) return;
            try { 
              const searchURL = `https://newsapi.org/v2/everything?q=${props.value}&apiKey=0a6d830670a8447ab8ca8bce035d61e6`; 
              const response = await fetch(searchURL);
               const result = await response.json();
                setData(result);
              } 
            catch (error) {
                console.error("Error fetching search data:", error);
            }
        };
        searchFunction();
    },[props.value]);
    const newswimg = Data && Data.articles && Data.articles.filter(article => article.title!=="[Removed]" && article.urlToImage !== null && article.content !== null);
    const newswoimg = Data && Data.articles && Data.articles.filter(article =>article.title!=="[Removed]" && article.urlToImage === null && article.content !== null);
    const newswoimgcontent = Data && Data.articles && Data.articles.filter(article =>article.title!=="[Removed]" && article.urlToImage === null && article.content === null);
      return(
        <>
            <Mainarchitecture newswimg={newswimg} newswoimg={newswoimg} newswoimgcontent={newswoimgcontent}/>
        </>
      );  
}
export default Search;