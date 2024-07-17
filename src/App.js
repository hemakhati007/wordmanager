import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import  Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alerts from './components/Alerts';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {


  const[modeType,setmode]=useState('light');
  const toggleMode=()=>{
    if(modeType==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#251d4c';//javascript
     showAlert("dark mode has been enabled","success");
     //for dynamic change of title
     document.title='TextUtils-home/Darkmode';//changing documnet title
//this part is nit user friendly they usually done to advertise and distracts the user
     setInterval(()=>
    {
      document.title='TextUtils is amazing';
    },1500);
    setInterval(() => {
      document.title='install TextUtils now';
    }, 1000);


    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
    }

  };
  const [alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({ message,type });
      setTimeout(()=>{
        setAlert(null)
      },3000);
    }

  return (
    <>

      {/* <Router> */}
      <Navbar title="TEXTUTILS" about="about us" mode={modeType} toggleMode={toggleMode} />
              {/* props can be objects ,links, they can be any number */}
              {/* as they can be anythin so we have proptype to ditermine what should be the prop */}

              <Alerts alert={alert} />

              <div className="container my-3">

           {/* <Routes> */}

                {/* router for about */}
              {/* <Route path="/about"> 
              {/* the path is to componets "/about" current directory about?? */}
                {/* <AboutUs />
              </Route> */} 
              {/* <Route  exact path="/about" element={<AboutUs />} /> */}
         
{/* using exact path is  a good practice as react do partial comparison

eg. /user--->component1
    /user/home--->component2

    so if we use path react will always show you componet1 as it is not checking the whole path

      */}
              {/* router for the home===textform   main component*/}
              {/* <Route path="/" element={<Textform heading="Enter your text to analyze" mode={modeType} showAlert={showAlert} />}> */}
                  
                  
              

              {/* </Route> */}

              {/* </Routes> */}
              {/* <AboutUs /> */}
              <Textform heading="Enter your text to analyze" mode={modeType} showAlert={showAlert} />
            </div>
      {/* </Router> */}
         
            
               
               
       
  
    </>
  );
}

export default App;
