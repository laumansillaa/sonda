import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const sections = [
	{ name: 'Quienes somos', to: '/somos', id: 1 },
	{ name: 'Productos', to: '/productos', id: 2 },
	{ name: 'Servicios', to: '/servicios', id: 3 },
	{ name: 'Cursos', to: '/cursos-y-capacitaciones', id: 4 },
	{ name: 'Contacto', to: '/contacto', id: 5 },
];

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const navigate = useNavigate()
	const session = localStorage.getItem('session')
	const handleMenuClick = () => {
		setMenuOpened(!menuOpened);
	};

	const handleLogOut = () => {
		localStorage.removeItem('session')
		navigate('/')
	}

	return (
		<>
			<header className="p-2 fixed w-full h-20 bg-slate-700 flex items-center justify-between text-white z-10">
				<nav className="flex container mx-auto  items-center justify-between flex-1">
					<NavLink to="/">
						<img
							src="/logo.png"
							className="w-32 object-contain"
							alt="Sonda SRL Logo"
						/>
					</NavLink>

					{!menuOpened && (
						<GiHamburgerMenu
							size={32}
							color="#2174A0"
							className="cursor-pointer lg:hidden"
							onClick={handleMenuClick}
						/>
					)}
					{menuOpened && (
						<AiOutlineClose
							size={32}
							color="#2174A0"
							className="cursor-pointer lg:hidden"
							onClick={handleMenuClick}
						/>
					)}

					<ul className="hidden lg:flex space-x-3 gap-4">
						{sections.map((section) => (
							<NavLink
								key={section.id}
								to={section.to}
								className="font-semibold transition-all ease-in-out hover:text-cyan-600 hover:border-b hover:border-blue-300"
							>
								{section.name}
							</NavLink>
						))}
						{
							session && 
							<>	
							<NavLink 
								to='/admin'
								className="font-semibold transition-all ease-in-out hover:text-cyan-600 hover:border-b hover:border-blue-300 cursor-pointer">
								Admin
							</NavLink>
								<div className="font-semibold transition-all ease-in-out hover:text-cyan-600 hover:border-b hover:border-blue-300 cursor-pointer"
									onClick={() => handleLogOut()}
								>
									Cerrar Sesión
								</div>
							</>
						}
					</ul>
				</nav>
			</header>
			{menuOpened && (
				<ul className="fixed z-10 top-20 right-0 min-h-full flex flex-col space-y-5 shadow-xl p-10 text-black bg-slate-300 bg-opacity-90">
					{sections.map((section) => (
						<NavLink
							key={section.id}
							to={section.to}
							className="font-semibold transition-all ease-in-out hover:text-blue-900 hover:border-b hover:border-blue-300"
							onClick={handleMenuClick}
						>
							{section.name}
						</NavLink>
					))}
				</ul>
			)}
		</>
	);
};

export default Header;
