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
