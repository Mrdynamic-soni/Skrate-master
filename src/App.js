// import "./App.css"
import Topnavbar from "./Mycomponents/Topnavbar";
import Sidenavbar from "./Mycomponents/Sidenavbar";
import {Boxfirst} from "./Mycomponents/Boxfirst";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
 import {Dashboard} from "./Mycomponents/Dashboard";
 
function App() {
    
    return (
   <>
   {/* <Router>
     <Switch>
      
       <Route path="./dashboard">
        <Dashboard /> 
       </Route>
       <Route path="./">
       
       </Route>
     </Switch>
   </Router> */}
   <Topnavbar/>
   <Sidenavbar/>
   <Boxfirst/>
  
   {/* <Router>
   <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-link">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <b> Skrate </b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div className="nav-item"> <a> <img style={{borderRadius:"100%", height:"40px", width:"40px",position:"absolute",right:"9%", top:"14%"}} src="https://wallpapercave.com/wp/g7TrhkK.jpg"/> <span style={{position:"absolute",right:"1%", top:"25%",fontStyle:"bold !important"}}>Samridhi Kumari </span> </a> </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
    <div className="row">
        <div className="me col-1 px-2 bg-link position-fixed" id="sticky-sidebar">
            <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
                <a href="./" className="nav-link "><i activeStyle={{backgroundColor:"blue"}} style={{color:"black", fontSize:"35px", margin:"70px 0px 20px 0px" }} className="fa fa-fw fa-home iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-search iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-envelope iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-user iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-th-large iconee"></i></a>
                <a href="./My components/Dashboard" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-chart-bar iconee"></i></a>
            </div>
        </div>
    </div>
</div>
        <Routes>
        <Route  path=".My components/Dashboard" element={<Dashboard/>} />

          <Navigate to="/" />
         </Routes>
      </Router>
       */}
   </>
   
      );
}

export default App;
