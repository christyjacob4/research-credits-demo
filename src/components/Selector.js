import React from "react";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import {suffixes, folders, filenames} from './Links'
import "../styles/selector.css";

export default function({setPhotos, setCurrentImage, setCurrentFileIndex }) {

  return (
    <form className="selector">
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Filename</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select"
          onClick={e => {
            let suffixes_ = suffixes
            let filenames_ = filenames
            const photos = folders.map((folder_name, index) => ({
              width: 2479,
              height: 3542,
              src: require(`../images/${folder_name}/${filenames_[e.target.value]}${suffixes_[index]}`)
            }));

            console.log(suffixes)
            console.log(photos)
            setPhotos(photos)
            setCurrentImage(photos[0].src)
            setCurrentFileIndex(e.target.value)
          }}
        >
          {filenames.map((filename,index) => (
            <option key={index} value={index}>{filename}</option>
          ))}
        </FormControl>
      </FormGroup>
    </form>
  );
}
