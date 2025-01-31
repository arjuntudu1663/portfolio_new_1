import React from 'react'
import {AppBar, Chip} from '@mui/material'
import { CiLocationArrow1 } from "react-icons/ci";
import {motion} from 'framer-motion'

const Portfolio = ({settingFlag}) => {
  return (
    <div style={{width:"100%",display:"grid",placeItems:"center"}}>

      
   

      <div style={{width:"80%",display:"grid",placeItems:"center",height:"30vh",marginTop:"10%"}}>
             
             <motion.div
             
             initial = {{scale:0.5}}
             animate = {{scale:1}}
             
             >
             <h1 style={{fontSize:"250px"}} className='descFont'>I'm Arjun Tudu</h1>
             </motion.div>

            <div style={{width:"100%",display:"grid",placeItems:"center"}}>
             
             <motion.div  animate = {{scale:1.2}}  >
             <p className='descFont' style={{fontSize:"50px",opacity:"0.6",marginLeft:"",fontWeight:"100"}}> I'm Here to Help Your Organization grow with the help of my abilities </p>
             
             </motion.div>
             
            <p></p>
           
           <motion.div 
           whileHover={{
            scale:1.2
           }}

          

           initial = {{y:-100}}
           animate = {{y:0}}
           
           >
           <Chip  icon={<CiLocationArrow1 size={30}/>} variant='outlined' color='success' style={{width:"300px",height:"80px",fontSize:"20px",fontWeight:"bold",padding:"20px",marginTop:"50px"}} size="large" onClick={e=>settingFlag("projects")} label = "My Websites"/>
           </motion.div>
           
            </div>
      </div>
       
   
    </div>
  )
}

export default Portfolio