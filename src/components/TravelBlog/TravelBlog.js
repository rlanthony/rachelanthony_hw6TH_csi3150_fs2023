import React from "react";
import "./travelBlog.css";

function TravelBlog(props) {
  const { placeHeading, placeImg1, placeImg2, placeImg3, placeDescription } =
    props;

  return (
    <div className="travelblog-wrapper">
      <h3 className="travelblog-header">{placeHeading}</h3>
      <div className="travelblog-image-wrapper">
        <img src={placeImg1} alt="Scenic View" className="travelblog-image1" />
        <img src={placeImg2} alt="Scenic View" className="travelblog-image2" />
        <img src={placeImg3} alt="Scenic View" className="travelblog-image3" />
      </div>
      <p className="travelblog-description">{placeDescription}</p>
    </div>
  );
}

export default TravelBlog;
