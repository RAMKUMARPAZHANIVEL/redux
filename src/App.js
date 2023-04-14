import './App.css';
import Component1 from './components/component1';
import { Dispatch } from 'redux';
import { useState,useEffect } from 'react';
import { addItem } from './store/actions/action';
import { useDispatch } from 'react-redux';
 
function App({getInput}) {
  const[inputData,setInputData] = useState(null);
  const Dispatch = useDispatch();
  const onChangeHandler = (e) => {
    //  console.log("action called")
     setInputData(e.target.value);
    //  console.log(inputData);
    //  getInput(inputData);
    
    }
    useEffect(()=> {
      Dispatch(addItem(inputData));
    },[inputData])
    
  return (
    <div className="App">
      <h2>component 0</h2>
      <input type="text" onChange={e => onChangeHandler(e)}/>
      <Component1 />
      
     </div>
  );
}

export default App;
