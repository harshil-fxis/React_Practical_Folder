import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import ObjectUseState from './components/ObjectUseState';
import ArrayUseState from './components/ArrayUseState';
import Parent from './components/Parent Child/Parent';
import ParentOne from './components/Optimization/ParentOne';
import ChildOne from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';


function App() {
  return (
    <div className="App">
      <GrandParent />
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
