import { Link } from "react-router-dom";
import lodash from "lodash";
import Slider from "react-slick";
import { homeFeatures } from "../content_option";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='d-flex justify-content-end h1' onClick={onClick}>
      <i class='bi bi-arrow-right'></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='d-flex justify-content-start h1' onClick={onClick}>
      <i class='bi bi-arrow-left'></i>
    </div>
  );
}

export default function HomeFeatures() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='home-features'>
      <div className='container'>
        <div className='row'>
          <Slider {...settings}>
            {homeFeatures.map((features) => (
              <div className='col-lg-3 col-md-6' key={features.id}>
                <div className='single-features d-flex flex-column align-items-center text-center'>
                  <span className='h1'>{features.icon}</span>
                  <h1 className='h3'>{features.title}</h1>
                  <p className='lead'>
                    {lodash.truncate(features.desc, { length: 80 })}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <p className='text-center'>
            <Link to='/nessesory' className='text-danger'>
              <h5>More about . . . </h5>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
