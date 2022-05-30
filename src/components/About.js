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

const About = () => {
  return (
    <div className="d-flex justify-content-center">
      <CardGroup className="col-12 col-md-10 m-1 ">
        <Card>
          <CardImg alt="fxh" src="pic/me.jpg" width="100%" />
          <CardBody>
            <CardTitle tag="h5">Me</CardTitle>
            <CardSubtitle clasName="mb-2 text-muted" tag="h6">
              Phurichaya Khemvaraporn 64130500227
            </CardSubtitle>
            <CardText>
              today do the best tomorrow will happy✨
              <br />
              Fah <br />
              Phurichaya Khemvaraporn
              <br />
              <br />
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="fxh" src="pic/me.jpg" width="100%" />
          <CardBody>
            <CardTitle tag="h5">Education</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Phurichaya Khemvaraporn
            </CardSubtitle>
            <CardText>
              KMUTT cs sit
              <br />
              Sukhondhreeawidh school (M6)
              <br />
              Suteetorn School
              <br />
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="fxh" src="pic/me.jpg" width="100%" />
          <CardBody>
            <CardTitle tag="h5">Favorite subjects</CardTitle>

            <CardText>
              ✎Web App
              <br />
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                because I want to practice my coding skill to develop my web
                site.
              </CardSubtitle>
              <br />
              ✎Data structure
              <br />
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                because I would like to practice my java skill.
              </CardSubtitle>
              <br />
              ✎physical education
              <br />
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                because in free time I wold like to exercise such as play table
                tennis.
              </CardSubtitle>
              <br />
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="fxh" src="pic/me.jpg" width="100%" />
          <CardBody>
            <CardTitle tag="h5">Favorite movies</CardTitle>

            <CardText>
              🎞 twenty-five twenty-one
              <br />
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Korea serie
              </CardSubtitle>
              <br />
              🎞 spy x family
              <br />
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Anime
              </CardSubtitle>
              <br />
              🎞 vincenzo
              <br />
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Korea serie
              </CardSubtitle>
              <br />
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="New" src="pic/new.jpg" width="100%" />
          <CardBody>
            <CardTitle tag="h5">Breaking New</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              by Anoushka Mathew | Published on Mar 24, 2022 11:17 AM IST
            </CardSubtitle>
            <CardText>
              The schedule poster for EXO's Suho's new solo album 'Grey Suit',
              which will make a comeback on April 4, has been released. It
              contains a schedule for opening various contents, such as a mood
              sampler, teaser image, and a music video teaser for the title
              song, increasing expectations for a comeback.
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default About;
