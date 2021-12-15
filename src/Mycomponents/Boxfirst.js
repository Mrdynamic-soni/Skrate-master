import React from 'react'
import { useNavigate , useHistory } from "react-router-dom";
export const Boxfirst = () => {

    const history = useHistory();
    const Routing = ()=> {
        history.push("./dashboard")
    }
    // const Dashboard = () => {
        // let navigate = useNavigate();
    return (
    <div className="container">
        <div className="row" style={{margin:"58px -5px"}}>
          <div style={{border:"1px solid black", margin:"30px", height:"330px", borderRadius:"4%", width:"600px"}} className="col-md-4">
              <span style={{fontSize:"20px",position:"absolute",left:"10%", top:"13%"}}><b>Overview</b> </span> 
              <button onClick={()=> Routing()} style={{borderRadius:"10px",position:"absolute",top:"14%",right:"54%",backgroundColor:"#d5d5e9",border:"none",padding:"11px"}} >Dashboard </button>
              <div style={{backgroundColor:"#d5d5e9",position:"absolute",top:"24%",right:"75%",width:"225px",height:"100px",borderRadius:"10px"}}> <span style={{position:"absolute",top:"32%",right:"48%",fontSize:"18px"}}>Profile Views <span style={{position:"absolute",top:"-40%",right:"-65%",fontSize:"35px",color:"blue"}}>89 </span> </span></div>
              <div style={{backgroundColor:"#d5d5e9",position:"absolute",top:"40%",right:"75%",width:"225px",height:"100px",borderRadius:"10px"}}><span style={{position:"absolute",top:"32%",right:"48%",fontSize:"18px"}}>Jobs Applied <span style={{position:"absolute",top:"-40%",right:"-65%",fontSize:"35px",color:"blue"}}>3 </span>  </span></div>
              <div style={{backgroundColor:"#d5d5e9",position:"absolute",top:"24%",right:"54%",width:"225px",height:"100px",borderRadius:"10px"}}><span style={{position:"absolute",top:"23%",right:"48%",fontSize:"18px"}}>Mentorship <span style={{position:"absolute",top:"80%",right:"27%"}}>Sessions</span><span style={{position:"absolute",top:"-13%",right:"-65%",fontSize:"35px",color:"blue"}}>5 </span> </span></div>
              <div style={{backgroundColor:"#d5d5e9",position:"absolute",top:"40%",right:"54%",width:"225px",height:"100px",borderRadius:"10px"}}><span style={{position:"absolute",top:"32%",right:"48%",fontSize:"18px"}}>Skills Verified <span style={{position:"absolute",top:"-40%",right:"-65%",fontSize:"35px",color:"blue"}}>3 </span> </span></div>
              </div>
          
        </div>
    {/* }; */}
        <div className="row">
          <div style={{border:"1px solid black", margin:"-30px 0px -30px 0px", position:"absolute",top:"16%",right:"5%", borderRadius:"3%", width:"600px", height:"720px"}} className="col-md-3 ms-md-auto">
              <span style={{fontSize:"20px",position:"absolute",left:"4%", top:"1.3%"}}><b>New Job Postings</b> </span>
              <button onClick={() => {alert('A Button Was Clicked');}} style={{borderRadius:"10px",position:"absolute",top:"2%",right:"5%",backgroundColor:"#d5d5e9",border:"none",padding:"11px"}} >View All</button> 
              <div>
              <img style={{width:"40px", height:"40px", borderRadius:"100%", position:"absolute", left:"4%", top:"17%"}} src="https://yt3.ggpht.com/a/AGF-l7-pLWHhqjLR5ZVoKzV9_eU6IjYrDyhvSLRjsw=s900-mo-c-c0xffffffff-rj-k-no"/>
              <span style={{position:"absolute",left:"16%", top:"16%",fontSize:"18px"}}>Flutter Developer</span>
              <span style={{position:"absolute",left:"23%", top:"18.5%",fontSize:"16px"}}>Google</span>
              <span style={{position:"absolute",left:"23%", top:"21%",fontSize:"15px"}}>Remote</span>
              <span  onClick={() => {alert('A Button Was Clicked');}} style={{position:"absolute",left:"85%", top:"18.5%",transform: "scale(2,1.5)",cursor:"pointer"}}>&#10140;</span>
              <span style={{position:"absolute",right:"34%", top:"19%",color:"lightGreen"}}>2 Hours Ago</span>
              </div>
              </div>
              <div>
              <img style={{width:"40px", height:"40px", borderRadius:"100%", position:"absolute", right:"40%", top:"50%"}} src="https://res.cloudinary.com/teepublic/image/private/s--8hQXxy9h--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1504359381/production/designs/1867913_1.jpg"/>
              <span style={{position:"absolute",right:"28.5%", top:"48%",fontSize:"18px"}}>Django Developer</span>
              <span style={{position:"absolute",right:"31%", top:"51%",fontSize:"16px"}}>Atlayssian</span>
              <span style={{position:"absolute",right:"31.5%", top:"54%",fontSize:"15px"}}>Bay Area</span>
              <span onClick={() => {alert('A Button Was Clicked');}} style={{position:"absolute",left:"89%", top:"51%",transform: "scale(2,1.5)",cursor:"pointer"}}>&#10140;</span>
              <span style={{position:"absolute",right:"19%", top:"51%"}}>1 Day Ago</span>
              </div>
              <div>
              <img style={{width:"40px", height:"40px", borderRadius:"100%", position:"absolute", right:"40%", top:"74%"}} src="https://www.alva-group.com/wp-content/uploads/2020/06/Quantitative-Analyst-1.jpg"/>
              <span style={{position:"absolute",right:"28%", top:"72%",fontSize:"18px"}}>Quantative Analyst</span>
              <span style={{position:"absolute",right:"30%", top:"75%",fontSize:"16px"}}>Argo Capital</span>
              <span style={{position:"absolute",right:"31%", top:"78%",fontSize:"15px"}}>Remote</span>
              <span onClick={() => {alert('A Button Was Clicked');}} style={{position:"absolute",right:"10%", top:"75%",transform: "scale(2,1.5)",cursor:"pointer"}}>&#10140;</span>
              <span style={{position:"absolute",right:"19%", top:"75%"}}>2 Days Ago</span>
              </div>
              <div>
              <img style={{width:"40px", height:"40px", borderRadius:"100%", position:"absolute", right:"40%", top:"96%"}} src="https://www.alva-group.com/wp-content/uploads/2020/06/Quantitative-Analyst-1.jpg"/>
              <span style={{position:"absolute",right:"30%", top:"95%",fontSize:"18px"}}>C++ Developer</span>
              <span style={{position:"absolute",right:"30.5%", top:"98%",fontSize:"16px"}}>Trios Resources </span>
              <span style={{position:"absolute",right:"31.8%", top:"100.5%",fontSize:"15px"}}>Singapore</span>
              <span onClick={() => {alert('A Button Was Clicked');}} style={{position:"absolute",right:"10%", top:"98%",transform: "scale(2,1.5)", cursor:"pointer"}}>&#10140;</span>
              <span style={{position:"absolute",right:"19%", top:"98%"}}>3 Days Ago</span>
              </div>
        </div>
        <div className="row" style={{margin:"-63px -5px"}}>
          <div style={{border:"1px solid black", margin:"30px", height:"330px", borderRadius:"4%", width:"600px"}} className="col-auto me-auto">
              <span style={{fontSize:"20px",position:"absolute",left:"10%", top:"67%"}}> <b>Upcoming Sessions</b> </span> 
              <button onClick={() => {alert('A Button Was Clicked');}} style={{borderRadius:"10px",position:"absolute",top:"68%",right:"54%",backgroundColor:"#d5d5e9",border:"none",padding:"11px"}}>View All </button>
              <div>
              <img style={{width:"40px", height:"40px", borderRadius:"100%",position:"absolute",left:"10%", top:"80%"}} src="https://images.hdqwalls.com/wallpapers/flutter-logo-4k-qn.jpg" />
              <span style={{position:"absolute",left:"15%", top:"79%",fontSize:"18px"}}>Himanshu</span>
              <span style={{position:"absolute",left:"15.5%", top:"84%",fontSize:"16px"}}>Flutter</span>
              <span style={{position:"absolute",left:"24%", top:"79%"}}>14.00-15.00</span>
              <span style={{position:"absolute",left:"24%", top:"84%"}}>24/10/2021</span>
              <span style={{position:"absolute",left:"34%", top:"80%",backgroundColor:"pink",padding:"11px",borderRadius:"10px"}}>Mentorship</span>
              <span onClick={() => {alert('A Button Was Clicked');}} style={{position:"absolute",left:"43%", top:"81%",transform: "scale(2,1.5)",cursor:"pointer"}}>&#10140;</span>
              </div>
              <div>
              <img style={{width:"40px", height:"40px", borderRadius:"100%", position:"absolute", left:"10%", top:"100%"}} src="https://ih1.redbubble.net/image.399557482.5366/flat,550x550,075,f.jpg"/>
              <span style={{position:"absolute",left:"15%", top:"99%",fontSize:"18px"}}>Himanshu</span>
              <span style={{position:"absolute",left:"15.5%", top:"104%",fontSize:"16px"}}>Django</span>
              <span style={{position:"absolute",left:"24%", top:"99%"}}>14.00-15.00</span>
              <span style={{position:"absolute",left:"24%", top:"104%"}}>24/10/2021</span>
              <span style={{position:"absolute",left:"35%", top:"100%",backgroundColor:"yellow",padding:"11px",borderRadius:"10px"}}>Review</span>
              <span onClick={() => {alert('A Button Was Clicked');}} style={{position:"absolute",left:"43%", top:"101%",transform: "scale(2,1.5)",cursor:"pointer"}}>&#10140;</span>
              </div>
            
            </div>
          
        </div>
      </div>
    )
      
    }
