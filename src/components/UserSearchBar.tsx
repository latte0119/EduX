import React,{useState} from 'react'
import {
	NavLink as RouterLink
}from 'react-router-dom'
import{
	Input,
	Button,
	Form,
	Navbar,
	Nav,
}from 'reactstrap'

const UserSearchBar:React.FC=()=>{
	const [userId,setUserId]=useState("")

	return (
		<Navbar
			color="light"
			light
		>
			<Nav navbar>
				<Form inline>
					<Input
						style={{width:160}}
						value={userId}
						type="text"
						onChange={(e):void=>setUserId(e.target.value)}
					/>

					<Button tag={RouterLink} to={"/table/"+userId} color="danger">
						exec
					</Button>
				</Form>
			</Nav>

		</Navbar>
	)

}

export default UserSearchBar;