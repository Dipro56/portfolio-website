import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Hi, I&apos;m Sadat Shahriar</h1>
            <div className="typing-container">
              <h1>I am a <span className="typing">Software Engineer</span></h1>
            </div>

            <p className="text-gray-700">
              Passionate about building scalable applications and solving complex problems with clean, efficient code.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800">Contact Me</Button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-900 rounded-lg overflow-hidden">
              <Image
                src="/images/me.jpg"
                alt="Developer illustration"
                width={450}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-700 mb-6">
              I&apos;m a dedicated software engineer with 5 years of experience in developing innovative web and mobile
              applications. My passion lies in creating seamless user experiences through clean, efficient code and
              intuitive design. I thrive on tackling complex problems and delivering high-quality, maintainable, and
              scalable solutions.
            </p>
            <p className="text-gray-700">
              Currently, I&apos;m working as a Senior Software Engineer at Tech Solutions Inc., where I lead development
              teams in creating enterprise-level applications. I focus on full-stack development, which design, and
              mobile app development, ensuring our products not only function flawlessly but also provide exceptional
              user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">F</div>
                </div>
                <h3 className="font-bold mb-2">Frontend Development</h3>
                <p className="text-sm text-gray-600">React, Vue.js, TypeScript</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">B</div>
                </div>
                <h3 className="font-bold mb-2">Backend Development</h3>
                <p className="text-sm text-gray-600">Node.js, Python, PHP</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">U</div>
                </div>
                <h3 className="font-bold mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-600">Figma, Adobe XD</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">M</div>
                </div>
                <h3 className="font-bold mb-2">Mobile Development</h3>
                <p className="text-sm text-gray-600">React Native, Flutter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <SkillCard name="JavaScript" percentage={90} icon="JS" />
            <SkillCard name="Python" percentage={85} icon="PY" />
            <SkillCard name="React" percentage={95} icon="RE" />
            <SkillCard name="Node.js" percentage={88} icon="NO" />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Analytics Dashboard"
              description="A real-time analytics dashboard built with React and D3.js, processing millions of data points daily."
              image="/images/analytics-project.png"
              tags={["React", "D3.js", "Node.js"]}
              stats={{ github: 25, stars: 42, forks: 15 }}
            />
            <ProjectCard
              title="E-commerce Platform"
              description="Full-scale e-commerce solution with real-time inventory management and payment processing."
              image="/images/ecommerce-project.png"
              tags={["React", "Python", "PostgreSQL"]}
              stats={{ github: 18, stars: 36, forks: 12 }}
            />
            <ProjectCard
              title="Real-time Chat App"
              description="WebSocket-based chat application supporting multiple rooms and file sharing."
              image="/images/chat-project.png"
              tags={{ left: ["Node.js", "Express"], right: ["MongoDB", "Socket.io"] }}
              stats={{ github: 30, stars: 55, forks: 20 }}
            />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <ExperienceCard
              company="Tech Solutions Inc."
              role="Senior Software Engineer"
              period="2020 - Present"
              achievements={[
                "Led development of cloud-native applications serving 20M+ users",
                "Implemented microservices architecture reducing deployment time by 60%",
                "Mentored junior developers and conducted technical interviews",
              ]}
            />
            <ExperienceCard
              company="Innovation Labs"
              role="Software Engineer"
              period="2017 - 2020"
              achievements={[
                "Developed and maintained mobile-first banking applications",
                "Improved application performance by 40% through optimization",
                "Implemented automated testing reducing bugs by 75%",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <div className="text-blue-600 text-xl">🎓</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Master of Computer Science</h3>
                  <p className="text-sm text-gray-600">Specialized in Artificial Intelligence and Machine Learning</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <div className="text-blue-600 text-xl">🏆</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">AWS Solutions Architect</h3>
                  <p className="text-sm text-gray-600">Professional certification in cloud architecture and services</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-blue-900 hover:bg-blue-800">Send Message</Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Connect With Me</h3>
              <div className="space-y-4">
                <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                  <Github className="h-5 w-5" />
                  <span>github.com/johnsmith</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                  <Mail className="h-5 w-5" />
                  <span>contact@johnsmith.com</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/johnsmith</span>
                </Link>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2023 John Smith. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:underline">
                About
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Projects
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Component for skill cards with progress bars
function SkillCard({ name, percentage, icon }: { name: string; percentage: number; icon: string }) {
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">{name}</span>
          <div className="bg-blue-100 w-6 h-6 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs font-bold">{icon}</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for project cards
function ProjectCard({
  title,
  description,
  image,
  tags,
  stats,
}: {
  title: string
  description: string
  image: string
  tags: string[] | { left: string[]; right: string[] }
  stats: { github: number; stars: number; forks: number }
}) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(tags) ? (
            tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))
          ) : (
            <>
              <div className="flex gap-2">
                {tags.left.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 ml-auto">
                {tags.right.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex text-xs text-gray-500">
          <div className="flex items-center mr-4">
            <Github className="h-3 w-3 mr-1" />
            <span>{stats.github}</span>
          </div>
          <div className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 mr-1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>{stats.stars}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 mr-1"
            >
              <path d="M7 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
              <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
              <line x1="12" y1="12" x2="12" y2="19" />
              <line x1="8" y1="15" x2="16" y2="15" />
            </svg>
            <span>{stats.forks}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for experience cards
function ExperienceCard({
  company,
  role,
  period,
  achievements,
}: {
  company: string
  role: string
  period: string
  achievements: string[]
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {company.charAt(0)}
        </div>
        <div className="w-0.5 grow bg-gray-300 my-2"></div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{role}</h3>
        <p className="text-blue-600">
          {company} • {period}
        </p>
        <ul className="space-y-2 mt-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
