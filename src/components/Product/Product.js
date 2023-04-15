import axios from 'axios'
import React,{useState,useEffect,useRef} from 'react'
// import CheckOut from '../CheckOut/CheckOut';
// import Data from '../Productlist/ProductList.json'
import './Product.css'
import {Link} from "react-router-dom"
export default function Product(props) {
  const mounted = useRef();
    // console.log(Data)
    // Data.productlist.forEach(element => {
    //     console.log(element)
    // });
  //   let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = <CheckOut/>; 
  //   navigate(path);
  // }
  // const [Data, setData] = useState(second)
  
    

//   useEffect(() => {
//     const url = "https://hostapi-production-d750.up.railway.app/api/products";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
// }, []);
console.log("product -> ",props.text);
const [parseddata, setParsedData] = useState([])
const getProducts= async (url)=>{
  const res= await axios.get(url);
  // console.log(res.data);
  setParsedData(res.data.myData);
}

// if(props.text!==''){
  //    url=`https://hostapi-production-d750.up.railway.app/api/products?productname=${props.text}`

// }else{
  
  //    url=`https://hostapi-production-d750.up.railway.app/api/products`
  // }
  let url;
  useEffect(()=>{
    if (!mounted.current) {
      // do componentDidMount logic
       url=`https://hostapi-production-d750.up.railway.app/api/products`
     mounted.current = true;
    } else {
      // do componentDidUpdate logic
       url=`https://hostapi-production-d750.up.railway.app/api/products?productname=${props.text}`
    }

    getProducts(url);
  },[]);
 
 console.log(parseddata);
  return (
    <div className='mx-3 cont'>
      
      <div className="row">
        {
            parseddata.map((element)=>{
                return     <div key={element._id} className="col-md-3 my-2">
                <div className="card"  style={{width: "18rem"}}>
          <img src={element.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{element.productname.slice(0,25)}...</h5>
            <p className="card-text">{element.description.slice(0,150)}...</p>
            <p style={{display:"inline"}}><strong id='price'>₹{element.price}</strong></p>
            <Link style={{float:"right"}} to="/checkout"  className="btn btn-primary" >Buy</Link>
          </div>
        </div>
                </div>
            })
        }
       
      </div>
    </div>
  )
}
