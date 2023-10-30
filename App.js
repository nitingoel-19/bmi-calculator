
import './App.css';
import './index.css';
import React,{useState} from 'react';

function App() {

  // States for the application
  const[weight,setWeight] = useState('');
  const[height,setHeight] = useState('');
  const[bmi,setBmi] = useState('');
  const[message,setMessage] = useState('');

  //logic
  let calcBmi = (e) => {
    e.preventDefault();
    if(weight <= 0){
      alert("Please enter valid Weight!");
    }
    else if(height <= 0){
      alert("Please enter valid Height!")
    }
    else{
      let meterV = (height*0.3048)*(height*0.3048);
      let denom = meterV.toFixed(1);
      let calBMI = weight/denom;
      setBmi(calBMI.toFixed(1));
      if(calBMI < 25){
        setMessage("You are under-weight. Please do something!");
      }
      else if(calBMI >= 25 && calBMI <= 30){
        setMessage("You are having right weight :)");
      }
      else{
        setMessage("You are over-weight. Please do something!");
      }
    }
  }

  //reload
  let reload = () =>{
    window.location.reload();
  }
  
  return (
    <div className="App">
      
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(kgs): </label>
            <input type='text' placeholder='Enter weight in kgs' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
          </div>
          <div>
            <label>Height(foot): </label>
            <input type='text' placeholder='Enter height in foot' value={height} onChange={(event) => setHeight(event.target.value)}></input>
          </div>
          <div>
            <button className='btn' type="submit">Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>
        <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
