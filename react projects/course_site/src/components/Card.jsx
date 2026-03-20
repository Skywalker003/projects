import React from "react";

export default function Card(props){

  const [isEnrolled, setIsEnrolled] = React.useState(false);
  //const [hide, setHide] = React.useState(true);

  function handleEnroll(){
      // just updating the local button state for now
      setIsEnrolled(true);
  }
  /*function hidec(){
      setHide(false);
  }*/

  if(props.shown==true){
      return(
          // showing the full course card when this course is available
          /*hide && */ <div className="card"> {/* can use props.shown&& if there is no else part */}
              <img className="inner-img" src={props.image} alt="img" />
              <div className="inner-text">
                  <h3>{props.title}</h3>
                  <p>{props.description}</p>
                  <p>{props.difficulty}</p>
                  <p>{props.level}</p>
                  <button className="enroll-btn" onClick={handleEnroll}>{ isEnrolled ? "Enrolled" : "Enroll Now"}</button>
                  {!isEnrolled && <button className="hide-btn" onClick={() => props.hide(props.id)/* hidec */}>Not Interested</button>}
              </div> 
          </div>
      )
  }
  else{
      return(
          // fallback card when the course is not ready to show yet
          <div className="card">
              <h1 className="update">This course is coming soon!</h1>
          </div>
      )
  }
}

/*
export default function Card(props) {
  return (
    <div className="card">
      {props.shown ? (
        <>
          <img className="inner-img" src={props.image} alt="img" />
          <div className="inner-text">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.difficulty}</p>
            <p>{props.level}</p>
          </div>
        </>
      ) : (
        <h1 className="update">This course is coming soon!</h1>
      )}
    </div>
  );
}*/
