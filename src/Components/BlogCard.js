import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './blogcard.css';

function BlogCard({ blog }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(fav => fav.id === blog.id));
  }, [blog.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== blog.id);
    } else {
      favorites.push(blog);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="blog col-xl-3 col-md-6 mb-4">
      <article>
        <div className="post-img">
          <img src={blog.previewImg || "/default-image.jpg"}
               alt={blog.title}
               className="img-fluid" />
          <p className="post-category">{blog.category}</p>
          <h2 className="title">
            <Link to={`/Blogs/${blog.id}`}>{blog.title}</Link>
          </h2>
          <div className="d-flex align-items-center">
            {/* <img
              src={blog.author?.previewImg || "/default-author.jpg"}
             alt={""}
              // alt={blog.author?.name || "Author"}
              className="img-fluid author-img flex-shrink-0"
            />
            <div className="flex-meta"> */}
              {/* <p className="post-author-list">{blog.author?.name || blog.author}</p> */}
              {/* <p className="post-date">{blog.date}</p> */}

              <div className="content">
                <div className="card-icons">
                  <ion-icon
                    name={isFavorite ? "heart" : "heart-outline"}
                    onClick={toggleFavorite}
                    style={{ color: isFavorite ? 'red' : 'white' }}>
                  </ion-icon>
                </div>
                <Link
              to={`/MovieShow/${blog._id}`}
              className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        {/* </div> */}
      </article>
    </div>
  );
}

export default BlogCard;