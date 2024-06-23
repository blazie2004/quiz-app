import './QuestionCard.css'
import AnswerCard from '../AnswerCard/AnswerCard';
import { useContext } from 'react';
import ScoreContext from '../../Context/ScoreContext';
function QuestionCard({queslist,quesno}){

  const {score,setscore}=useContext(ScoreContext);

    console.log(queslist);

    const optionslist=queslist[quesno].options;
   
    const answerlist=optionslist.map((eachanswer)=>{
        return eachanswer.answer;
    })

    return (
        <div className="Question-Card">
            <div className="Question">{queslist[quesno].question}</div>
            <div className="Options">{optionslist.map((eachoption) => {
    return (
      <AnswerCard 
        key={eachoption.answer} // Adding a key is important for list items in React
        answername={eachoption.answer}
        iscorrect={eachoption.iscorrect}
      />
    );
  })}</div>


        </div>
        
    )
}
export default QuestionCard;