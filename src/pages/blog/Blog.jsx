import lodash from "lodash";
import moment from "moment/moment";
import { blogData } from "../../content_option";
import { FaClock } from "react-icons/fa";

export default function Blog() {
  return (
    <>
      <div className='blog'>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <img src='./blog-banner.jpg' alt='' className='img-fluid' />
            <div className='container'>
              <div className='row justify-content-center'>
                {blogData?.map((topic) => (
                  <div className='col-lg-8 col-12' key={topic.id}>
                    <div className='post-preview my-4'>
                      <a href='post.html'>
                        <h2 className='post-title'>{topic.title}</h2>
                      </a>
                      <p>
                        {lodash.truncate(topic.para0, {
                          length: 150,
                          separator: " ",
                        })}
                      </p>
                      <p className='post-meta'>
                        Posted by
                        <a href='#!'>Start Bootstrap</a>
                        <p className='time'>
                          <span className='mx-2'>
                            <FaClock />
                          </span>
                          <span>{moment().startOf("seconds").fromNow()}</span>
                        </p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='single'>
              <div class='card bg-transparent'>
                <img src='./recent1.jpg' class='card-img-top' alt='...' />
                <div class='card-body transparent'>
                  <h5 class='card-title'>
                    ChatGPT is a game changer, but it could become a problem…
                  </h5>
                  <p class='card-text'>
                    {lodash.truncate(
                      "As technology continues to advance, artificial intelligence (AI) is quickly becoming a game changer in many industries. Among the most promising AI applications is ChatGPT, a language model that has been hailed as a significant step forward in natural language processing. ChatGPT is based on the GPT-3.5 architecture, a model developed by machine learning expert "
                    )}
                  </p>
                  <a href='/' class='btn btn-light'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className='single'>
              <div class='card bg-transparent'>
                <img src='./recent2.jpg' class='card-img-top' alt='...' />
                <div class='card-body transparent'>
                  <h5 class='card-title'>
                    ChatGPT is a game changer, but it could become a problem…
                  </h5>
                  <p class='card-text'>
                    {lodash.truncate(
                      "As technology continues to advance, artificial intelligence (AI) is quickly becoming a game changer in many industries. Among the most promising AI applications is ChatGPT, a language model that has been hailed as a significant step forward in natural language processing. ChatGPT is based on the GPT-3.5 architecture, a model developed by machine learning expert "
                    )}
                  </p>
                  <a href='/' class='btn btn-light'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
