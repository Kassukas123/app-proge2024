import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  //const modifyCounter = () => setCounter(prevCounter => prevCounter + 1)
  const modifyCounter = value => setCounter(prevCounter => prevCounter + value)

  return (
    <>
      <h1> {counter} </h1>

      {[+1, +5, +50, -1, -5, -50].map(element => (
        <button
          key={element}
          onClick={() => modifyCounter(element)}
        >
          nupp {element}
        </button>
        // <button onClick={modifyCounter}>sync {element}</button>
      ))}

      {/* <button onClick={() => setTimeout(() => modifyCounter(), 2000)}>
        async+1
      </button> */}
    </>
  )
  //pane v2ikse t2hega, muidu viitad componendile, mitte muutajale
}

export default Counter
