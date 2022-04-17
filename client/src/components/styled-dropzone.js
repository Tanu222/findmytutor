import React, { useMemo, useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { storage, uploadBytes, ref, getDownloadURL } from '../firebase';
import { nanoid } from "nanoid";


const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  height: "100px",
  transition: "border .24s ease-in-out"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 85,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "75px",
  height: "75px"
};

const StyledDropzone = ({putImageUrl}) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {

    acceptedFiles.forEach((file) => {

      console.log('Uploaded file', file);
      let image = nanoid();
      let storageRef = ref(storage, `images/img-${image}`);
      //console.log('Storage Ref', storageRef);
      putImageUrl(`img-${image}`);

      uploadBytes(storageRef, file)
      .then((result) => {
        console.log('Uploaded a blob or file!');
       // console.log(result);
      });

    })

  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({ onDrop });

  const selectedFiles = files?.map(file => {
    <div>
      <img src={file.preview} style={{ width: "200px" }} alt="file" />
    </div>
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));


  const filepath = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
      </div>
      {selectedFiles}
    </div>
  );
}

export default StyledDropzone;