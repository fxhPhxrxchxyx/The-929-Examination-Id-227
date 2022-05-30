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
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
} from "reactstrap";
import { Photos } from "./Photos";
import { increment } from "../redux/photo";
import { connect } from "react-redux";
function mapState(state) {
  return state;
}

const PhotoPage = (props) => {
  console.log(props);
  const [photoList, setPhotoList] = useState([...Photos]);
  const [show, setShow] = useState(-1);
  function handleClick(photo) {
    console.log(photo);
    setShow(photo);
    setIsopen(photo.id);
  }
  const [isopen, setIsopen] = useState(-1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [score, setScore] = useState("");
  function toggleModal() {
    if (isopen != -1) {
      setIsopen(-1);
    }
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center ">
        <CardGroup className="col-12 col-md-8 m-1 ">
          {photoList.map((p) => {
            return (
              <React.Fragment key={p.id}>
                <Modal isOpen={isopen == p.id} toggle={toggleModal}>
                  <ModalHeader toggle={toggleModal}>Description</ModalHeader>
                  <ModalBody>
                    <div>{show.description}</div>
                    <br />
                    <div>
                      <h4>Number of like✨</h4>
                    </div>
                    <div>{show.like}</div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>
                      Ok
                    </Button>
                    <Button onClick={toggleModal}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                <Card
                  key={p.id}
                  onClick={() => handleClick(p)}
                  style={{ cursor: "pointer" }}
                >
                  <CardImg alt={p.name} src={p.image} width="100%" />
                </Card>
              </React.Fragment>
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
              <FormGroup className="col-1">
                <Label for="score">score</Label>
                <Input
                  id="score"
                  name="score"
                  type="select"
                  invalid={score == ""}
                  valid={score != ""}
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Form>
            <div>
              <Button
                type="submit"
                value="submit"
                color="info"
                outline
                onClick={() => {
                  alert(JSON.stringify({ username, email, comment, score }));
                }}
              >
                Submit
              </Button>
              <Button
                color="success"
                outline
                onClick={() => {
                  props.increment();
                  let copyPhotoList = [...photoList];
                  let updateIndex = copyPhotoList.findIndex(
                    (ph) => ph.id == show.id
                  );
                  console.log(copyPhotoList);
                  let count = copyPhotoList.map((item, i) => {
                    if (i === updateIndex)
                      return { ...item, like: item.like + 1 };
                    else return { ...item };
                  });
                  setShow(count[updateIndex]);
                  console.log(count[updateIndex]);
                  setPhotoList([...count]);
                }}
              >
                <span className="fa fa-thumbs-up fa-lg"></span>
                {show.like}
              </Button>
            </div>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default connect(mapState, { increment })(PhotoPage);
