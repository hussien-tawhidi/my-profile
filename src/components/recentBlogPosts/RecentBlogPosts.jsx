import { truncate } from "lodash";
import { Link } from "react-router-dom";
import { blogPostData } from "../../content_option";
import "./recentHomeBlog.css";

export default function RecentBlogPosts() {
  return (
    <div className='recent-post-blog py-5 mt-5'>
      <div className='blog-title'>
        <h1>
          L<span>EA</span>
          RN
        </h1>
        <Link to='/blog'>
          {" "}
          <p className='d-flex justify-content-end'>On my blog</p>
        </Link>
      </div>
      <div className='container my-5'>
        <div className='row'>
          {blogPostData.slice(0, 3).map((item) => (
            <div className='col-md-4 col-12 h-50'>
              <div className='transparent rounded overflow-hidden'>
                <img src={item.image} className='card-img-top ' alt='...' />
                <p className='d-flex align-items-center justify-content-between mt-2 opacity-75'>
                  <p>
                    <span className='me-1'>
                      <i class='bi bi-calendar3'></i>
                    </span>
                    2023/4/25 13:44
                  </p>
                  <p className='mx-2'>
                    <span>
                      <i class='bi bi-person'></i>
                    </span>
                    Admin
                  </p>
                  <p>
                    <span className="me-1">
                      <i class='bi bi-chat'></i>
                    </span>
                    3
                  </p>
                </p>
                <div className='card-body transparent'>
                  <p className='card-title my-3'>
                    <h4 className='my-2'>
                      <span>{truncate(item.title)}</span>
                    </h4>
                  </p>
                  <p className='card-text'>
                    {truncate(item?.para0, {
                      length: 65,
                    })}
                    <a href='/' className='btn text-danger'>
                      Learn more ...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to='/blog'
        className='text-danger d-flex justify-content-center h2 my-4'>
        See all blogs
      </Link>
    </div>
  );
}
