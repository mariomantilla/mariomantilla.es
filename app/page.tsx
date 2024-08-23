import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedH1 } from "@/components/animated/h1"
import { AnimatedLi } from "@/components/animated/li"
import { AnimatedDiv } from "@/components/animated/div"
import { AnimatedH2 } from "@/components/animated/h2"
import { GoTop } from "@/components/go-top"
import { HeaderButton } from "@/components/header-button"
import { ContactButton } from "@/components/contact-button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import marioPic from "@/public/mario.jpg"
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });


export default function Home() {

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
			<header className="sticky top-0 z-10 backdrop-blur-sm bg-white/10 border-b border-white/20 max-w-screen-2xl">
				<div className="container mx-auto px-4 py-4 flex justify-center sm:justify-between items-center">
					<AnimatedH1>
						Mario Mantilla
					</AnimatedH1>
					<nav>
						<ul className="flex space-x-6 text-xs sm:text-sm">
							{["About", "Skills", "Projects", "Contact"].map((text, index) => (
								<AnimatedLi key={text} text={text} index={index} />
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main className="container mx-auto px-4 py-12 max-w-screen-lg">
				<section id="about" className="mb-24 flex flex-row gap-10 max-sm:flex-col-reverse">
					<AnimatedDiv
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="grow"
					>
						<h2 className="text-5xl font-bold mb-6">About Me</h2>
						<p className="text-xl mb-6 max-w-2xl">
							Hi, I&apos;m Jane Doe, a passionate software engineer with 5 years of experience in full-stack development.
							I specialize in building scalable web applications using modern technologies.
						</p>
						<div className="flex space-x-4">
							<HeaderButton
								url="https://github.com/mariomantilla"
								text="GitHub"
								icon={<Github className="mr-2 h-5 w-5" />}
							/>
							<HeaderButton
								url="https://www.linkedin.com/in/mariomantilla/"
								text="LinkedIn"
								icon={<Linkedin className="mr-2 h-5 w-5" />}
							/>
						</div>
					</AnimatedDiv>
					<AnimatedDiv
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<Avatar style={{width: 250, height: 250}} className="mx-auto sm:mx-0">
							<AvatarImage asChild src="mario.jpg">
								<Image priority src={marioPic} alt="Picture of Mario" width={250} height={250} />
							</AvatarImage>
						</Avatar>
					</AnimatedDiv>

				</section>

				<section id="skills" className="mb-24">
					<AnimatedH2>Skills</AnimatedH2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"].map((skill, index) => (
							<AnimatedDiv
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300">
									<CardContent className="p-6">
										<p className="text-center text-lg font-semibold text-white">{skill}</p>
									</CardContent>
								</Card>
							</AnimatedDiv>
						))}
					</div>
				</section>

				<section id="projects" className="mb-24">
					<AnimatedH2>Projects</AnimatedH2>
					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								title: "E-commerce Platform",
								description: "A full-stack e-commerce solution built with React and Node.js.",
								link: "#"
							},
							{
								title: "Task Management App",
								description: "A React Native mobile app for managing daily tasks and schedules.",
								link: "#"
							},
							{
								title: "Data Visualization Dashboard",
								description: "An interactive dashboard using D3.js for visualizing complex datasets.",
								link: "#"
							},
							{
								title: "AI Chatbot",
								description: "A machine learning powered chatbot built with Python and TensorFlow.",
								link: "#"
							}
						].map((project, index) => (
							<AnimatedDiv
								key={index}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
							>
								<Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
									<CardHeader>
										<CardTitle className="text-2xl font-semibold text-white">{project.title}</CardTitle>
										<CardDescription className="text-white/70">{project.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<Button variant="link" className="p-0 text-yellow-300 hover:text-yellow-100">View Project</Button>
									</CardContent>
								</Card>
							</AnimatedDiv>
						))}
					</div>
				</section>

				<section id="contact" className="mb-24">
					<AnimatedH2>Contact Me</AnimatedH2>
					<AnimatedDiv
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
					<Card className="bg-white/10 border-white/20">
						<CardContent className="p-8">
							<form className="space-y-6 items-center">
								<div>
									<label htmlFor="name" className="block text-lg font-medium mb-2 text-white">Name</label>
									<input type="text" id="name" className="w-full p-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300" />
								</div>
								<div>
									<label htmlFor="email" className="block text-lg font-medium mb-2 text-white">Email</label>
									<input type="email" id="email" className="w-full p-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300" />
								</div>
								<div>
									<label htmlFor="message" className="block text-lg font-medium mb-2 text-white">Message</label>
									<textarea id="message" rows={4} className="w-full p-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300"></textarea>
								</div>
								<div className="flex items-center justify-center">
									<Button variant="outline" type="submit">
										<Send className="mr-2 h-5 w-5" />
										Send Message
									</Button>
								</div>
							</form>
						</CardContent>
					</Card>
					</AnimatedDiv>
				</section>
			</main>

			<footer className="bg-black/30 py-8">
				<div className="container mx-auto px-4 text-center">
					<p className="mb-4">&copy; 2024 Mario Mantilla. All rights reserved.</p>
					<div className="flex justify-center space-x-6">
						<ContactButton
							url="https://github.com/mariomantilla"
							icon={<Github className="h-6 w-6" />}
							text="GitHub"
						/>
						<ContactButton
							url="https://www.linkedin.com/in/mariomantilla/"
							icon={<Linkedin className="h-6 w-6" />}
							text="LinkedIn"
						/>
						<ContactButton
							url="mailto:mariomantillasanchez@gmail.com"
							icon={<Mail className="h-6 w-6" />}
							text="Email"
						/>
					</div>
				</div>
			</footer>
			<GoTop />
		</div>
	)
}