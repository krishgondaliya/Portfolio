import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
  { skill: "C++" },
  { skill: "Java" },
  { skill: "SQL" },
  { skill: "Node.js" },
  { skill: "Spring Boot" },
  { skill: "Django" },
  { skill: "OpenCV" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Bootstrap" },
  { skill: "Azure" },
  { skill: "AWS" },
  { skill: ".NET" },
  { skill: "Ruby" },
  { skill: "Scala" },
  { skill: "C#" },
  { skill: "R" },
  { skill: "Vue" },
  { skill: "Angular" },
  { skill: "Express" },
  { skill: "Mockito" },
  { skill: "PostgreSQL" },
  { skill: "Redis" },
  { skill: "GitLab" },
  { skill: "Linux" },
  { skill: "CI/CD" },
  { skill: "Docker" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-lg md:text-xl">
              Hello, I’m Krish Gondaliya, a junior at Rutgers University pursuing CS and Data Science. I have developed a solid foundation in various aspects of technology through hands-on projects and academic coursework. My interests lie in Full-Stack Development, Distributed Systems, and Mobile App Development.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              I am eager to apply my skills in real-world settings and seek out internship and co-op opportunities that challenge me to grow. My goal is to contribute effectively while honing both my programming and leadership skills.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              For any inquiries or opportunities, feel free to reach out to me at:{" "}
              <span className="font-bold text-teal-500">
                <a href="mailto:k.gondaliya@rutgers.edu">k.gondaliya@rutgers.edu</a>
              </span>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
