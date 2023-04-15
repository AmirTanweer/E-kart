import React,{useState,useEffect} from 'react'
import './Slider.css'
export default function Slider() {

// Code goes here
// Code goes here
useEffect(() => {
    responsiveSlider();
 }, [])

const responsiveSlider=()=> {
    const slider = document.querySelector('.container');
    let sliderWidth = slider.offsetWidth / 3;
    const sliderList = document.querySelector('ul');
    let items = sliderList.querySelectorAll('li').length -2 ;
    let count = 1;
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
      const prevSlide=()=> {
      if(count > 1) {
        count = count - 2;
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
      }else if(count === 1) {
        count = items - 1;
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
      }
      
    };
     var nextSlide=()=> {
      if(count < items) {
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
        
      }else if(count === items) {
        sliderList.style.left = '0px';
        count = 1;
        
      }
    }
   
    setInterval(function() {
      nextSlide();
    }, 4000);
  }
  
  
  
  
  

  return (
    <div>
        <body>
            <h1>this is slider</h1>
        <div className="container">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <a href="/" onClick={prevSlide} id="prev"><i  className="fas fa-angle-left"></i></a>
      <a href="/" onClick={nextSlide} id="next"><i  className="fas fa-angle-right"></i></a>
      
    </div>
        </body>
    </div>
  )
}
