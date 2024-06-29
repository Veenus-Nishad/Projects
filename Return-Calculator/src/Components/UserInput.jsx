

export default function UserInput({ onChangeInput, userInput }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label >Initial Investment</label>
          <input
            type="number" required value={userInput.initialInvestment}
            onChange={(eventObject) => { onChangeInput("initialInvestment", eventObject.target.value) }}>
          </input>
        </p>
        <p>
          <label >Annual Investment</label>
          <input type="number" equired value={userInput.annualInvestment}
            onChange={(eventObject) => { onChangeInput("annualInvestment", eventObject.target.value) }}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label >Expected Return</label>
          <input type="number" equired value={userInput.expectedReturn}
            onChange={(eventObject) => { onChangeInput("expectedReturn", eventObject.target.value) }}></input>
        </p>
        <p>
          <label >Duration</label>
          <input type="number" equired value={userInput.duration}
            onChange={(eventObject) => { onChangeInput("duration", eventObject.target.value) }}></input>
        </p>
      </div>
    </section>
  )
}