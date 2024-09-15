import React from "react"
import "./Homework.css"

const Homework = props => {
  const hobbies = ["autoga sõitmine", "filmide vaatamine", "õues käimine"]

  return (
    <div>
      <div className="text">
        <h1>Tervist, {props.name}!</h1>

        <h2>Sinu huvid:</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      <div className="container">
        <h2>Kontaktivorm:</h2>
        <form>
          <input
            type="email"
            name="e-mail"
            placeholder="E-mail"
          />
          <br />
          <textarea
            name="message"
            placeholder="Tekstilahter"
          />
          <br />
          <button type="button">Saada andmed!</button>
        </form>
      </div>
    </div>
  )
}

export default Homework
