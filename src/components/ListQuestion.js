import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import { Link, useNavigate } from "react-router-dom";

const ListQuestion = ({ data, setCountRepCorrect, countRepCorrect }) => {
  // this state for save id of answer user
  const [forSaveID, setforSaveID] = useState([]);
  //end
  // timer
  const [timeLeft, setTimeLeft] = useState(1.5 * 60 * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [timeLeft]);

  //end Timer
  //Push User to Result Comp
  const navigate = useNavigate();
  if (timeLeft === 0) {
    navigate("/result")
  }
  //end

  return (
    <>
      <p className="timer">
        Time left:{" "}
        <span
          className={
            timeLeft < 300 && timeLeft > 120
              ? "lessThenTen"
              : timeLeft <= 120
              ? "lessThenFive"
              : ""
          }
        >
          {parseInt(timeLeft / 60)}:{timeLeft % 60}
        </span>
      </p>
      <h1 className="tit">Quiz App Cyber Security</h1>
      <div className="listQuiz">
        {data.map((item, i) => (
          <Quiz
          num = {i}
            key={item.id}
            forSaveID={forSaveID}
            setforSaveID={setforSaveID}
            item={item}
            setCountRepCorrect={setCountRepCorrect}
            countRepCorrect={countRepCorrect}
          />
        ))}
      </div>
      <Link to="/result">
        <button className="BtnSubmit">Submit</button>
      </Link>
    </>
  );
};

export default ListQuestion;
