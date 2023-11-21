import { useState } from "react";
import "./App.css";
import ListQuestion from "./components/ListQuestion";
import { dataQuiz } from "./Data";
import HomePage from "./components/HomePage";
import Result from "./components/Result";
import { Route, Routes } from "react-router-dom";

function App() {
  // this state for count the correct answer
  const [countRepCorrect, setCountRepCorrect] = useState(0);
  //end
  // calculate score
  const score = (countRepCorrect* 100) / (dataQuiz.length)
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/quiz"
        element={
          <ListQuestion
            data={dataQuiz}
            setCountRepCorrect={setCountRepCorrect}
            countRepCorrect={countRepCorrect}
          />
        }
      />
      <Route path="/result" element={<Result score={score} />} />
    </Routes>
  );
}

export default App;
