import './App.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

function App() {
  const main = data.map(item => {
    return (
      <Main
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      {main}
    </div>
  )
}

export default App
