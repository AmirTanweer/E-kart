import React,{useState} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
export default function NavBar(props) {
    // const [text, setText] = useState('')
    // const handleOnChange=(e)=>{
    //     console.log(e.target.value)
    //     e.preventDefault();
    //     setText(e.target.value)
    // }
  return (
    <div>
        <div className="purple">
  
   
<header>

    <div className="container cont topBotomBordersIn">
         <Link to='/' style={{color: "white"}} >HOME</Link>
         <Link to="/product" style={{color: "white"}}  >PRODUCT</Link>
         <Link to="/components" style={{color: "white"}}  >COMPONENTS</Link>
         <Link to="/about" style={{color: "white"}}  >ABOUT</Link>
         <Link to="/contact" style={{color: "white"}}  >CONTACT</Link>
         <li><input type="search" name="search" onChange={props.handleOnChange} value={props.text}  id="search" placeholder='search products' /></li>
         
    </div>
</header>

</div>
<main >

    <div id="page_banner">
        <div id="banner">
            <div id="msg_box">

                <p className="summer_s">Summer Sales</p>
                <h1 id="seventy_p">50% OFF</h1>
                 

                <button id="shop_now" type="submit" name="shop now" >Shop now <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
      </div>
      
    
</main>
    </div>
  )
}
