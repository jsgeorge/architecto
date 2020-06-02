import React, { useContext, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faImage } from "@fortawesome/free-solid-svg-icons";

const FileUpload = ({ images, setImages, reset }) => {
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [uploading, setUploading] = useState(false);

  const imagesHandler = (uplfiles) => {
    const imageData = {
      value: {},
      validation: { required: false },
      valid: false,
      validationMessage: "",
    };

    imageData.value = uplfiles;
    imageData.valid = true;
    setImages(uplfiles);
  };

  const onDrop = (files) => {
    setUploading(true);
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    console.log(files[0], formData, config);
    axios
      .post("/projects/uploadimage", formData, config)
      .then((response) => {
        setUploading(false);
        setUploadedFiles(response.data);
        imagesHandler(response.data);
      })
      .catch((err) => console.log(err));
  };

  const onRemove = (id) => {};

  const showUploadedImages = () => (
    <div
      className="dropzone_box"
      key={uploadedFiles.public_id}
      onClick={() => onRemove(uploadedFiles.public_id)}
    >
      <div
        className="wrap"
        style={{ background: `url(${uploadedFiles.url}) no-repeat` }}
      />
    </div>
  );

  //));

  return (
    <div>
      <section>
        <div className="dropzone clear">
          <Dropzone
            onDrop={(e) => onDrop(e)}
            multiple={false}
            className="dropzone_box"
          >
            <div
              className="wrap"
              style={{
                background: "#ccc",
                padding: "5px 10px",
                height: "30px",
                width: "120px",
              }}
            >
              + Upload Image
            </div>
          </Dropzone>

          {showUploadedImages()}

          {uploading ? (
            <div
              className="dropzone_box"
              style={{ textAlign: "center", paddingTop: "60px" }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      .
    </div>
  );
};

export default FileUpload;
