import { Github, Linkedin, Mail, SquareArrowOutUpRight, Chrome } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedLogo } from "@/components/animated/logo"
import { AnimatedLi } from "@/components/animated/li"
import { AnimatedDiv } from "@/components/animated/div"
import { AnimatedH2 } from "@/components/animated/h2"
import { GoTop } from "@/components/go-top"
import { HeaderButton } from "@/components/header-button"
import { ContactButton } from "@/components/contact-button"
import Image from "next/image"
import marioPic from "@/public/mario.jpg"
import { ContactForm } from "@/components/contact-form"
import { Toaster } from "@/components/ui/toaster"


export default function Home() {

	const skills = [
		"Python",
		"JS/TS",
		"Django",
		"Flask",
		"PostgreSQL",
		"Node",
		"Docker",
		"Next.js (React)",
		"Flutter",
		"Angular",
		"GitHub/GitLab",
		"AWS/GCP"
	]

	const projects = [
		{
			title: "Honestore",
			description: "A community of consumer activists. Web built using NextJS and deployed with Vercel. Mobile app made with Flutter and backend powered by Supabase.",
			links: [
				{
					text: "Website",
					url: "https://honestore.app/",
					icon: <SquareArrowOutUpRight className="mr-2 h-5 w-5" />
				},
				{
					text: "App Repo",
					url: "https://github.com/mariomantilla/honestore",
					icon: <Github className="mr-2 h-5 w-5" />
				},
				{
					text: "Web Repo",
					url: "https://github.com/mariomantilla/honestore-web",
					icon: <Github className="mr-2 h-5 w-5" />
				}
			],
			repos: [""]
		},
		{
			title: "Data Visualization Dashboard",
			description: "Webapp to post (via both API and web UI), visualize metrics on a timeline and see average values per minute, hour, and day. Using Next.js 14 (App Router) full-stack.",
			links: [
				{
					text: "Web Repo",
					url: "https://github.com/mariomantilla/metrics-dashboard",
					icon: <Github className="mr-2 h-5 w-5" />
				}
			]
		},
		{
			title: "Shifts Management App",
			description: "Small webapp for scheduling shifts at work. Made with React and Supabase.",
			links: [
				{
					text: "Website",
					url: "https://workschedules.netlify.app/",
					icon: <SquareArrowOutUpRight className="mr-2 h-5 w-5" />
				},
				{
					text: "Web Repo",
					url: "https://github.com/mariomantilla/schedules",
					icon: <Github className="mr-2 h-5 w-5" />
				}
			]
		},
		{
			title: "Gitlab Time Tracker",
			description: "Chrome Extension to track the time you spend in each GitLab issue (task)",
			links: [
				{
					text: "Chrome Web Store",
					url: "https://chromewebstore.google.com/detail/gitlab-time-tracker/dfgcimjdeijmapdncmgndgldefodhflo?hl=es&pli=1",
					icon: <Chrome className="mr-2 h-5 w-5" />
				}
			]
		},
		{
			title: "Hacker News Scraper",
			description: "Web crawler developed in Python that extracts information from the Hacker News webpage using scraping techniques",
			links: [
				{
					text: "Web Repo",
					url: "https://github.com/mariomantilla/hacker-news-scraper",
					icon: <Github className="mr-2 h-5 w-5" />
				}
			]
		},
		{
			title: "Marketing Websites",
			description: "Websites developed for SMEs and professionals to showcase their services and build online presence",
			links: [
				{
					text: "Limpiaplus",
					url: "https://limpiaplus.com/",
					icon: <SquareArrowOutUpRight className="mr-2 h-5 w-5" />
				},
				{
					text: "Webpros",
					url: "https://www.webpros.es/",
					icon: <SquareArrowOutUpRight className="mr-2 h-5 w-5" />
				},
				{
					text: "Kamila",
					url: "https://www.kamilaguilera.com/",
					icon: <SquareArrowOutUpRight className="mr-2 h-5 w-5" />
				}
			]
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-br via-rose-100 from-blue-100 to-orange-100 text-stone-900">
			<header className="sticky top-0 z-10 backdrop-blur-sm bg-white/10 border-b border-white/20 max-w-screen-2xl">
				<div className="container mx-auto px-4 py-4 flex justify-center sm:justify-between items-center">
					<AnimatedLogo>
						&lt;M/M&gt;
					</AnimatedLogo>
					<nav>
						<ul className="flex space-x-8 text-sm sm:text-base">
							{["About", "Skills", "Projects", "Contact"].map((text, index) => (
								<AnimatedLi key={text} text={text} index={index} />
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main className="container mx-auto px-4 py-12 max-w-screen-lg">
				<section className="mb-6 sm:mb-24">
					<h1 className="text-5xl sm:text-7xl mb-5 text-center sm:text-left">Mario Mantilla</h1>
					<h2 className="text-2xl text-balance text-center sm:text-left leading-10">A <span className="bg-cyan-950 text-white px-2">software engineer</span> with focus
						on <span className="bg-rose-800 text-white px-2">social impact</span></h2>
				</section>
				<section id="about" className="mb-12 sm:mb-24 flex flex-row gap-6 sm:gap-10 max-sm:flex-col-reverse">
					<div className="grow">
						<h2 className="text-4xl sm:text-5xl mb-6">About Me</h2>
						<p className="text-lg sm:text-xl mb-6 text-left sm:text-balance">
							A versatile engineer that loves transforming software into social impact.
							Background in aerospace engineering and years of experience developing software.
							Worked as freelance developer and building scalable SaaS applications.
							<br /><br />
							Flexible character and team worker that can work independently but enjoys
							teaching and learning from others. Savours diving into product design and business
							logic to come up with the best technical solutions.
						</p>
						<AnimatedDiv
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
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
					</div>
					<AnimatedDiv
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<Image priority src={marioPic} alt="Picture of Mario" width={250} height={250}
						className="mx-auto sm:mx-0 rounded-full max-w-44 sm:max-w-none"
						sizes="(max-width: 640px) 176px, 250px" />
					</AnimatedDiv>

				</section>

				<section id="skills" className="mb-12 sm:mb-24">
					<AnimatedH2>Main Technologies</AnimatedH2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{skills.map((skill, index) => (
							<AnimatedDiv
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300">
									<CardContent className="p-2 sm:p-6">
										<p className="break-words text-center text-sm sm:text-lg font-semibold text-stone-900">{skill}</p>
									</CardContent>
								</Card>
							</AnimatedDiv>
						))}
					</div>
				</section>

				<section id="projects" className="mb-12 sm:mb-24">
					<AnimatedH2>Projects</AnimatedH2>
					<div className="grid md:grid-cols-2 gap-8 items-stretch">
						{projects.map((project, index) => (
							<AnimatedDiv
								key={index}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
							>
								<Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
									<CardHeader>
										<CardTitle className="text-2xl font-semibold text-stone-900">{project.title}</CardTitle>
										<CardDescription className="text-stone-900/70">{project.description}</CardDescription>
									</CardHeader>
									<CardContent className="flex gap-4 flex-wrap">
										{project.links.map((link) => (
											<a
												key={link.text}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className={buttonVariants({ variant: "outline" })}>
												{link.icon}	{link.text}
											</a>
										))}
									</CardContent>
								</Card>
							</AnimatedDiv>
						))}
					</div>
				</section>

				<section id="contact" className="mb-18">
					<AnimatedH2>Contact Me</AnimatedH2>
					<AnimatedDiv
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<Card className="bg-white/10 border-white/20">
							<CardContent className="p-8">
								<ContactForm />
							</CardContent>
						</Card>
					</AnimatedDiv>
				</section>
			</main>

			<footer className="bg-black/30 py-8">
				<div className="container mx-auto px-4 text-center">
					<p className="mb-4 text-white">&copy; 2024 Mario Mantilla. All rights reserved.</p>
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
			<Toaster />
		</div>
	)
}