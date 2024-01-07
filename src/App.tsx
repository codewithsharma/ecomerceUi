import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import SignUp from "./screen/SignUp"
import SignIn from "./screen/SignIn"
import HomePage from "./screen/HomePage"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App