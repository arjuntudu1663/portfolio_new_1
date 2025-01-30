import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import { Button, Paper } from '@mui/material'
import {motion} from 'framer-motion'

const Projects = () => {
   


  return (
    <div style={{width:"80%",display:"grid",placeItems:"center",height:"30vh",marginTop:"10%",marginBottom:"100px"}}>
         
         <Row style={{marginTop:"100px",marginBottom:"100px"}}>
            <Col lg = {4}>

              
               
               <Card style={{padding:"15px"}}>
               <motion.div          
              initial = {{x:-100}}
              animate = {{x:0}}
              whileHover={{scale:1.2}}
              >

               <a href='https://exam-frontend-vert.vercel.app'>
               <Paper  elevation={5} style={{width:"100%",height:"100%",display:"grid",placeItems:"center",borderRadius:"15px"}}>
                 <img  src={require("./images/mcq.jpg")} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px"}}/>
              </Paper>
               </a>
              </motion.div>
              <Card.Body style={{height:"100px"}}>
                <p></p>
                  <p style={{fontWeight:"bold"}} className=''>This is a mcq exam taking platform . For organizers and students </p>
              </Card.Body>
              <Card.Footer>
              <Button href='https://exam-frontend-vert.vercel.app' variant='outlined' color='success'>visit</Button>
              </Card.Footer>
               </Card>

            
          

            </Col>

            <Col lg = {4}>


          <Card style={{padding:"15px"}}>
               <motion.div          
              initial = {{x:-100}}
              animate = {{x:0}}
              whileHover={{scale:1.2}}
              >
                
              <a href='https://chatapp-final-3-frontendooo.vercel.app'>
              <Paper elevation={5} style={{width:"100%",height:"100%",display:"grid",placeItems:"center",borderRadius:"15px"}}>
                 <img  src={require("./images/chat.jpg")} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px"}}/>
              </Paper>
              </a>
              </motion.div>
              <Card.Body style={{height:"100px"}}>
                <p></p>
                  <p style={{fontWeight:"bold"}} className=''>This is a chatting application </p>
              </Card.Body>
              <Card.Footer>
              <Button href='https://chatapp-final-3-frontendooo.vercel.app' variant='outlined' color='success'>visit</Button>
              </Card.Footer>
               </Card>

            </Col>


            <Col lg = {4}>

           <Card style={{padding:"15px"}}>
               <motion.div          
              initial = {{x:-100}}
              animate = {{x:0}}
              whileHover={{scale:1.2}}
              >
                
               <a href='https://mern-practice-1.vercel.app'>
               <Paper elevation={5} style={{width:"100%",height:"100%",display:"grid",placeItems:"center",borderRadius:"15px"}}>
                 <img  src={require("./images/okaare.jpg")} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px"}}/>
              </Paper>
               </a>
              </motion.div>
              <Card.Body style={{height:"100px"}}>
                <p></p>
                  <p style={{fontWeight:"bold"}} className=''>A Social Media Platform  </p>
              </Card.Body>
              <Card.Footer>
              <Button href='https://mern-practice-1.vercel.app' variant='outlined' color='success'>visit</Button>
              </Card.Footer>
               </Card>

            </Col>
            <Col lg = {4} style={{marginTop:"35px"}}>

            <Card style={{padding:"15px"}}>
               <motion.div          
              initial = {{x:-100}}
              animate = {{x:0}}
              whileHover={{scale:1.2}}
              >
                
              <a href='https://react2-frontend.vercel.app'>
              <Paper elevation={5} style={{width:"100%",height:"100%",display:"grid",placeItems:"center",borderRadius:"15px"}}>
                 <img  src={require("./images/raastein.png")} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px"}}/>
              </Paper>
              </a>
              </motion.div>
              <Card.Body style={{height:"100px"}}>
                <p></p>
                  <p style={{fontWeight:"bold"}} className=''> A Event Organizing Platform For Events </p>
              </Card.Body>
              <Card.Footer>
              <Button href='https://react2-frontend.vercel.app' variant='outlined' color='success'>visit</Button>
              </Card.Footer>
               </Card>

            </Col>


            <Col lg = {4} style={{marginTop:"35px"}}>

            <Card style={{padding:"15px"}}>
               <motion.div          
              initial = {{x:-100}}
              animate = {{x:0}}
              whileHover={{scale:1.2}}
              >
                
             <a href='https://text-editordawdaw.vercel.app'>
             <Paper elevation={5} style={{width:"100%",height:"100%",display:"grid",placeItems:"center",borderRadius:"15px"}}>
                 <img  src={require("./images/onpaper.png")} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px"}}/>
              </Paper>
             </a>
              </motion.div>
              <Card.Body style={{height:"100px"}}>
                <p></p>
                  <p style={{fontWeight:"bold"}} className=''> A Text Editor Application </p>
              </Card.Body>
              <Card.Footer>
              <Button href='https://text-editordawdaw.vercel.app' variant='outlined' color='success'>visit</Button>
              </Card.Footer>
               </Card>

                </Col>

                <Col lg = {4} style={{marginTop:"35px"}}>

                <Card style={{padding:"15px"}}>

               <motion.div          
              initial = {{x:-100}}
              animate = {{x:0}}
              whileHover={{scale:1.2}}
              >
                
              <a href='https://next-new-1.vercel.app'>
              <Paper elevation={5} style={{width:"100%",height:"100%",display:"grid",placeItems:"center",borderRadius:"15px"}}>
                 <img  src={require("./images/restaurant.png")} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px"}}/>
              </Paper>
              </a>
              </motion.div>
              <Card.Body style={{height:"100px"}}>
                <p></p>
                  <p style={{fontWeight:"bold"}} className=''> A Restaurant Booking Platform </p>
              </Card.Body>
              <Card.Footer>
              <Button href='https://next-new-1.vercel.app' variant='outlined' color='success'>visit</Button>
              </Card.Footer>
               </Card>

                </Col>

                <Col lg = {4} style={{marginTop:"35px"}}>
                <Card style={{padding:"15px"}}>

                        <motion.div          
                        initial = {{x:-100}}
                        animate = {{x:0}}
                        whileHover={{scale:1.2}}
                        >
                        
                        <a href='https://todo-new-olive.vercel.app'>
                        <Paper elevation={5} style={{width:"100%",height:"100%",display:"grid",placeItems:"center",borderRadius:"15px"}}>
                        <img  src={require("./images/todo.jpg")} style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"15px"}}/>
                        </Paper>
                        </a>
                        </motion.div>
                        <Card.Body style={{height:"100px"}}>
                        <p></p>
                        <p style={{fontWeight:"bold"}} className=''> A Todo Application </p>
                        </Card.Body>
                        <Card.Footer>
                        <Button href='https://todo-new-olive.vercel.app' variant='outlined' color='success'>visit</Button>
                        </Card.Footer>
                        </Card>

                    </Col>

         </Row>

    </div>
  )
}

export default Projects