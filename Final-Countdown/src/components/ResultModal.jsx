//displayed only when game is over
import {forwardRef, useImperativeHandle,useRef} from "react"
import {createPortal} from "react-dom"
const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
  const dialogRef=useRef() // created Seprate ref for dailog as ref is being passed to useImperativehandle

  const userLost = remainingTime <=0
  const formattedRemainingTime=(remainingTime/1000).toFixed(2)
  const score =Math.round((1- remainingTime/(targetTime*1000))*100)
  useImperativeHandle(ref,()=>{
    return {
      open(){
        dialogRef.current.showModal()
      }
    }
  })

  return createPortal(//by default dialog is invisble so use open attribute but to use backdrop avoid open attri use ref to manage it 
    <dialog ref={dialogRef} className="result-modal" onClose={onReset} >
      {userLost && <h2>You Lost </h2>}
      {!userLost && <h2> Your Score : {score} </h2>}
      <p>Your Target time was <strong>{targetTime}</strong> seconds.</p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,document.getElementById("modal"))
}
)
export default ResultModal