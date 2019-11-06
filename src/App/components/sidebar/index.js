import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default class SideBar extends React.Component {

    render(){
        return(
            <div className="sidebar">

                <div className="courtesy-box"></div>

                <NavLink to="/">
                    <div className="icon-box">
                        <i className="fas fa-sun fa-3x"></i>
                        <span className="section-title">Daily</span>
                    </div>
                </NavLink>

                <NavLink to="/work">
                    <div className="icon-box">
                        <i className="fas fa-book fa-3x"></i>
                        <span className="section-title">Sessions</span>
                    </div>
                </NavLink>

                <NavLink to="/in-the-moment">
                    <div className="icon-box">
                        <i className="fas fa-water fa-3x"></i>
                        <span className="section-title">Flow</span>
                    </div>
                </NavLink>

                <NavLink to="/config">
                    <div className="icon-box">
                        <i className="fas fa-toolbox fa-3x"></i>
                        <span className="section-title">Config</span>
                    </div>
                </NavLink>
                
            </div>
        );
    }

}