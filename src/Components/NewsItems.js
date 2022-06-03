import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsurl } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yoda_chase.jpg/450px-Yoda_chase.jpg?20120620020610"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          style={{ width: "360px", height: "300px" }}
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsurl} target="blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItems;
