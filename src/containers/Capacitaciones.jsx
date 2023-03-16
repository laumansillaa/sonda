import { AiOutlineCheckCircle, AiOutlineTeam } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Footer from '../components/Footer';

const Capacitaciones = () => {
	return (
		<>
			<main className="py-24 bg-gray-300">
				<section className="min-h-[calc(100vh-80px)]">
					<div className="mx-auto max-w-[43rem] px-4">
						<div className="text-center">
							<h2 className="text-2xl lg:text-4xl font-medium leading-8 text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300">
								Cursos y Capacitaciones
							</h2>
							<h1 className="mt-3 text-3xl md:text-[3.5rem] font-bold md:leading-[4rem] tracking-tight text-black">
								La formación continua y la educación constituyen un valor
								inestimable
							</h1>
							<p className="mt-3 text-lg leading-relaxed text-black">
								Con el fin de aportar mejores resultados, estar mejor preparados
								y optimizar el tiempo{' '}
								<span className="font-bold">SONDA SRL </span>
								brinda nuevas tecnologías y nuevas herramientas de trabajo.
							</p>
						</div>
					</div>
					<section className="bg-gradient-to-r from-cyan-500 to-cyan-900 p-10 lg:p-24 text-slate-300 font-bold text-xl lg:text-2xl mt-5">
						<h2 className="lg:w-4/5 mx-auto">
							Contamos con un sólido catálogo de distintos cursos de
							capacitaciones técnicas, que hacen un abordaje integral sobre
							información actualizada y de calidad, lo que permitirá a usted y a
							su empresa una brillante oportunidad para complementar e
							incorporar conceptos esenciales y actualizados, que amplíen y
							profundicen su conocimiento, ya que sabemos la importancia de
							tener un personal integrado.
						</h2>
					</section>
				</section>

				<section>
					<div className="container px-6 py-5 mx-auto">
						<div className="grid grid-cols-1 gap-8 my-5 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
							<div className="p-8 space-y-3 border-2 border-cyan-500  rounded-xl">
								<span className="inline-block text-cyan-600 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-8 h-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
										/>
									</svg>
								</span>

								<p className="text-black leading-7 lg:text-xl">
									La historia del mundo se cuenta en fases marcadas por
									desafíos, aprendizajes y cambios. Las transformaciones reales
									y duraderas del mundo nacen en estos momentos. Estas fases de
									la historia nos enseñan que para evolucionar necesitamos
									emprender un nuevo camino con una forma diferente de ser y
									actuar.
								</p>
							</div>

							<div className="p-8 space-y-3 border-2 border-cyan-500  rounded-xl">
								<span className="inline-block text-cyan-600 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-8 h-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
										/>
									</svg>
								</span>

								<p className="text-black leading-7 lg:text-xl">
									Somos un grupo renovado, con líderes jóvenes y una nueva forma
									de trabajar: lo que más nos inspira: mirar hacia el futuro.
									Por eso nuestra modalidad a distancia se ha convertido en una
									herramienta indispensable que permite interactuar en tiempo
									real con los profesores.
								</p>
							</div>

							<div className="p-8 space-y-3 border-2 border-cyan-500  rounded-xl">
								<span className="inline-block text-cyan-600 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-8 h-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
										/>
									</svg>
								</span>

								<p className="text-black leading-7 lg:text-xl">
									Ofrecemos una formación intensiva con profesores altamente
									calificados. Una experiencia ampliamente enriquecedora con un
									equipo que busca superarse constantemente. La proyección de
									Sonda es producto del grupo humano que lo forma por lo que
									creamos un espacio virtual que ayude a que los conocimientos
									nos sirvan de por vida.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="my-5 container mx-auto px-6">
					<h2 className="text-2xl font-semibold">
						Sonda, inspirada en el futuro, incluye en todos sus programas de
						entrenamiento:
					</h2>
					<ul className="space-y-3 mt-4">
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Clase Teórica.
						</li>
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Clase Práctica.
						</li>
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Entrega de Manual de respaldo.
						</li>
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Entrega de Certificado de asistencia.
						</li>
					</ul>

					<h2 className="text-xl font-semibold pt-5">
						Nuestro temario incluye:
					</h2>
					<ul className="space-y-3 mt-4">
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Instrumentación de campo
						</li>
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Medición fiscal de gas natural
						</li>
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Medición fiscal de hidrocarburos líquidos
						</li>
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Introducción a la medición de gas Ultrasónico
						</li>
						<li className="flex items-center gap-2 font-medium">
							<AiOutlineCheckCircle size={25} color="#0A9AB6" />
							Redes y Protocolos de Comunicación en la Industria de Procesos
						</li>
					</ul>
				</section>

				<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
					<h2 className="text-2xl sm:text-4xl  text-gray-900 font-bold text-center">
						Programas de entrenamiento{' '}
						<span className="text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300">
							In Company
						</span>
					</h2>
					<p className="text-black text-lg text-center mb-5">
						Siempre a la vanguardia de la necesidad del Cliente.
					</p>

					<div className="grid grid-cols-1 gap-8 my-5 xl:gap-12 md:grid-cols-2">
						<div className="p-8 space-y-3 border-2 border-cyan-500 rounded-xl">
							<FaChalkboardTeacher size={30} color="#0891B2" />

							<p className="text-black leading-7 lg:text-xl">
								Ofrecemos una formación intensiva con profesores altamente
								calificados. Una experiencia ampliamente enriquecedora con un
								equipo que busca superarse constantemente. La proyección de
								Sonda es producto del grupo humano que lo forma por lo que
								creamos un espacio virtual que ayude a que los conocimientos nos
								sirvan de por vida.
							</p>
						</div>

						<div className="p-8 space-y-3 border-2 border-cyan-500  rounded-xl">
							<AiOutlineTeam size={30} color="#0891B2" />

							<p className="text-black leading-7 lg:text-xl">
								Nuestros entrenamientos in company están diseñados para
								desarrollarse dentro de las instalaciones de su empresa, sobre
								los mismos equipos que sus técnicos manejan a diario,
								garantizando una instrucción exhaustiva y a la medida que usted
								necesita.
							</p>
						</div>
					</div>
				</section>

				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
							Caracteristicas{' '}
							<span className="text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300">
								In Company
							</span>
						</p>
						<p className="mt-4 max-w-2xl text-xl text-black lg:mx-auto">
							Nuestros programas de entrenamiento, están diseñados para
							facilitar el aprendizaje haciendo hincapié en sus necesidades y
							dentro de las instalaciones de su empresa.
						</p>
					</div>

					<div className="mt-10">
						<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
							<div className="relative">
								<dt>
									<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-900 text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg font-medium leading-6 text-gray-900">
										Entrenamientos Completos
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-black">
									Entrenamientos completos, agiles y didácticos, sin la
									necesidad de salir del ámbito laboral y con horarios adecuados
									a sus posibilidades.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-900 text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg font-medium leading-6 text-gray-900">
										Adquisicion de conocimientos y habilidades
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-black">
									Facilitan la adquisición de conocimientos y habilidades para
									su equipo de trabajo a fin de obtener un manejo óptimo de sus
									equipos
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-900 text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg font-medium leading-6 text-gray-900">
										Adaptacion
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-black">
									Adaptar nuestros programas a las necesidades específicas de su
									empresa
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-900 text-white">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg font-medium leading-6 text-gray-900">
										Competencia
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-black">
									Facilitan la competencia de su equipo de trabajo.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</main>
			<Footer>
				<a
					href="mailto:rociomenu@sondasrl.com.ar"
					target="_BLANK"
					className="flex items-center space-x-2"
				>
					<MdEmail size={30} />
					<span>rociomenu@sondasrl.com.ar</span>
				</a>
			</Footer>
		</>
	);
};

export default Capacitaciones;
