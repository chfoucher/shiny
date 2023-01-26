import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../utils/Atoms';

function Survey() {
  const { questionNumber } = useParams();
  const questionIndex = Number.parseInt(questionNumber);
  const [questions, setQuestions] = useState({});
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/survey').then((response) =>
      response
        .json()
        .then(({ surveyData }) => {
          setQuestions(surveyData);
          setDataLoading(false);
        })
        .catch((error) => console.error(error))
    );
  }, []);
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionIndex}</h2>
      {isDataLoading ? <Loader /> : <p>{questions[questionIndex]}</p>}
      <nav>
        {questionIndex > 1 && (
          <Link to={`/survey/${questionIndex - 1}`}>Précédente</Link>
        )}
        {questions[questionIndex + 1] ? (
          <Link to={`/survey/${questionIndex + 1}`}>Suivante</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </nav>
    </div>
  );
}

export default Survey;
