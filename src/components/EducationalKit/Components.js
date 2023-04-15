import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Components.css'
export default function Components() {
  
  const parsing=()=>{
    const options = {
      method: 'GET',
      url: 'https://amazon23.p.rapidapi.com/product-search',
      params: {query: 'arduino components', country: 'IN'},
      headers: {
        // 'X-RapidAPI-Key': '2b5058569emsh17f03239bd14fb3p10cfe0jsn973b7e2b253c',
        // 'X-RapidAPI-Key': '44a980f997mshc4f4e20ff3c6dd3p1f5874jsnaac47f3ce70f',
        'X-RapidAPI-Key': '2d490ee431msh6ff7a6a9eaa88f7p17064ajsnf030a845a40b',
        'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
      }
    };
    
    // console.log(response.data.result);
    axios.request(options).then(function (response) {
      
      setParsedData(response.data.result);
      
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  const [parseddata, setParsedData] = useState([]);
  useEffect(() => {
   parsing();
  }, [])
console.log(parseddata)
  return (
    <div>
         <div className='mx-3 cont'>
      
      <div className="row">
        {
            parseddata.map((element)=>{
                return     <div key={element.asin}  className="col-md-3 my-3">
                <div className="card" style={{width: "18rem"}}>
          <img src={element.thumbnail}  style={{height: "200px"}} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{element.title.slice(0,45)}...</h5>
            
            <p style={{display:"inline"}}><strong id='price'>₹{element.price.current_price}</strong></p>
            <a style={{float:"right"}} href="/"  className="btn btn-primary" >Buy</a>
          </div>
        </div>
                </div>
            })
        }
       
      </div>
    </div>
    </div>
  )
}
