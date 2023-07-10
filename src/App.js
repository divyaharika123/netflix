// import Navbar from './components/navbar';
// import Signup from "./components/signup.js";
// import './App.css';
// import LoginForm from './components/navbar';
// import RegisterForm from './components/signup';
// import Homepage from "./components/homepage.js";



// function App() {
//   return (
//     <div className="App">
   
//       <LoginForm/>
//       <Homepage/>
//       <Signup/>
//      <RegisterForm/>
//     </div>
//   );
// }

// export default App;









import './App.css';
import LoginForm from "./components/navbar" ;
import RegisterForm from './components/signup';
import Homepage from './components/homepage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/routes';

function App() {
  return (
    
    // <div className="App">
    //   <FirstPage/>
    // </div>
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/navbar" element={<LoginForm />} />
            <Route path="/signup" element={<RegisterForm />} />
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/" element={<Homepage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;