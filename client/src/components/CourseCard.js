import React from 'react';

const CourseCard = (props) => {
    return (
        <div className="card CCard" /*style={{width:'30%'}}*/>
            <div className="card-body">
                <h3 className="card-title" style={{"whiteSpace":"pre-wrap"}}>Prepare for</h3>
                <h3><b>{props.title}</b></h3>
                <p className="card-text">{props.ctext}</p>
                {/* <a href="" className="btn btn-primary">Go to course</a> */}
            </div>
        </div>
    )
}

export default CourseCard;