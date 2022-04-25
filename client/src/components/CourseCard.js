import React from 'react';
import '../assets/styles/course-card.css';

const CourseCard = ({title,ctext,id,img}) => {
    return (
        // <div className="card CCard" /*style={{width:'30%'}}*/>
        //     <div className="card-body">
        //         <h3 className="card-title" style={{"whiteSpace":"pre-wrap"}}>Prepare for</h3>
        //         <h3><b>{props.title}</b></h3>
        //         <p className="card-text">{props.ctext}</p>
        //         {/* <a href="" className="btn btn-primary">Go to course</a> */}
        //     </div>
        // </div>
        <div className="col-lg-4">
          <a className="card1" href="#">
            <h3 className="cardhead">{title}</h3>
            {/* <img src ={img} alt='decoration'/> */}
            <p className="small">
                {ctext}
            </p>
            <div className="go-corner" href="#">
              <div className="go-arrow">{id}</div>
            </div>
          </a>
        </div>
    )
} 

export default CourseCard;