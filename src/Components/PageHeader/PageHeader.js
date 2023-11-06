import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router-dom'
import "./PageHeader.css"

const PageHeader = () => {
  
    return (
    <div className="page-header">
        <Container>
            <nav className="main-navigation">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/nationalParks">National Parks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/countries">Where to go</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/albums">Gallery</NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    </div>
  )
}

export default PageHeader