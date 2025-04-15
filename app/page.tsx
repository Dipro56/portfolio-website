"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { RiSlideshow2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messageSuccessMessage, setMessageSuccessMessage] =
    useState<string>("");

  useEffect(() => {
    if (messageSuccessMessage) {
      setTimeout(() => {
        setMessageSuccessMessage("");
      }, 3000);
    }
  }, [messageSuccessMessage]);

  const handleMessageSubmit = (e: any) => {
    e.preventDefault();

    let templateParams = {
      name: userName,
      email: email,
      message: message,
    };

    console.log("templateParams", templateParams, userName, message, email);

    emailjs
      .send("service_zx0qsv6", "template_g5uxrda", templateParams, {
        publicKey: "ogscxaxwkHZgjVx6I",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          setMessage("");
          setEmail("");
          setUserName("");

          if (response.status == 200) {
            setMessageSuccessMessage(
              "Your message has been sent successfully!"
            );
          }
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0F172A]">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#38BDF8]">
              Hi, I&apos;m Sadat Shahriar
            </h1>
            <div className="typing-container text-white">
              <h1 className="flex text-3xl font-bold">
                I am a{" "}
                <span className="typing ml-2 text-[#00CF5D]">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["Software Engineer", "Web Developer", "Sports Lover!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            </div>

            <p className="text-white">
              I love to create scalable web and mobile applications. Also solving
              complex problems with clean, efficient code.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800">
              Contact Me
            </Button>
          </div>
          <div className="md:w-1/3 flex ">
            <div className="bg-blue-900 relative  rounded-lg overflow-hidden border-[4px] border-white">
              <Image
                src="/images/me.jpg"
                alt="Developer illustration"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-[#0B1120]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#38BDF8] font-bold text-center mb-12">{`<About Me/>`}</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-white mb-6">
              I&apos;m a dedicated software engineer with 3 years of experience
              in developing innovative web applications. My interest lies in
              creating seamless user experiences through clean, efficient code
              and intuitive design. I thrive on tackling complex problems and
              delivering high-quality, maintainable, and scalable solutions.
            </p>
            <p className="text-white">
              Currently, I&apos;m working as a Software Engineer (Frontend) at
              Gakk Media. But i focus on full-stack development, ensuring our
              products not only function flawlessly but also provide exceptional
              user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">F</div>
                </div>
                <h3 className="font-bold mb-2 text-white">
                  Frontend Development
                </h3>
                <p className="text-sm text-gray-300">
                  React, Next js, JavaScript, TypeScript
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">B</div>
                </div>
                <h3 className="font-bold mb-2 text-white">
                  Backend Development
                </h3>
                <p className="text-sm text-gray-300">Node.js, Python</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">U</div>
                </div>
                <h3 className="font-bold mb-2 text-white">UI/UX Design</h3>
                <p className="text-sm text-gray-300">Figma</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-xl font-bold">M</div>
                </div>
                <h3 className="font-bold mb-2 text-white">
                  Mobile Development
                </h3>
                <p className="text-sm text-gray-300">React Native, Flutter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#38BDF8]">{`<Technical Skills/>`}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center">
              <IoLogoJavascript fill="white" size={70} />
              <p className="mt-3 text-white">Javascript</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <FaHtml5 fill="white" size={70} />
              <p className="mt-3 text-white">Html</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <IoLogoCss3 fill="white" size={70} />
              <p className="mt-3 text-white">CSS</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <FaReact fill="white" size={70} />
              <p className="mt-3 text-white">React</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <SiRedux fill="white" size={70} />
              <p className="mt-3 text-white">Redux</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <SiNextdotjs fill="white" size={70} />
              <p className="mt-3 text-white">Next Js</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <SiTypescript fill="white" size={70} />
              <p className="mt-3 text-white">Typescript</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <FaNode fill="white" size={70} />
              <p className="mt-3 text-white">Node</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <FaFigma fill="white" size={70} />
              <p className="mt-3 text-white">Figma</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <FaFlutter fill="white" size={70} />
              <p className="mt-3 text-white">Flutter</p>
            </div>

            {/* <SkillCard name="JavaScript" percentage={90} icon="JS" />
            <SkillCard name="Python" percentage={85} icon="PY" />
            <SkillCard name="React" percentage={95} icon="RE" />
            <SkillCard name="Node.js" percentage={88} icon="NO" /> */}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-[#0B1221]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#38BDF8]">{`<Featured Projects/>`}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Shadhin"
              description="Largest audio platform of Bangladesh. User can enjoy different kind of audio contents here."
              image="/images/shadhin_project.png"
              tags={["Javascript", "React", "Next.js", "Zustand"]}
              liveLink={"https://shadhinmusic.com/"}
              stats={{ github: 25, stars: 42, forks: 15 }}
              demoLink={null}
              githubLink={null}
            />
            <ProjectCard
              title="Infiniti"
              description="Infiniti is a document processing software. It is used for document editing and storing. "
              image="/images/infinite.png"
              tags={["React", "Typescript", "Redux"]}
              stats={{ github: 18, stars: 36, forks: 12 }}
              liveLink={"http://100.42.178.85:3002/"}
              demoLink={
                "https://drive.google.com/file/d/1Jh_1f9C2u0n42FUQ5pOXa671_NmfhVMn/view?usp=drive_link"
              }
              githubLink={null}
            />

            <ProjectCard
              title="Win"
              description="Win is a quiz platform. User can enjoy different types of quiz here. This platform is also used by different types of telco."
              image="/images/win.png"
              tags={["Javascript", "React", "Next Js", "Redux"]}
              stats={{ github: 18, stars: 36, forks: 12 }}
              liveLink={"https://win2gain.com"}
              demoLink={null}
              githubLink={null}
            />

            <ProjectCard
              title="Shadhin CMS"
              description="This project is for data monitoring and observing different types of revenue for shadhin company."
              image="/images/shadhincms.png"
              tags={["Javascript", "React", "Redux"]}
              stats={{ github: 18, stars: 36, forks: 12 }}
              liveLink={"http://shadhincms.shadhin.co/"}
              demoLink={null}
              githubLink={null}
            />

            <ProjectCard
              title="BRAN FC Slot booker"
              description="This project is for booking football match slot for players of branfc club"
              image="/images/branfc_project.png"
              tags={["Typescript", "React", "Redux", "Node", "Express"]}
              stats={{ github: 18, stars: 36, forks: 12 }}
              liveLink={null}
              demoLink={null}
              githubLink={
                "https://github.com/Dipro56/bran-fc-slot-booking-frontend"
              }
            />

            <ProjectCard
              title="ISSB"
              description="ISSB is a online course platform that is used to serve candidates to get pass ISSB exam and join Bangladesh army."
              image="/images/issb_solution.png"
              tags={["Javascript", "React", "Redux"]}
              stats={{ github: 18, stars: 36, forks: 12 }}
              liveLink={"https://www.issbsolution.com/"}
              demoLink={null}
              githubLink={null}
            />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#38BDF8]">{`<Work Experience/>`}</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <ExperienceCard
              company="Gakk Media (Shadhin)"
              role="Software Engineer (Frontend)"
              period="2022 October - Present"
              achievements={[
                "Implemented various features like stream & win campaign, playlist, payment, authentication of Shadhin which is currently number one audio platform of Bangladesh.",
                "Restructured the project and refactored old unmaintainable codes to readable, maintainable and clean code. Increased performance by decreasing initial loading time.",
                "Build a report management system from scratch for viewing various kind of data report using React which is used by telecommunication clients (Banglalink, GP, Robi).",
                "Developed VAS services and updated features as per client need.",
                "Helped and guided junior teammates.",
              ]}
            />
            <ExperienceCard
              company="Fair Pattern"
              role="Software Engineer (Frontend)"
              period="2024 Deember - 2025 March (Contractual)"
              achievements={[
                "Developed document drawing functionality within the DocuWare platform to build interactive and user-friendly drawing tools.",
                "Designed and implemented complex document annotation features, including drawing, highlighting, and editing, significantly enhancing user interactivity with documents",
                "Collaborated with cross-functional teams to ensure smooth integration, high performance, and a user-friendly interface for the document drawing features",
              ]}
            />

            <ExperienceCard
              company="Hashcode"
              role="Software Developer"
              period="2022 January - 2022 December"
              achievements={[
                "Developed and maintained web and mobile applications using JavaScript, React, React Native and Node.js",
                `Collaborated with cross-functional teams to design and implement new features Resolved performance issues for different client products.`,
                "Converted figma design to functional components as perproject requirement.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-16 bg-[#0B1221]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#38BDF8]">
            {`<Education & Certifications/>`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <div className="text-blue-600 text-xl">🎓</div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    BSc in Software Engineering
                  </h3>
                  <p className="text-sm text-gray-300">
                    Islamic University Of Technology (IUT)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <div className="text-blue-600 text-xl">🎓</div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    HSC (2014-16)
                  </h3>
                  <p className="text-sm text-gray-300">
                    Govt. Azizul Haque College Bogura
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <div className="text-blue-600 text-xl">🎓</div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    SSC (2014)
                  </h3>
                  <p className="text-sm text-gray-300">
                    Bogura Cantonment Public School And College
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16  bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#38BDF8]">{`<Get In Touch/>`}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Name
                </label>
                <Input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email
                </label>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[120px]"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                {messageSuccessMessage ? (
                  <p className="text-[#38BDF8] my-2">{messageSuccessMessage}</p>
                ) : (
                  <></>
                )}
              </div>
              <Button
                onClick={handleMessageSubmit}
                className="w-full bg-blue-900 hover:bg-blue-800"
              >
                Send Message
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Connect With Me</h3>
              <div className="space-y-4">
                <Link
                  href={"https://github.com/Dipro56"}
                  className="flex items-center gap-3 text-white hover:text-[#38BDF8]"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 text-white hover:text-[#38BDF8]"
                >
                  <Mail className="h-5 w-5" />
                  <span>sadatshahriarbari@gmail.com</span>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/sadat-shahriar-bari/"}
                  className="flex items-center gap-3 text-white hover:text-[#38BDF8]"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin</span>
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
      <footer className="bg-[#0B1221] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2025 Sadat Shahriar All rights reserved.
            </p>
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
  );
}

// Component for skill cards with progress bars
function SkillCard({
  name,
  percentage,
  icon,
}: {
  name: string;
  percentage: number;
  icon: string;
}) {
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
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
}

// Component for project cards
function ProjectCard({
  title,
  description,
  image,
  tags,
  stats,
  liveLink,
  demoLink,
  githubLink,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[] | { left: string[]; right: string[] };
  stats: { github: number; stars: number; forks: number };
  liveLink: string | null;
  demoLink: string | null;
  githubLink: string | null;
}) {
  return (
    <Card className="overflow-hidden bg-[#182234] border-gray-500">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover hover:transform"
      />
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 text-[#38BDF8]">{title}</h3>
        <p className="text-white text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(tags) ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))
          ) : (
            <>
              <div className="flex gap-2">
                {tags.left.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 ml-auto">
                {tags.right.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex text-xs text-gray-500">
          {liveLink ? (
            <Link href={liveLink}>
              <div className="flex items-center mr-4 text-[#38BDF8]">
                <IoIosLink className="h-3 w-3 mr-1" />
                <span>Live link</span>
              </div>
            </Link>
          ) : (
            <></>
          )}

          {demoLink ? (
            <Link href={demoLink}>
              <div className="flex items-center mr-4 text-[#38BDF8]">
                <RiSlideshow2Line className="h-3 w-3 mr-1" />
                <span>Demo link</span>
              </div>
            </Link>
          ) : (
            <></>
          )}

          {githubLink ? (
            <Link href={githubLink}>
              <div className="flex items-center mr-4 text-[#38BDF8]">
                <Github className="h-3 w-3 mr-1" />
                <span>Github link</span>
              </div>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Component for experience cards
function ExperienceCard({
  company,
  role,
  period,
  achievements,
}: {
  company: string;
  role: string;
  period: string;
  achievements: string[];
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
        <h3 className="text-xl text-white font-bold">{role}</h3>
        <p className="text-blue-600">
          {company} • {period}
        </p>
        <ul className="space-y-2 mt-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span className="text-white">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//emailjs.send("service_zx0qsv6","template_g5uxrda");
//ogscxaxwkHZgjVx6I
