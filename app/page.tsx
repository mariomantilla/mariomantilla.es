import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedH1 } from "@/components/animated/h1"
import { AnimatedLi } from "@/components/animated/li"
import { AnimatedDiv } from "@/components/animated/div"
import { AnimatedH2 } from "@/components/animated/h2"

export default function Home() {

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white font-sans">
			<header className="sticky top-0 z-10 backdrop-blur-sm bg-white/10 border-b border-white/20">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<AnimatedH1>Mario Mantilla</AnimatedH1>
					<nav>
						<ul className="flex space-x-6">
							{["About", "Skills", "Projects", "Contact"].map((text, index) => (
								<AnimatedLi key={text} text={text} index={index} />
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main className="container mx-auto px-4 py-12">
				<section id="about" className="mb-24">
					<AnimatedDiv
						initial={{ opacity: 0, y: 50 }}
            			animate={{ opacity: 1, y: 0 }}
            			transition={{ duration: 0.8 }}
					>
						<h2 className="text-5xl font-bold mb-6 font-serif">About Me</h2>
						<p className="text-xl mb-6 max-w-2xl">
							Hi, I'm Jane Doe, a passionate software engineer with 5 years of experience in full-stack development.
							I specialize in building scalable web applications using modern technologies.
						</p>
						<div className="flex space-x-4">
							<Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
								<Github className="mr-2 h-5 w-5" />
								GitHub
							</Button>
							<Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
								<Linkedin className="mr-2 h-5 w-5" />
								LinkedIn
							</Button>
						</div>
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
										<p className="text-center text-lg font-semibold">{skill}</p>
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
										<CardTitle className="text-2xl font-semibold">{project.title}</CardTitle>
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
					<Card className="bg-white/10 border-white/20">
						<CardContent className="p-8">
							<form className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
									<input type="text" id="name" className="w-full p-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300" />
								</div>
								<div>
									<label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
									<input type="email" id="email" className="w-full p-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300" />
								</div>
								<div>
									<label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
									<textarea id="message" rows={4} className="w-full p-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300"></textarea>
								</div>
								<Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md transition-colors duration-300">
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>
				</section>
			</main>

			<footer className="bg-black/30 py-8">
				<div className="container mx-auto px-4 text-center">
					<p className="mb-4">&copy; 2023 Jane Doe. All rights reserved.</p>
					<div className="flex justify-center space-x-6">
						<a href="#" className="text-white/70 hover:text-yellow-300 transition-colors duration-300">
							<Github className="h-6 w-6" />
							<span className="sr-only">GitHub</span>
						</a>
						<a href="#" className="text-white/70 hover:text-yellow-300 transition-colors duration-300">
							<Linkedin className="h-6 w-6" />
							<span className="sr-only">LinkedIn</span>
						</a>
						<a href="#" className="text-white/70 hover:text-yellow-300 transition-colors duration-300">
							<Mail className="h-6 w-6" />
							<span className="sr-only">Email</span>
						</a>
					</div>
				</div>
			</footer>

			<AnimatedDiv
				className="fixed bottom-8 right-8"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 0.8 }}
			>
				<a
					href="#"
					className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300"
					aria-label="Scroll to top"
				>
					<ChevronDown className="h-6 w-6 transform rotate-180" />
				</a>
			</AnimatedDiv>
		</div>
	)
}