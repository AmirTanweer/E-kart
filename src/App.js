import React,{useState} from 'react'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'

// import SingleProduct from './components/SingleProduct/SingleProduct'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CheckOut from './components/CheckOut/CheckOut'

import Footer from './components/Footer/Footer'
import Components from './components/EducationalKit/Components'
// import Slider from './components/Slider/Slider'
import Slider2 from './components/Slider2/Slider2'
// import AllProducts from './components/SingleProduct/AllProducts'
export default function App() {
  const [text, setText] = useState("")
  const handleOnChange=(e)=>{
    console.log("This is app js")
        console.log(e.target.value);
        setText(e.target.value)
        e.preventDefault();
  }
  // console.log(text);
  // const [products, setProducts] = useState([
  //   { id: 1, name: 'Product 1', description: 'Description for product 1' },
  //   { id: 2, name: 'Product 2', description: 'Description for product 2' },
  //   { id: 3, name: 'Product 3', description: 'Description for product 3' },
  // ]);
  return (
    <div>
      
      <Router>
      <NavBar text={text} handleOnChange={handleOnChange} setText={setText}/>
      
        <Routes>
          
      
          <Route path='/' element={ <Slider2/>}/>
          <Route path='/product' element={ <Product text={text}/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/contact' element={ <Contact/>}/>
          <Route path='/components' element={ <Components/>}/>
          {/* <Route path='/' element={ <AllProducts products={products}
            onProductClick={(productId) => {
              window.location.href = `/products/${productId}`;
            }}/>}/>
          <Route path='/products/:productId' element={ <SingleProduct products={products}/>}/> */}
          
         
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  )
}
