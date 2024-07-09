import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import styled from 'styled-components'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const MainSlideBlock = styled.div`
  position:relative; 
  .slide {
    height:40vw; 
    background-position:center; 
    background-size:cover; 
    &.slide1 { background-image:url('./assets/image/main01.jpg')}
    &.slide2 { background-image:url('./assets/image/main02.jpg')}
    &.slide3 { background-image:url('./assets/image/main03.jpg')}
  }
  .slick-dots {
    position:absolute;
    bottom:50px;
    left:50%; 
    transform:translateX(-50%, -50%);
    li { display:inline-block; margin:0 15px;  
      button { width:12px; height:12px; 
        background:#000; border-radius:50%;
        text-indent:-9999px; overflow:hidden; 
      }
      &.slick-active {
        button {background:white; }
      }
    }
  }
  .slick-arrow {
    position:absolute; top:50%; transform:translateX(-50%, -50%); 
    font-size:20px; color:#fff; opacity:0.5; 
    &.slick-prev { left:70px;  z-index:9999 }
    &.slick-next { right:70px;  } 
    
    }
    
  .slick-arrow:hover{
  opacity:1;  animation: arrowHover 0.9s forwards;
}
@keyframes arrowHoverIn {
    0% {
        opacity: 0.5;
        transform: translateY(-50%);
    }
    100% {
        opacity: 1;
        transform: translateY(-50%);
    }
}

@keyframes arrowHoverOut {
    0% {
        opacity: 1;
        transform: translateY(-50%);
    }
    100% {
        opacity: 0.5;
        transform: translateY(-50%);
    }
}

.slick-arrow:hover {
  animation: arrowHoverIn 0.3s forwards;
}

.slick-arrow:not(:hover) {
  animation: arrowHoverOut 0.3s forwards;
}
`

const MainSlide = () => {
  const options = {
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:true,
    fade:true,
    prevArrow : <img src='./assets/image/dsadsa.png' alt='' />,
    nextArrow : <img src='./assets/image/asdasd.png' alt=''/>
  }
  return (
    <MainSlideBlock>
      <Slider {...options}>
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
      </Slider>
    </MainSlideBlock>
  );
};

export default MainSlide;