import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginSignup/LoginPage';
import SignupPage from './components/LoginSignup/SignupPage';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from './components/HomePage';
import BottomNavBar from './components/BottomNavBar';
import BottomPage from './components/BottomPage';

const SignupWrapper = () => {
  const navigate = useNavigate();
  return <SignupPage navigate={navigate} />;
}

const LoginWrapper = () => {
  const navigate = useNavigate();
  return <LoginPage navigate={navigate} />;
}
const BottomWrapper = () => {
  const navigate = useNavigate();
  return <BottomPage navigate={navigate} />;
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginWrapper />} />
          <Route path='/signup' element={<SignupWrapper />} />
          <Route path='/bottom/*' element={<BottomWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
