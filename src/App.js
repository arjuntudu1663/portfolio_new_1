import logo from './logo.svg';
import './App.css';
import {AppBar, Chip, setRef,Button} from '@mui/material'
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

           
             <Button  className='descFont' onClick={e=>setFlag("portfolio")} style={{fontSize:"20px",fontWeight:"",color:"black"}}>Portfolio</Button>
             <Button  className='descFont' onClick={e=>setFlag("projects")} style={{fontSize:"20px",fontWeight:"",color:"black"}}>Projects</Button>
             <Button  className='descFont' onClick={e=>setFlag("aboutme")} style={{fontSize:"20px",fontWeight:"",color:"black"}}>About Me</Button>
           

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
