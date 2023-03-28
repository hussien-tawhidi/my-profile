import { Link } from "react-router-dom";
import { blogPostData } from "../../content_option";
import "./seo.scss";

export default function SeoAndWeb() {
  const seoData = blogPostData?.find(
    (item) => item?.title === "Why SEO Is Important To Your Website"
  );
  return (
    <div className='seo pb-5'>
      <div className='container'>
        <img src={seoData?.image} alt='' className='img-fluid' />
        <div className='content'>
          <h1 className='title'>
            <span>
              <i class='bi bi-asterisk'></i>
            </span>
            {seoData?.title}
          </h1>
          <div className='texts'>
            <p className='lead'>{seoData?.para0}</p>
            <div className='shadow-lg my-5'>
              <h3 className='h3 mt-4 text-uppercas'>
                <span>
                  <i class='bi bi-asterisk'></i>
                </span>{" "}
                {seoData?.title1}
              </h3>
              <p className='lead'>{seoData?.para1}</p>
              <p className='lead'>{seoData?.para2}</p>
              <p className='lead'>{seoData?.para3}</p>
              <p className='lead'>{seoData?.para4}</p>
              <p className='lead'>{seoData?.para5}</p>
              <p className='lead'>{seoData?.para6}</p>
              <p className='lead'>{seoData?.para7}</p>
              <p className='lead'>{seoData?.para8}</p>
            </div>
            <div className='my-5'>
              <h3 className='h3 mt-4'>{seoData?.title2}</h3>
              <p className='lead'>{seoData?.para9}</p>
              <p className='lead'>{seoData?.para10}</p>
            </div>
            <h3 className='h3 mt-4'>{seoData?.title3}</h3>
            <p className='lead'>{seoData?.para11}</p>
            <p className='lead'>{seoData?.para12}</p>
          </div>
        </div>
        <p className='h3 text-center '>
          <Link to='/blog' className='text-danger'>
            See all blog posts
          </Link>
        </p>
      </div>
    </div>
  );
}
