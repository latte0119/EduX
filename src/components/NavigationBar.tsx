import React from 'react'
import { NavLink as RouterLink, Route } from 'react-router-dom'
import {
	Nav,
	NavItem,
	NavLink,
	Navbar,
	NavbarBrand,
	NavbarToggler,
}from 'reactstrap'

const NavigationBar:React.FC=()=>{
	return(
		<div>
			<Navbar color="dark" dark expand="lg">
				<NavbarBrand tag={RouterLink} to="/" className="mb-0 h1">
					EduV
				</NavbarBrand>
			</Navbar>
		</div>
	)
}

export default NavigationBar;