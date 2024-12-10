import React,{useEffect, useState} from "react";
import Divsnewswimg from "./Divsnewswimg.jsx";
import Divsnewswoimg from "./Divsnewswoimg.jsx"
import image from "./assets/search.png";
import Moremenu from "./Moremenu.jsx"
import "./App.css"
import Divsnewswoimgcontent from "./Divsnewswoimgcontent.jsx";
import Loadingscreen from "./Loadingscreen.jsx";
import Search from "./Search.jsx";
function Mainarchitecture(props){
    let[loading,Setloading]=useState(false);
    const [search,setsearch]=useState("");
    const newswimg=props.newswimg;
    const newswoimg=props.newswoimg;
    const newswoimgcontent=props.newswoimgcontent;
    const searchFunction =async() => { 
      const query = document.querySelector('.searchinput').value;
      setsearch(query);
    };
        
    if(loading){
      return <Loadingscreen/>;
    }
    if(search){
      return <Search value={search}/>;
    }
    return(
        <>
        <Moremenu />
      <div className="containers">
        {newswimg && newswimg.map((article, index) => (
          <Divsnewswimg
            key={index}
            urlToImage={article.urlToImage}
            title={article.title}
            content={article.content}
            url={article.url}
            publishedAt={article.publishedAt}
            author={article.author}
            topHeadline={article.topHeadline}
            className="article"
          />
        ))}
        {newswoimg && newswoimg.map((article, index) => (
          <Divsnewswoimg
            key={index}
            title={article.title}
            content={article.content}
            url={article.url}
            publishedAt={article.publishedAt}
            author={article.author}
            topHeadline={article.topHeadline}
            className="article"
          />
        ))}
        {newswoimgcontent && newswoimgcontent.map((article, index) => (
          <Divsnewswoimgcontent
            key={index}
            title={article.title}
            url={article.url}
            publishedAt={article.publishedAt}
            author={article.author}
            topHeadline={article.topHeadline}
            className="article"
          />
        ))}
      </div>
        </>
    )
}
export default Mainarchitecture;