import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";

import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore></Explore>}></Route>
          <Route path='/offer' element={<Offer/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
          <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        </Routes>

      <NavBar></NavBar>
      </Router>

      {/* NAVBAR */}
    </>
  );
}

export default App;
