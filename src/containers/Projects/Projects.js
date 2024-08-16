import React from 'react'
import Slider from "react-slick";
import { Project } from '../Project/Project';
import SubHeader from '../SubHeader/SubHeader';

function Projects({projects}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <div className="container mbottom">

      <SubHeader title="PROJECTS" />
      <div className="row">
        <Slider {...settings} >
          {projects.map((item) => (
            <Project data={item} key={item.Id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects