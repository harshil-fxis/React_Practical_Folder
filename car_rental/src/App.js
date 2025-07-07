import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginSignup/LoginPage';
import SignupPage from './components/LoginSignup/SignupPage';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from './components/HomePage';
import BottomNavBar from './components/BottomNavBar';
import BottomPage from './components/BottomPage';
import { useEffect } from 'react';
import ProfilePage from './components/ProfilePage';

const AppWrapper = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    const currentPath = window.location.pathname
    // const token = null 
    if(token && currentPath == "/" ){
      navigate("/home")
    }
    if(!token && currentPath == "/"){
      navigate("/")
    }
  },[navigate])
  return(
    <div className="App">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    </div>
  )
}
const App = () => {
  return(
    <BrowserRouter>
      <AppWrapper/>
    </BrowserRouter>
  )
}
export default App

// const SignupWrapper = () => {
//   const navigate = useNavigate();
//   return <SignupPage navigate={navigate} />;
// }

// const LoginWrapper = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token")
//   return <LoginPage navigate={navigate} />
//   // return token==null ? <LoginPage navigate={navigate} /> : <BottomPage navigate={navigate} />;
// }
// const BottomWrapper = () => {
//   const navigate = useNavigate();
//   return <BottomPage navigate={navigate} />;
// }


// function App() {
//   // const navigate = useNavigate()
//   const token = localStorage.getItem("token")
//   console.log(`token: ${token}`)
//   // useEffect(() => {
    
//   //   if(token) {
//   //     navigate('/bottom/home')
//   //   }
//   // },[token, navigate])

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<LoginWrapper />} />
//           <Route path='/signup' element={<SignupWrapper />} />
//           <Route path='/bottom/*' element={<BottomWrapper />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
