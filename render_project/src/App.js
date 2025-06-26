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
import ParentTwo from './components/Optimization/ParentTwo';
import ParentThree from './components/IncorrectOptimizations/ParentThree';
import ParentFive from './components/IncorrectOptimizations/ParentFive';
import ContextParent from './components/ContextParent';
import { ChildA } from './components/ContextChild';


function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA/>
      </ContextParent>
      {/* <ParentFive /> */}
      {/* <ParentThree /> */}
      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}
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
