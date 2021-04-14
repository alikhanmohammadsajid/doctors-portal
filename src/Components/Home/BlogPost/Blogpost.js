import React from 'react';
import './BlogPost.css'
const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div className="card blog-card shadow-lg p-3 mb-5 bg-body rounded col-md-4 me-3">
            <div className="card-header d-flex  align-items-center justify-content-center">
                <img className="mx-3" src={authorImg} alt="" width="60"/>
                <div>
                    <h6>{author}</h6>
                    <p>{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5 className="text-center">{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default BlogPost;