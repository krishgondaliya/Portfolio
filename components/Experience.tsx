import React from "react"
import SlideUp from "./SlideUp"

const experiences = [
    {
        title: "Software Engineering Intern",
        company: "Charles Schwab",
        date: "May 2025 - Present",
        location: "Austin, TX",
        description: [
        ]
    },
    {
        title: "Software Engineering Intern",
        company: "Knovos LLC",
        date: "May 2023 - August 2023",
        location: "Hybrid",
        description: [
            "Optimized code designs and adhered to the Software Development Life Cycle (SDLC) by implementing Agile and Scrum methodologies, which reduced project delivery times and enhanced team collaboration.",
            "Developed POST, GET, and DELETE endpoints using Java and Spring Boot API framework, which reduced data processing time by 40%, resulting in faster response rates and improved user experience.",
            "Implemented diverse features and components, resolved bugs, and wrote 90+ unit tests using testing framework like Mockito, gaining proficiency in test-driven and agile development methodologies."
        ]
    },
    {
        title: "IT Student Consultant and Technician",
        company: "Rutgers University Institutional Planning and Operation",
        date: "March 2024 - Present",
        location: "Edison, NJ",
        description: [
            "Provided technical support on various IT issues including software installations, hardware troubleshooting, and network connectivity problems, resulting in a 95% issue resolution rate on first contact.",
            "Maintained and administered over 30 multimedia systems of classroom technology, ensuring smooth operation of equipment and resources for academic use.",
            "Contributed to the documentation and updating of 20+ support procedures and knowledge base articles to facilitate consistent and accurate support delivery."
        ]
    },
    {
        title: "Rutgers Competitive Programming Club",
        company: "Rutgers University",
        date: "September 2023 - Present",
        description: [
            "Participated in club activities, collaborating with members preparing for programming contests."
        ]
    },
]

const ExperienceSection = () => {
    return (
        <section id="experience" className="relative">
            <h1 className="my-8 text-center font-bold text-3xl">
                Experience
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-400"></div>
                <div className="flex flex-col space-y-10 pl-16">
                    {experiences.map((experience, idx) => {
                        return (
                            <div key={idx} className="relative flex items-start">
                                <SlideUp offset="-300px 0px -300px 0px">
                                    <div className="flex flex-col md:flex-row md:space-x-8">
                                        <div className="relative md:w-1/2">
                                            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                                            <div className="ml-8">
                                                <h1 className="text-2xl font-semibold mb-2">{experience.title}</h1>
                                                <h2 className="text-lg mb-1">{experience.company}</h2>
                                                {experience.location && <p className="text-base text-neutral-500 mb-2">{experience.location}</p>}
                                                {experience.description.map((line, idx) => (
                                                    <p key={idx} className="text-base leading-6 mb-2 text-neutral-600 dark:text-neutral-400">
                                                        {line}
                                                    </p>
                                                ))}
                                                <p className="text-base text-neutral-500">{experience.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
