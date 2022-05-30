import React, { useState } from "react";
import {
  Card,
  CardGroup,
  CardImg,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";
import { Photos } from "./Photos";
const PhotoPage = () => {
  const [show, setShow] = useState(-1);
  function handleClick(photo) {
    console.log(photo);
    setShow(photo);
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center ">
        <CardGroup className="col-12 col-md-8 m-1 ">
          {Photos.map((p) => {
            return (
              <Card
                key={p.id}
                onClick={() => handleClick(p)}
                style={{ cursor: "pointer" }}
              >
                <CardImg alt={p.name} src={p.image} width="100%" />
              </Card>
            );
          })}
        </CardGroup>
      </div>
      {show != -1 ? (
        <div className="d-flex justify-content-center">
          <Card style={{ padding: "20px", borderRadius: "15px", width: "80%" }}>
            <h2>{show.name}</h2>
            <br />
            {show.description}
            <br />
            <br />
            <h4>✎Comment</h4>
            <Form>
              <FormGroup className="col-2">
                <Label for="Name">User Name</Label>
                <Input
                  invalid={username == ""}
                  valid={username != ""}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormText>Please mark your name.</FormText>
              </FormGroup>
              <FormGroup className="col-3">
                <Label for="Email">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  invalid={!new RegExp("[a-zA-Z0-9]+@[a-zA-Z]+").test(email)}
                  valid={new RegExp("[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]").test(
                    email
                  )}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormFeedback valid>
                  Sweet! that email is available
                </FormFeedback>
                <FormText>Please key your email.</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText" sm={3}>
                  Your comment
                </Label>
                <Col sm={10}>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    invalid={comment == ""}
                    valid={comment != ""}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <FormFeedback valid>
                    Sweet! please submit your comment
                  </FormFeedback>
                </Col>
              </FormGroup>
            </Form>
            <div>
              <Button type="submit" value="submit" color="info" outline>
                Submit
              </Button>
              <Button color="success" outline>
                <span className="fa fa-thumbs-up fa-lg"></span>
              </Button>
            </div>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default PhotoPage;
