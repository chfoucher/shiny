import { Link, useParams } from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams();
    const questionIndex = Number.parseInt(questionNumber);
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionIndex}</h2>
            <nav>
            { (questionIndex > 1) && <Link to={`/survey/${questionIndex - 1}`}>Précédente</Link> } 
            { (questionIndex < 10) && <Link to={`/survey/${questionIndex + 1}`}>Suivante</Link> } 
            { (questionIndex === 10) && <Link to="/results">Résultats</Link> } 
        </nav>
        </div>
    )
}

export default Survey;
