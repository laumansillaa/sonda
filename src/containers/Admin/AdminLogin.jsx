import React from 'react'

const AdminLogin = () => {
	return (
		<main className="h-screen flex flex-col justify-center items-center">
			<form className="bg-gray-500 flex flex-col gap-2 p-20 rounded-lg">
				<label htmlFor="email" className="text-lg font-medium text-gray-100">
					Email
				</label>
				<input
					type="email"
					placeholder="Email aqui..."
					id="email"
					name="email"
					className="rounded-lg px-1 py-2 border-none w-64"
				/>
				<label htmlFor="password" className="text-lg font-medium text-gray-100">
					Constraseña
				</label>
				<input
					type="password"
					placeholder="Contraseña aqui..."
					id="password"
					name="password"
					className="rounded-lg px-1 py-2 border-none w-64"
				/>

				<button
					type="submit"
					className="mt-5 bg-gradient-to-r text-white font-medium from-cyan-500 to-cyan-900 px-4 py-2 rounded-lg hover:opacity-90 transition-all ease-in-out flex-1 text-center flex items-center justify-center space-x-2"
				>
					Ingresar
				</button>
			</form>
		</main>
	)
}

export default AdminLogin
