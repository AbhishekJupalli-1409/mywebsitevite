
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Combined from "./Combined";
import Loginpage from "./components/Loginpage";
import Studentpage from "./components/profile/Studentpage";

function App() {
  
  return (

    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/home" element={<Combined />} />
          <Route path="/profile" element={<Studentpage/>}></Route>
        </Routes>
      </Router>
     

   
      </>


  )
}

export default App
