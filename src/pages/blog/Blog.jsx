import lodash, { truncate } from "lodash";
import moment from "moment/moment";
import { blogPostData } from "../../content_option";
import "./blog.scss";
export default function Blog() {
  return (
    <>
      <div className='blog'>
        <div className='container'>
          <img src='./blog-banner.jpg' alt='' className='img-fluid' />
          <div className='row'>
            {blogPostData?.map((topic) => (
              <div className='col-4'>
                <div class='blog_post my-3'>
                  <img src={topic.image} alt='' className='img-fluid' />
                  <div class='container_copy'>
                    <p className='opacity-50 d-flex justify-content-between align-items-center mt-3 mb-2'>
                      <p>
                        <span className='mx-2'>
                          <i class='bi bi-clock'></i>
                        </span>
                        <span>
                          {" "}
                          {moment(topic.postTime).startOf("second").fromNow()}
                        </span>
                      </p>
                      <p>
                        <span className='mx-2'>
                          <i class='bi bi-chat'></i>
                        </span>
                        <span>3</span>
                      </p>
                    </p>
                    <h4>{truncate(topic.title)}</h4>
                    <p>
                      {lodash.truncate(topic.para0, {
                        length: 80,
                        separator: " ",
                      })}
                    </p>
                    <a class='btn_primary' href='/' target='_blankp'>
                      Read More
                    </a>
                  </div>
                  <div className='author my-2'>
                    <div className='profile'>
                      <img src='/profile.png' alt='' className='img-fluid' />
                    </div>
                    <div className='texts opacity-75'>
                      <p className='name'>Hussien Tawhidi</p>
                      <p className='jobs'>Programmer, SEO, ...</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
