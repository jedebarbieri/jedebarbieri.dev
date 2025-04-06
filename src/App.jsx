import Section from "./Section";
import WorkExperience from "./WorkExperience";

const App = () => {
    return <div className="page-container">
        <header className="sticky top-0 bg-header-bg text-white py-6 px-12 shadow-md z-50">
            <h1 className="uppercase text-2xl font-medium">Justo E. Debarbieri Arce</h1>
            <h2 className="text-lg text-accent">Fullstack Web Developer | Laravel, API Design & UX-focused</h2>
            <p className="text-accent text-sm"><a className="dark" href="mailto:hello@jedebarbieri.dev" target="_blank">hello@jedebarbieri.dev</a> • Lisboa, Portugal</p>
        </header>
        <main className="flex flex-col items-center h-screen px-12 py-6 text-lg leading-6 text-primary">
            <p className="mb-5">Fullstack developer specialized in <b>PHP</b> and <b>Laravel</b>, with a strong drive for building scalable, maintainable, and usercentric solutions. Passionate about crafting software that solves real-world problems and contributes to meaningful impact, I’m seeking challenges that allow me to grow while delivering value through clean, robust code.</p>
            <p className="text-center font-family-italic italic font-thin opacity-70">I hold a degree in Computer Engineering and bring deep expertise in PHP development, particularly with Laravel, as well as solid experience in other backend technologies. My professional background spans information <b>systems analysis</b>, <b>requirement gathering</b>, <b>documentation</b>, and <b>project coordination</b>. I'm skilled at working collaboratively across teams to deliver high-quality software, and I take pride in translating complex business needs into clear, actionable development tasks. My strong <b>technical foundation</b> is matched by a practical, problem-solving mindset that helps bridge the gap between vision and execution.</p>
            <Section title="Work Experience">
                <WorkExperience
                    position="Fullstack Developer"
                    company="Enzen Portugal"
                    location="Lisbon, Portugal"
                    startDate="October 2023"
                    endDate="February 2025"
                    description={
                        <ul className="list-disc pl-8">
                            <li className="pl-2">Leadership in the development of a comprehensive ERP system based on Laravel 10 and React, structured as a Restful API.</li>
                            <li className="pl-2">Development of key modules such as Procurement, Budgets, Operations & Maintenance, and Assets Management, optimizing critical company processes.</li>
                            <li className="pl-2">Creation of a strategic roadmap based on the analysis of business processes, prioritizing automation and alignment with business objectives.</li>
                            <li className="pl-2">Embedded software development in C++ for solar panel control using MCU with STM32, integrated into the web platform for real-time management.</li>
                            <li className="pl-2">Implementation of agile methodologies to ensure fast and high-quality deliveries.</li>
                        </ul>
                    }
                />
            </Section>
            <div className="text-center text-2xl mt-6">
                <div>IN PROGRESS!</div>
                <div>Do you have any opinion or sugestion? <br/> Please, send me an email to <a href="mailto:hello@jedebarbieri.dev">hello@jedebarbieri.dev</a></div>
            </div>
        </main>
    </div>

}

export default App;