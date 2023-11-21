import React, { useState } from "react";
import Quiz from "./Quiz";
import { Link } from "react-router-dom";

const ListQuestion = ({ data, setCountRepCorrect, countRepCorrect }) => {
  // this state for save id of answer user
  const [forSaveID, setforSaveID] = useState([]);
  //end
  return (
    <>
    <h1 className='tit'>Quiz App Introduction to Web Development</h1>
      <div className="listQuiz">
        {data.map((item) => (
          <Quiz
            key={item.id}
            forSaveID={forSaveID}
            setforSaveID={setforSaveID}
            item={item}
            setCountRepCorrect={setCountRepCorrect}
            countRepCorrect={countRepCorrect}
          />
        ))}
      </div>
      <Link to='/result' ><button className="BtnSubmit" >Submit</button></Link>
    </>
  );
};

export default ListQuestion;
