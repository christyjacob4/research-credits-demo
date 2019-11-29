import React, { useState } from "react";
import { Col, Grid, Jumbotron, Row } from "react-bootstrap";

import Helmet from "react-helmet";

import Header from "../components/Header";
import ImageViewer from "../components/ImageViewer";
import ImageSelector from "../components/ImageSelector";
import Selector from "../components/Selector";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/app.css";

export default function(props) {
  const [currentImage, setCurrentImage] = useState(
    require("../images/placeholder.png")
  );
  const [photos, setPhotos] = useState([]);
  const [currentFile, setCurrentFile] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFileIndex, setCurrentFileIndex] = useState(null);

  return (
    <div>
      <Helmet title="Research Credits Demo" />
      <Header {...props} />
      <Jumbotron>
        <Grid>
          <Row>
            <Col sm={12}></Col>
          </Row>
        </Grid>
      </Jumbotron>
      <Grid fluid>
        <Row>
          <Col sm={1} className="sidebar">
            <ImageSelector
              photos={photos}
              setCurrentImage={setCurrentImage}
              setCurrentIndex={setCurrentIndex}
            />
          </Col>
          <Col sm={11}>
            <Row>
              <Col sm={12}>
                <ImageViewer image={currentImage} currentIndex={currentIndex} currentFileIndex={currentFileIndex} />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Selector
                  setPhotos={setPhotos}
                  setCurrentImage={setCurrentImage}
                  setCurrentFileIndex={setCurrentFileIndex}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
