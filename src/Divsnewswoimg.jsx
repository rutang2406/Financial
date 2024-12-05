function Divsnewswoimg(props){
    const isoString = props.publishedAt;
    const date = new Date(isoString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    return(
        <>
            <a href={props.url} target="_blank">
                <div className="newscontainerwoimg">
                {props.topHeadline?<div className="topheadline"><h4>EXCLUSIVE</h4></div>:null}
                    <h2>{props.title}</h2>
                    <div className="ad">
                            <p>{formattedDate}</p><div className="seperator"></div>
                            <p>{props.author || "Unknown author"}</p>
                        </div>
                    {props.content!==null?<p>{props.content}</p>:null}
                </div>
                <hr className="thick" />
            </a>
        </>
    );
}
export default Divsnewswoimg;