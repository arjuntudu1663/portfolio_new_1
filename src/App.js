import logo from './logo.svg';
import './App.css';
import {AppBar, Chip, setRef} from '@mui/material'
import Projects from './Projects';
import { useState } from 'react';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';


function App() {
  
  let element ;
 
  const [flag,setFlag] = useState("portfolio")

  const settingFlag = (val) => {
     
    setFlag(val)

  }

  switch(flag){
     
    case "portfolio":
       
      element =  <Portfolio settingFlag = {settingFlag}/>
       break;
    case "projects":

     element =   <Projects />

       break;
    case "aboutme":

     element =   <AboutMe />

       break;
     

  }

  return (
    <div style={{width:"100%",display:"grid",placeItems:"center"}}>

      
       <AppBar style={{padding:"50px",display:"grid",placeItems:"center",backgroundColor:"white",color:"black"}}>

          <div style={{width:"80%",display:"flex"}}>
               <div style={{width:"30%",display:"flex",justifyContent:"space-between"}}>

               <p style={{fontSize:"30px",fontWeight:"100"}} onClick={e=>setFlag("portfolio")} className='descFont'>Portfolio</p>
             <p style={{fontSize:"30px"}}  onClick={e=>setFlag("projects")} className='descFont'>Projects</p>
             <p style={{fontSize:"30px"}}  onClick={e=>setFlag("aboutme")}  className='descFont'>About Me</p>

               </div>
          </div>
          
      </AppBar>

      {
        element
      }
       

       <div style={{height:"100vh"}}>

       </div>
   
    </div>
  );
}

export default App;
