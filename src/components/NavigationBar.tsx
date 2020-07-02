import React, {useState} from 'react'
import { NavLink as RouterLink} from 'react-router-dom'
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
	Nav,
	NavItem,
	NavLink,
	Navbar,
	NavbarBrand,
	NavbarToggler,
}from 'reactstrap'

const NavigationBar:React.FC=()=>{
	const [isOpen,setIsOpen]=useState(false);
	return(
		<Navbar color="dark" dark expand="sm">
			<NavbarBrand tag={RouterLink} to="/table">
				EduV
			</NavbarBrand>
			<NavbarToggler onClick={():void=>{setIsOpen(!isOpen)}}/>

			<Collapse isOpen={isOpen} navbar>
				<Nav navbar>
					<NavItem>
						<NavLink href="https://codeforces.com">Codeforces</NavLink>
					</NavItem>
					
					<NavItem>
						<NavLink href="https://github.com/latte0119/EduX">Github</NavLink>
					</NavItem>

					<UncontrolledDropdown nav inNavbar>
						
						<DropdownToggle nav caret>
							more
						</DropdownToggle>
					
						<DropdownMenu right>
							<DropdownItem>
								<NavLink href="https://revuestarlight.com/">uku</NavLink>
							</DropdownItem>
						</DropdownMenu>
					
					</UncontrolledDropdown>

				</Nav>
			</Collapse>
		</Navbar>
	)
}
export default NavigationBar;