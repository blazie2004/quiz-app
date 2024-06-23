import { useState } from "react"
import QuestionCard from "./Components/QuestionCard/QuestionCard";
import ScoreContext from "./Context/ScoreContext";


function App() {
    

const [count,setcount]=useState(0);

const [score,setscore]=useState(0);

const list=[
  {
    question:"what is time complexity of binary search?",
    options:[
      {answer:"o(n)",iscorrect:false},
      {answer:"o(logn)",iscorrect:true},
      {answer:"o(n^2)",iscorrect:false},


    ]
  },
  {
    question:"what is time complexity of linear search?",
    options:[
      {answer:"o(n)",iscorrect:true},
      {answer:"o(nlogn)",iscorrect:false},
      {answer:"o(n^2)",iscorrect:false},


    ]

  },
  {
    question:"what is time complexity of merge sort?",
    options:[
      {answer:"o(n)",iscorrect:false},
      {answer:"o(nlogn)",iscorrect:true},
      {answer:"o(n^2)",iscorrect:false},


    ]

  }
]
  return (
     <div>
         <ScoreContext.Provider value={{score,setscore}}>

          Rules: +1 for Positive answer ,-1 for negative answers
          <br />
          <br />

         <QuestionCard  queslist={list} quesno={count}/>
          
          <button onClick={()=>{
            if(count+1<list.length){
            setcount(count+1)};
          }}>next</button>
          <button onClick={()=>{
            if(count-1>=0){
            setcount(count-1)};
          }}>prev</button>

          <br />
          Score:{score}
          </ScoreContext.Provider>
         
     </div>
  )
}

export default App
