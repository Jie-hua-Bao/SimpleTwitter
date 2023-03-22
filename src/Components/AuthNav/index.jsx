import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function AuthNav() {
	const navigate = useNavigate()
	let [Login, setLogin] = useState(false)
	useEffect(() => {
		console.log('useEffect被執行')
		if (!Login) navigate('/login')
	}, [Login])

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default AuthNav
