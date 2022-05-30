import { Button } from "bootstrap";
import React from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <CardGroup className="col-12 col-md-5 m-1 ">
        <Card>
          <CardImg alt="Jaehyun" src="pic/jae.JPG" top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Jaehyun</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Jaehyun nct
            </CardSubtitle>
            <CardText>
              Jeong Yun-o (Korean: 정윤오; born Jeong Jae-hyun (Korean: 정재현);
              February 14, 1997), better known by his stage name Jaehyun, is a
              South Korean singer and actor. He is a member of the South Korean
              boy group NCT and its sub-units NCT U and NCT 127
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card className="border">
          <CardImg alt="Jaehyun" src="pic/jae2.JPG" top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Jaehyun</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Jaehyun nct
            </CardSubtitle>
            <CardText>
              Jeong Yun-o (Korean: 정윤오; born Jeong Jae-hyun (Korean: 정재현);
              February 14, 1997), better known by his stage name Jaehyun, is a
              South Korean singer and actor. He is a member of the South Korean
              boy group NCT and its sub-units NCT U and NCT 127
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card className="border">
          <CardImg alt="Jaehyun" src="pic/jae3.JPG" top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Jaehyun</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Jaehyun nct
            </CardSubtitle>
            <CardText>
              Jeong Yun-o (Korean: 정윤오; born Jeong Jae-hyun (Korean: 정재현);
              February 14, 1997), better known by his stage name Jaehyun, is a
              South Korean singer and actor. He is a member of the South Korean
              boy group NCT and its sub-units NCT U and NCT 127
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Home;
