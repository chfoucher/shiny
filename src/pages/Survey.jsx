import { Link, useParams } from 'react-router-dom';
import { Loader } from '../utils/Atoms';
import { useFetch } from '../utils/hooks';

function Survey() {
  const { questionNumber } = useParams();
  const questionIndex = Number.parseInt(questionNumber);
  const { isLoading, data, error } = useFetch('http://localhost:8000/survey');
  const { surveyData } = data;
  if (error) {
    return <p>Une erreur est survenue lors du charhgement des questions.</p>;
  }
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionIndex}</h2>
      {isLoading ? <Loader /> : <p>{surveyData[questionIndex]}</p>}
      <nav>
        {questionIndex > 1 && (
          <Link to={`/survey/${questionIndex - 1}`}>Précédente</Link>
        )}
        {surveyData && surveyData[questionIndex + 1] ? (
          <Link to={`/survey/${questionIndex + 1}`}>Suivante</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </nav>
    </div>
  );
}

export default Survey;
