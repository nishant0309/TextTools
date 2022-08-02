
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='	#042743'
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
    }

  }
  return (
    <>
    
   <Navbar title="TextTools" mode = {mode} toggleMode={toggleMode} aboutText = "About"/>
   <Alert alert ={alert}/>
   <div className = "container my-3"><TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
   {/*<Router>
    <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
          </Route>
        </Switch>
        </Router> */}
    </div>
    
    
   
    </>
  );
}

export default App;
