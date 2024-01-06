import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import SignUp from "./screen/SignUp"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App