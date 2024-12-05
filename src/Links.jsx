function Links(props){
    const mainURL=`https://newsapi.org/v2/everything?q=${props.value}&apiKey=0a6d830670a8447ab8ca8bce035d61e6`;
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
          Setloading(false);
        }  
        catch (error) {
            console.error("Error fetching data:", error);
            Setloading(false);
          }
    return(
        <>

        </>
    );
}
export default Links;