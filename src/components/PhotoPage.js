// import React from "react";
// import { Media } from "reactstrap";
// import { PhotoDetail } from "./Photos";
// import {
//   Card,
//   CardImg,
//   CardImgOverlay,
//   CardText,
//   CardBody,
//   CardTitle,
// } from "reactstrap";

// function RenderPhotoItem({ photo, onClick }) {
//   return (
//     <Card onClick={() => onClick(photo.id)}>
//       <CardImg width="100%" src={photo.image} alt={photo.name} />
//       <CardImgOverlay>
//         <CardTitle>{photo.name}</CardTitle>
//       </CardImgOverlay>
//     </Card>
//   );
// }

// const PhotoPage = (props) => {
//   const photo = props.Photos.map((photo) => {
//     return (
//       <div className="col-12 col-md-5 m-1" key={photo.id}>
//         <RenderPhotoItem photo={photo} onClick={props.onClick} />
//       </div>
//     );
//   });
//   return (
//     <div className="container">
//       <div className="row">{photo}</div>
//       <PhotoDetail
//         Photo={props.selectedPhoto}
//         description={props.description}
//       />
//     </div>
//   );
// };

// export default PhotoPage;

import React, { useState } from "react";
import { Card, CardGroup, CardImg } from "reactstrap";
import { Photos } from "./Photos";
const PhotoPage = () => {
  const [show, setShow] = useState(-1);
  function handleClick(photo) {
    console.log(photo);
    setShow(photo);
  }
  return (
    <div className="d-flex justify-content-center ">
      <CardGroup className="col-12 col-md-10 m-1 ">
        {Photos.map((p) => {
          return (
            <Card onClick={() => handleClick(p)} style={{ cursor: "pointer" }}>
              <CardImg alt={p.name} src={p.image} width="100%" />
            </Card>
          );
        })}
      </CardGroup>
      {show != -1 ? (
        <Card>
          <h2>{show.name}</h2>
          <br />
          {show.description}
        </Card>
      ) : null}
    </div>
  );
};

export default PhotoPage;
