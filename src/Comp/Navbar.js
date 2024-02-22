import React, { Component } from 'react';

// This is a React Router v6 app
import {
    Link
  } from "react-router-dom";

export default class Navbar extends Component {

    removeActiveClass = () =>{
        let rLink = document.getElementsByClassName("nav-link");
        for (let element = 0; element < rLink.length; element++) {
            rLink[element].classList.remove('active');
        }
        Array.from(rLink).forEach((element)=>{
            element.addEventListener("click", (e)=>{
                e.target.classList.add("active");
            })
        })
    }
      

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">newsZone</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={this.removeActiveClass}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" onClick={this.removeActiveClass}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" onClick={this.removeActiveClass}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" onClick={this.removeActiveClass}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" onClick={this.removeActiveClass}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" onClick={this.removeActiveClass}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" onClick={this.removeActiveClass}>Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
