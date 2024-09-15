import { useState } from "react"
import "./App.css"
import Counter from "./components/Counter"
import Name from "./components/Name"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Homework from "./components/Homework"
import Fruits from "./components/Fruits"

function App() {
  // const [show, setShow] = useState(true)

  // const toggleShow = () => setShow(prevShow => !prevShow)

  return (
    <>
      <Homework name="Kaspar" />
      {/* <Show
        show={show}
        toggleShowShow={toggleShow}
      />
      <PropDrilling /> */}
      <Counter />
      {/* <Name title="Kaspar" />
      <Name /> */}
      <Fruits />
    </>
  )
}

export default App
