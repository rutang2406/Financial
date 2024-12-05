import React,{useEffect, useState} from "react";
import Divsnewswimg from "./Divsnewswimg.jsx";
import Divsnewswoimg from "./Divsnewswoimg.jsx"
import Loadingscreen from "./Loadingscreen.jsx";
import image from "./assets/search.png";
import Moremenu from "./Moremenu.jsx"
import "./App.css"
import Divsnewswoimgcontent from "./Divsnewswoimgcontent.jsx";
function App() {
    const subURL1="https://newsapi.org/v2/everything?q=trending&apiKey=0a6d830670a8447ab8ca8bce035d61e6";
    const URL="https://newsapi.org/v2/top-headlines?country=us&apiKey=0a6d830670a8447ab8ca8bce035d61e6"    
    const subURL2="https://newsapi.org/v2/everything?q=geopolitics&apiKey=0a6d830670a8447ab8ca8bce035d61e6"
    const [Data,setData]=useState();
    const [moreVisible, setMoreVisible] = useState(false);
    const [arrowrotate,setarrowrotate]=useState(true);

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
  
  return (
    <>
      <div className="mainbar">
        <h1>Financials</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search in Financials" />
          <button><img src={image} alt="Search" /></button>
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
  );
}

export default App;