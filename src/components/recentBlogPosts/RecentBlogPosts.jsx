import { truncate } from "lodash";
import { blogPostData } from "../../content_option";

export default function RecentBlogPosts() {
  return (
    <div className='recent-post-blog'>
      <div className='container'>
        <p className='h1'>Recent Posts</p>
        <div className='row'>
          {blogPostData.slice(0, 3).map((item) => (
            <div className='col-md-4 col-12 h-50'>
              <div className=' transparent'>
                <img src={item.image} className='card-img-top ' alt='...' />
                <div className='card-body transparent'>
                  <h5 className='card-title my-4'>{item.title}</h5>
                  <p className='card-text'>
                    {truncate(item?.para0, {
                      length: 80,
                    })}
                  </p>
                  <a href='/' className='btn text-danger'>
                    See more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
