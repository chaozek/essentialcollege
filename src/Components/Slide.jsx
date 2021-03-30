import React,{useState, useRef, createRef} from 'react'
import Slider from "react-slick";
import "./Slide.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import lektori from "./data-lektori"
import { FiPlay } from "react-icons/fi";

import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`btn-left ${props.className}`}
      style={{ ...style, position:"absolute", top:"-1rem", left:"22rem"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`btn-right ${props.className}`}
    style={{ ...style, position:"absolute", top:"-1rem", left:"16.5rem" }}
      onClick={onClick}
    />
  );
}

export default function Slide() {
  const [isOpen, setOpen] = useState(false)
  const [videoId, setVideoId] = useState()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 2,
    rows: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          rows:1 
        },
        
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          rows:1 
        },
        
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          rows:1 

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      
    <div className="slide">

        <div className="section">
          <h1>Katedry</h1>
          <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />

        </div>
      <Slider {...settings}>
      {console.log(videoId)}

          {lektori.map((lektor, id) => {
            return (
              <div key={id}  className="card" style={{ height: "400px" }} onClick={()=>{setVideoId(lektor.id)}}>
                <h3>{ lektor.title}</h3>
                <h4>{lektor.name}</h4>
                <p>Více informací</p>
                <FiPlay className="play" onClick={() => setOpen(true)}/>
                <img src={lektor.photo} alt="" />
                </div>

           )
         })}
        </Slider> 
        </div>
    )
}
