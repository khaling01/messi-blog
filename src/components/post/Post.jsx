import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Messi The Goat
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      During his early years at Barcelona, Messi formed a formidable attacking partnership with players like Ronaldinho, Samuel Eto'o, and Thierry Henry. Later, he became the centerpiece of Barcelona's iconic trio, MSN, alongside Luis Suárez and Neymar. Together, they were instrumental in helping Barcelona achieve tremendous success in domestic and international competitions.
      </p>
    </div>
  );
}