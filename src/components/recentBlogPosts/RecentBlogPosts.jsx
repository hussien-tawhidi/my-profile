import { truncate } from "lodash";
import { Link } from "react-router-dom";
import { blogPostData } from "../../content_option";
import "./recentHomeBlog.css"

export default function RecentBlogPosts() {
  return (
    <div className='recent-post-blog py-5 mt-5'>
        <div className='blog-title'>
          <h1>
            L<span>EA</span>
            RN
          </h1>
          <p className="d-flex justify-content-end">On my blog</p>
        </div>
      <div className='container'>
        <p className='home-recent-blog-post-title d-flex my-4'>
          Recent posts on blog
        </p>
        <div className='row'>
          {blogPostData.slice(0, 3).map((item) => (
            <div className='col-md-4 col-12 h-50'>
              <div className='transparent rounded overflow-hidden'>
                <img src={item.image} className='card-img-top ' alt='...' />
                <div className='card-body transparent'>
                  <h4 className='card-title my-3'>{truncate(item.title)}</h4>
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
