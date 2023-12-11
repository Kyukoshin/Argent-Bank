import { Routes, Route } from 'react-router-dom'
import './style/main.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Error from './pages/Error'

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile/" element={<Profile />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}