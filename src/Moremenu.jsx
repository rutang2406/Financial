import React,{useCallback, useState} from "react";
import image from "./assets/search.png";
import Search from "./Search.jsx";
function Moremenu(){
    const [moreVisible, setMoreVisible] = useState(false);
    const [arrowrotate,setarrowrotate]=useState(true);
    const [search,setsearch]=useState("");

    const keydown=useCallback((event)=>{
        if(event.key=="Enter"){
            searchFunction();
        }
    },[]);

    const searchFunction =async() => { 
        const query = document.querySelector('.searchinput').value;
        setsearch(query);
    };
    if(search){
        return <Search value={search}/>;
    }
    const Menu=async (value) => {
        setsearch(value);
    }
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
    return(
        <>
        <div className="mainbar">
            <h1>Financial</h1>
        <div className="search-bar" onKeyUp={keydown} onKeyDown={keydown}>
          <input type="text" placeholder="Search in Financials" className='searchinput'/>
          <button id="searchbutton" ><img src={image} alt="Search" /></button>
        </div>
        </div>
        <div className="Mainmenu">
        <ul>
          <li><a onClick={()=>Menu("Economy")}>Economy</a></li>
          <li><a onClick={()=>Menu("Politics")}>Politics</a></li>
          <li><a onClick={()=>Menu("Business")}>Business</a></li>
          <li><a onClick={()=>Menu("Industries")}>Industries</a></li>
          <li><a onClick={()=>Menu("Real Estates")}>Real Estates</a></li>
          <li>
            <div className="More" onClick={toggleMoreMenu} >
              More
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </li>
        </ul>
        <div className="moremenu">
            <div className="submenus">
                <div className="worldaffairs">
                    <h4>World Affairs</h4>
                    <ul>
                        <span><a onClick={()=>Menu("Geopolitics")}>Geopolitics</a></span>
                        <span><a onClick={()=>Menu("International")}>International</a></span>
                        <span><a onClick={()=>Menu("Relations")}>Relations</a></span>
                        <span><a onClick={()=>Menu("Global Trade")}>Global Trade</a></span>
                        <span><a onClick={()=>Menu("Conflict Zones")}>Conflict Zones</a></span>
                    </ul>
                </div>
                <div className="society">
                    <h4>Society</h4>
                    <ul>
                        <span><a onClick={()=>Menu("Culture")}>Culture</a></span>
                        <span><a onClick={()=>Menu("Human Rights")}>Human Rights</a></span>
                        <span><a onClick={()=>Menu("Public Health")}>Public Health</a></span>
                        <span><a onClick={()=>Menu("Migration")}>Migration</a></span>
                        <span><a onClick={()=>Menu("Education")}>Education</a></span>
                    </ul>
                </div>
                <div className="environment">
                    <h4>Environment</h4>
                    <ul>
                        <span><a onClick={()=>Menu("Climate Changes")}>Climate Change</a></span>
                        <span><a onClick={()=>Menu("Sustainability")}>Sustainability</a></span>
                        <span><a onClick={()=>Menu("Conservation")}>Conservation</a></span>
                        <span><a onClick={()=>Menu("Energy")}>Energy</a></span>
                        <span><a onClick={()=>Menu("Wildlife")}>Wildlife</a></span>
                    </ul>
                </div>
                <div className="technology">
                    <h4>Technology</h4>
                    <ul>
                        <span><a onClick={()=>Menu("Artificial Intelligence")}>Artificial Intelligence</a></span>
                        <span><a onClick={()=>Menu("Cybersecurity")}>Cybersecurity</a></span>
                        <span><a onClick={()=>Menu("Culture")}>Blockchain & Cryptocurrency</a></span>
                        <span><a onClick={()=>Menu("Blockchain & Cryptocurrency")}>Innovations and Startups</a></span>
                        <span><a onClick={()=>Menu("Gadgets")}>Gadgets</a></span>
                    </ul>
                </div>
                <div className="health">
                    <h4>Health</h4>
                    <ul>
                        <span><a onClick={()=>Menu("Nutrition")}>Nutrition</a></span>
                        <span><a onClick={()=>Menu("Wellness")}>Wellness</a></span>
                        <span><a onClick={()=>Menu("Fitness")}>Fitness</a></span>
                        <span><a onClick={()=>Menu("Mental Health")}>Mental Health</a></span>
                        <span><a onClick={()=>Menu("Medical Research")}>Medical Research</a></span>
                    </ul>
                </div>
                <div className="science">
                    <h4>Science</h4>
                    <ul>
                        <span><a onClick={()=>Menu("Space Exploration")}>Space Exploration</a></span>
                        <span><a onClick={()=>Menu("Biotechnology")}>Biotechnology</a></span>
                        <span><a onClick={()=>Menu("Physics")}>Physics</a></span>
                        <span><a onClick={()=>Menu("Environmental Science")}>Environmental Science</a></span>
                    </ul>
                </div>
            </div>
        </div>
      </div>
        
        <div className="clickedMenu">
            {search && <Search value={search}/>};
        </div>
       </> 
    );
}
export default Moremenu;