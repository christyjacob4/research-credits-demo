import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import SpacedSpan from "../components/SpacedSpan";
import { textContent } from "./Links";
import { Col, Row } from "react-bootstrap";
import "../styles/examples.css";
import { meta } from "./Links";

export default function({ image, currentIndex, currentFileIndex }) {
  return (
    <div className="fluid">
      <div className="fluid__image-container">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Preview Image",
              isFluidWidth: true,
              src: image
            },
            largeImage: {
              src: image,
              width: 2479,
              height: 3542
            },
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%"
            }
          }}
        />
      </div>
      <div className="fluid__instructions">
        <Row>
          <h3>{textContent[currentIndex].heading}</h3>
          <p>{textContent[currentIndex].body}</p>
        </Row>
        {currentFileIndex && (currentIndex==5) && (
          <div>
          <Row>
            <Col sm={6}>
              <h3> Ground Truth </h3>
              {meta[currentFileIndex].gt}
            </Col>
            <Col sm={6}>
              <h3> Prediction </h3>
              {meta[currentFileIndex].prediction}
            </Col>
          </Row>
          <Row className="scores">
            <Col sm={4}> 
              <h4> Edit Distance</h4>
              <p> {meta[currentFileIndex].edit_distance} </p>
            </Col>
            <Col sm={4}> 
              <h4> WER</h4>
              <p> {meta[currentFileIndex].wer} </p>
            </Col>
            <Col sm={4}> 
              <h4> BLEU Score</h4>
              <p> {meta[currentFileIndex].bleu} </p>
            </Col>
            </Row>
            </div>
        )}
      </div>
    </div>
  );
}
