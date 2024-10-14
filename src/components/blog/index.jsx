import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
const BlogItem = ({ baseUrl, data, slug }) => {
  return (
    <>
      <div className="ltn__blog-item ltn__blog-item-3">
        <div className="ltn__blog-img">
          <Link href={`${baseUrl}/${slug}`}>
            <img src={`/img/blog/${data.thumbImg}`} alt={`${data.title}`} />
          </Link>
        </div>
        <div className="ltn__blog-brief">
          <h3 className="ltn__blog-title">
            <Link href={`${baseUrl}/${slug}`}>{data.title}</Link>
          </h3>
          <div className="ltn__blog-meta-btn">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-date">
                  <FaRegCalendarAlt className="me-2" />
                  {data.date}
                </li>
              </ul>
            </div>
            <div className="ltn__blog-btn">
              <Link href={`${baseUrl}/${slug}`}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
