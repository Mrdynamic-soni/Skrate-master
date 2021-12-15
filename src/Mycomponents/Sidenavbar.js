import { render } from '@testing-library/react'
import React from 'react'
// import ReactDOM from "react-dom"
// import "./App.css"

export default function Sidenavbar() {
    return (
        <div className="container-fluid">
    <div className="row">
        <div className="me col-1 px-2 bg-link position-fixed" id="sticky-sidebar">
            <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
                <a href="./" className="nav-link "><i activeStyle={{backgroundColor:"blue"}} style={{color:"black", fontSize:"35px", margin:"70px 0px 20px 0px" }} className="fa fa-fw fa-home iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-search iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-envelope iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-user iconee"></i></a>
                <a href="./" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-th-large iconee"></i></a>
                <a href="./src/My components/Dashboard" className="nav-link"><i style={{color:"black", fontSize:"30px",margin:"20px 0px 20px 0px"}} className="fa fa-fw fa-chart-bar iconee"></i></a>
            </div>
        </div>
    </div>
</div>
 
                        
    )
}
