import { projects } from "../../content_option";
import lodash from "lodash";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='d-flex justify-content-end h1' onClick={onClick}></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='d-flex justify-content-start h1' onClick={onClick}></div>
  );
}

export default function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
    <div className='container mt-5 pt-5'>
      <div className='row'>
        <div className='col-md-6 col-12'>
          <figure className='home-project-texts h-100 d-flex flex-column justify-content-center'>
            <blockquote className='blockquote'>
              <p>
                In front-end use the most advanced modern methods, use the best
                modern technologies of programming for the design and attractive
                of the pages, on other side, we use the best high-level
                programming langauge such as Python, C#, and JavaScript for
                security.
              </p>
            </blockquote>
            <figcaption class='blockquote-footer'>
              For more contact us{" "}
              <cite title='Source Title'>Hussien Tawhidi</cite>
            </figcaption>
            <Link to='/portfolio' className='text-danger'>
              <span className='lead'>See all project</span>
            </Link>
          </figure>
        </div>
        <div className='col-md-6 col-12'>
          <div className='single'>
            <div className='row'>
              <Slider {...settings}>
                {projects.map((project) => (
                  <div key={project.id}>
                    <img src={project.img} alt='' className='img-fluid' />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
