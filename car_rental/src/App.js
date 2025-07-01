import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginSignup/LoginPage';
import SignupPage from './components/LoginSignup/SignupPage';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

const SignupWrapper = () => {
  const navigate = useNavigate();
  return <SignupPage navigate={navigate} />;
}

const LoginWrapper = () => {
  const navigate = useNavigate();
  return <LoginPage navigate={navigate} />;
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginWrapper />} />
          <Route path='/signup' element={<SignupWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
