import lodash from "lodash";
import moment from "moment/moment";
import { blogData } from "../../content_option";
import { FaClock } from "react-icons/fa";

export default function Blog() {
  return (
    <div className='blog'>
      <img src='./blog-banner.jpg' alt='' className='img-fluid' />
      <div className='container'>
        <div className='row justify-content-center'>
          {blogData?.map((topic) => (
            <div className='col-12 col-lg-8 col-12' key={topic.id}>
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
  );
}
