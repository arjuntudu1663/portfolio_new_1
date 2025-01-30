import { Paper } from '@mui/material'
import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { MdPerson } from "react-icons/md";
import { PiCastleTurretThin } from "react-icons/pi";
import { FaRegClipboard } from "react-icons/fa";
import { GiRoad } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'

const AboutMe = () => {
  return (
    <div style={{width:"80%",height:"30vh",marginTop:"10%",marginBottom:"100px"}}>
         
        <Row>
          <Col lg = {6}>
          <Paper elevation={5} style={{padding:"55px",height:"400px",display:"flex",alignItems:"center"}}>
          
              <motion.div
                initial = {{x:-100}}
                animate = {{x:0}}
              >
              <div style={{display:"flex",alignItems:"center",justifyContent:"",gap:"50px"}}>

                    <MdPerson size={30}/> <h4 style={{fontWeight:"100"}}><span className=''>  Arjun Tudu</span></h4>

                    </div>


                    <p></p>


                    <div style={{display:"flex",alignItems:"center",justifyContent:"",gap:"50px"}}>

                    <PiCastleTurretThin size={30}/>  <h4 style={{fontWeight:"100"}}><span className=''>Kalyani Government Engineering College</span></h4>

                    </div>


                    <p></p>


                    <div style={{display:"flex",alignItems:"center",justifyContent:"",gap:"50px"}}>

                    <FaRegClipboard size={30}/>  <h4 style={{fontWeight:"100"}}><span className=''>CSE</span></h4>

                    </div>

                    <p></p>

                    <div style={{display:"flex",alignItems:"center",justifyContent:"",gap:"30px"}}>

                    <GiRoad size={30}/>

                    <div>
                    <h4 style={{fontWeight:"100"}}>1) <span className=''>Makhla,Uttarpara,Hooghly,Kolkata,712245</span></h4>
                    <p></p>
                    <h4 style={{fontWeight:"100"}}>2) <span className=''>080,Juradih,Domantor,Balarampur,Purulia,723143</span></h4>
                    </div>

                    </div>
              </motion.div>
       
       
        </Paper>
          </Col>

          <Col lg = {6}>
               
               <Paper elevation={5} style={{padding:"55px",height:"400px"}} >
                      
                      
                    <motion.div
                    
                    initial = {{y:-100}}
                    animate = {{y:0}}
                    
                    style={{marginTop:"35px"}}>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"",gap:"30px"}}>

                            <FaPhone size={30}/>  <h4 style={{fontWeight:"100"}}><span className=''>7044604289</span></h4>

                            </div>
                            <p></p>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"",gap:"30px"}}>

                            <CgMail size={30}/>  <h4 style={{fontWeight:"100"}}><span className=''>arjuntudu9163@gmail.com</span></h4>

                            </div>

                            <p></p>

                            <div style={{display:"flex",alignItems:"center",justifyContent:"",gap:"30px"}}>

                            <FaGithub size={30}/>  <h4 style={{fontWeight:"100"}}><span className=''>https://github.com/arjuntudu1663</span></h4>

                            </div>
                    </motion.div>
                                


               </Paper>

          </Col>
        </Row>

    </div>
  )
}

export default AboutMe