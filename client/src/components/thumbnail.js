import imageTemp from '../assets/images/logo.png'

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
    height: "75px",
    borderRadius:"10px"
  };

const Thumbnail = ({files}) => {
  let showThumbnail = false;
  if(files.length!==0){
    showThumbnail = true;
  }
  return(
    <div>
      {
        showThumbnail && 
    
        <img src={files[0].preview} style={img} />
      }
    </div>
  )
  {
    
    // files.map(file => {
    //     console.log('inside thumbnail');

    //     return(
    //     <div style={thumb} key={file.name}>
    //       <div style={thumbInner}>
    //         <img src={imageTemp} style={img} />
    //       </div>
    //     </div>
    //   )
    // });
  }
}

export default Thumbnail;