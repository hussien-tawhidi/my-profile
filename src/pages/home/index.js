import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/bg.png";
import RecentBlogPosts from "../../components/recentBlogPosts/RecentBlogPosts";
import HomeAboutMeText from "../../components/HomeAboutMeText";
import HomeFeatures from "../../components/HomeFeatures";
import Projects from "../../components/projects/Projects";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id='home' className='home'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='intro_sec d-block d-lg-flex align-items-center '>
          <div
            className='h_bg-image order-1 order-lg-2 h-100 h-sm-50'
            style={{ backgroundImage: `url(${profileImg})` }}></div>
          <div className='text order-2 order-lg-1 h-100 d-lg-flex justify-content-center '>
            <div className='align-self-center '>
              <div className='intro mx-auto'>
                <h2 className='mb-1x'>{introdata.title}</h2>
                <h1 className='fluidz-48 mb-1x'>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className='mb-1x'>{introdata.description}</p>
                <figcaption className='blockquote-footer mt-1'>
                  <cite title='Source Title'>Hussien Tawhidi</cite>
                </figcaption>
                <div className='intro_btn-action home-btn-margin-top'>
                  <Link to='/portfolio' className='text_2'>
                    <div id='button_p' className='ac_btn btn '>
                      My Portfolio
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='/contact'>
                    <div id='button_h' className='ac_btn btn'>
                      Contact Me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeAboutMeText />
        <HomeFeatures />
        <Projects />
        <RecentBlogPosts />
      </section>
    </HelmetProvider>
  );
};
