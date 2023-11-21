import React, { useState } from "react";

const Quiz = ({
  item,
  setCountRepCorrect,
  countRepCorrect,
  forSaveID,
  setforSaveID,
}) => {
  // function for change color answer clicked
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };
  // end function for change color answer clicked

  // function for count number of correct answer

  const handleCheck = (repUser, item) => {
    let indexItem;
    if (
      !forSaveID.includes(item.id) &&
      repUser.toLowerCase() === item.correct.toLowerCase()
    ) {
      setCountRepCorrect(countRepCorrect + 1);
      setforSaveID([...forSaveID, item.id]);
    }
    if (
      forSaveID.includes(item.id) &&
      repUser.toLowerCase() !== item.correct.toLowerCase()
    ) {
      setCountRepCorrect(countRepCorrect - 1);
      indexItem = forSaveID.findIndex((el) => el === item.id);
      forSaveID.splice([indexItem], 1);
    }
  };
  // end

  return (
    <>
      <div className="Quiz">
        <h3 className="Ques"> {item.question} </h3>
        {item.response.map((rep, i) => (
          <div key={i}>
            <ul>
              <li
                key={i}
                className={`${selectedAnswer === i ? "reponseClicked" : ""}`}
                onClick={() => {
                  return (handleClick(i), handleCheck(rep, item));
                }}
              >
                {" "}
                {rep}{" "}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Quiz;
