import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel'
import './Slider2.css'
export default function Slider2() {
    const [parseddata, setParsedData] = useState([])
const getProducts= async (url)=>{
  const res= await axios.get(url);
  // console.log(res.data);
  setParsedData(res.data.myData);
}

const url=`https://hostapi-production-d750.up.railway.app/api/products`
  useEffect(()=>{
    getProducts(url);
  },[]);




    const responsive = {
        
        0: { items: 1 },
        256: { items: 2 },
        512: { items: 3 },
        768: { items: 4 },
        1024: { items: 5 },
        
    };
    
    const items = [
        
       
];
parseddata.map((element)=>{
   items.push( <img  className='item' src={element.img} alt='photo1'   />);
})
return (
    
    < >
    <div className="cont my-2" style={{backgroundColor:"#5cbde466"}}>
        <h1 style={{textAlign:"center",color:"white"}}>Today's Deal</h1>
    <AliceCarousel 
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy ="alternate"
        autoPlay="true"
        infinite='true'
        animationType="slide"
        autoPlayInterval="800"
    />
    </div>
    </>
  )
}
