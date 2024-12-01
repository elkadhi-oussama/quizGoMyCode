import React from "react";

const Result = ({ score }) => {
  return (
    <div className="Result">
      {score >= 75 ? (
        <>
          <h3>
            {" "}
            Your Score <span> {score}% </span>{" "}
          </h3>
          <h1 className="Congratulation" > Congratulation </h1>
          <h4> Welcome to groupe GoMyCode </h4>{" "}
        </>
      ) : (
        <>
          <h3>
            {" "}
            Your Score <span> {score}% </span>{" "}
          </h3>
          <h1 className="Failed" > Failed </h1>
          <h4> Sorry you need to learn Introduction to Web Development </h4>{" "}
        </>
      )}
    </div>
  );
};

export default Result;
