import React, { useMemo, useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { storage, uploadBytes, ref} from '../firebase';
import { nanoid } from "nanoid";
import Thumbnail from "./thumbnail";


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
  backgroundColor: "rgb(233 230 230)",
  color: "rgba(2,2,2,1)",
  outline: "none",
  // height: "300px",
  transition: "border .24s ease-in-out",
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
  marginTop: 16,
  maxWidth:"100px"
};



const StyledDropzone = ({putImageUrl}) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {

    acceptedFiles.forEach((file) => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
      })
      ));
      //console.log('Uploaded file', file);
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
    open
  } = useDropzone({ 
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    multiple: false,
    onDrop: onDrop });


  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );


  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      <aside style={thumbsContainer}>
        <Thumbnail files={files}/>
      </aside>
      </div>
    </div>
  );
}

export default StyledDropzone;