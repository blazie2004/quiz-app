import { useContext } from "react";
import ScoreContext from "../../Context/ScoreContext";

function AnswerCard({answername,iscorrect}){

    const {score,setscore}=useContext(ScoreContext);

    return (
        <div  onClick={()=>{
           console.log("clicked");  
           (iscorrect)?setscore(score+1):setscore(score-1);
           
        }}className="Answer">
            {answername};
            

        </div>
    )
}

export default AnswerCard;