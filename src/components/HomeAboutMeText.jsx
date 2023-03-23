import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { truncate } from "lodash";
import { dataabout } from "../content_option";

export default function HomeAboutMeText() {
  return (
    <div className='home-about-me my-5 pb-2'>
      <div className='container'>
        <h1 className='home-recent-blog-post-title my-2'>{dataabout.title}</h1>
        <p className='lead'>
          <span className='mx-2 text-danger'>
            <FaQuoteLeft />
          </span>
          {truncate(dataabout.aboutme, { length: 400 })}
          <Link to={"/about"} className='text-danger'>
            for more
          </Link>
        </p>
      </div>
    </div>
  );
}
