import React,{useEffect, useState} from "react";
import Divsnewswimg from "./Divsnewswimg.jsx";
import Divsnewswoimg from "./Divsnewswoimg.jsx"
import image from "./assets/search.png";
import Moremenu from "./Moremenu.jsx"
import "./App.css"
import Divsnewswoimgcontent from "./Divsnewswoimgcontent.jsx";
function Mainarchitecture(props){
    const [moreVisible, setMoreVisible] = useState(false);
    const [arrowrotate,setarrowrotate]=useState(true);
    const newswimg=props.newswimg;
    const newswoimg=props.newswoimg;
    const newswoimgcontent=props.newswoimgcontent;
    const toggleMoreMenu = () => {
        const moreMenu = document.querySelector(".moremenu");
        const arrow=document.querySelector(".material-symbols-outlined");
    
        if (moreMenu) {
          moreMenu.style.visibility = moreVisible ? "hidden" : "visible";
          arrow.style.transform=arrowrotate?"rotate(180deg)":"rotate(0deg)";
          setarrowrotate(!arrowrotate);
          setMoreVisible(!moreVisible);
        }
      };
      const searchFunction = async() => { 
        let query = document.querySelector('.searchinput').value;
        if (!query) return;
        Setloading(true); 
        try { 
          console.log(query);
          const searchURL = `https://newsapi.org/v2/everything?q=${query}&apiKey=0a6d830670a8447ab8ca8bce035d61e6`; 
          const response = await fetch(searchURL);
           const result = await response.json();
            setData(result);
            Setloading(false); 
          } 
          catch (error) {
             console.error("Error fetching search data:", error);
              Setloading(false); 
            }
      };  
    return(
        <>
            <div className="mainbar">
        <h1>Financials</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search in Financials" className='searchinput'/>
          <button id="searchbutton" onClick={searchFunction}><img src={image} alt="Search" /></button>
        </div>
      </div>
      <div className="Mainmenu">
        <ul>
          <li><a href="#">Economy</a></li>
          <li><a href="#">Politics</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Real Estates</a></li>
          <li>
            <div className="More" onClick={toggleMoreMenu} >
              More
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </li>
        </ul>
        <Moremenu />
      </div>
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