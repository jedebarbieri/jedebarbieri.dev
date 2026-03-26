import Hero from "./components/Hero";
import Section from "./components/Section";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
    return (
        <div>
            <div className="page-container">

                <Hero />

                <main className="px-6 py-6">

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
                        <WorkExperience
                            position="Co-founder and Project Manager"
                            company="BigRock Designs"
                            location="California City, CA – Remote"
                            startDate="January 2023"
                            endDate="July 2023"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Co-founded and managed BigRock Designs, a digital solutions company leading a team of 4 members.</li>
                                    <li className="pl-2">Successfully delivered commercial websites on Squarespace, Shopify and WordPress platforms.</li>
                                    <li className="pl-2">Conducted marketing campaigns on Google Ads and Meta.</li>
                                    <li className="pl-2">Managed client relationships, gathering requirements and presenting results.</li>
                                    <li className="pl-2">Utilized Jira in advanced mode for efficient project planning, budgeting, and advanced team coordination.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="Product Manager"
                            company="LandGorilla SA"
                            location="California City, CA - Remote"
                            startDate="July 2022"
                            endDate="December 2022"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Write detailed user stories based on user and stakeholder requirements.</li>
                                    <li className="pl-2">Specify functionality details to define the scope of user stories.</li>
                                    <li className="pl-2">Collaborate with the development team to address any queries.</li>
                                    <li className="pl-2">Supervise UX/UI design and review progress in meetings.</li>
                                    <li className="pl-2">Identify metrics to measure the success of user story development.</li>
                                    <li className="pl-2">Analyze user response and behavior after software deployments.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="Functional & Software Analyst"
                            company="LandGorilla SA"
                            location="California City, CA - Remote"
                            startDate="March 2021"
                            endDate="June 2022"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Evaluate the viability of requested requirements and proposed solutions.</li>
                                    <li className="pl-2">Design and propose innovative solutions while considering technical debt.</li>
                                    <li className="pl-2">Document requirement specifications and technical solutions.</li>
                                    <li className="pl-2">Collaborate with the development team to agree on technical software designs.</li>
                                    <li className="pl-2">Perform project management functions including planning and monitoring progress.</li>
                                    <li className="pl-2">Validate deliverable quality.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="PHP Senior Fullstack Analyst Developer"
                            company="LandGorilla SA"
                            location="California City, CA - Remote"
                            startDate="June 2019"
                            endDate="February 2021"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Developed applications for banks and clients to manage construction loans.</li>
                                    <li className="pl-2">Identified and resolved bugs, contributing to continuous improvement.</li>
                                    <li className="pl-2">Developed a messenger module for communication among loan participants using the AWS services.</li>
                                    <li className="pl-2">Led the restructuring of files and documents for improved security.</li>
                                    <li className="pl-2">Designed and developed a web scraping module in GO language.</li>
                                    <li className="pl-2">Proposed code improvements for scalability and security enhancements.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="PHP Senior Fullstack Developer"
                            company="Movistar"
                            location="Lima"
                            startDate="March 2019"
                            endDate="May 2019"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Developed a module to process sales and calculate commissions.</li>
                                    <li className="pl-2">Implemented the project using Laravel and background workers.</li>
                                    <li className="pl-2">Managed large volumes of data efficiently.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="Web Developer and Designer"
                            company="Freelancer"
                            location="Lima"
                            startDate="March 2013"
                            endDate="February 2019"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Worked on various PHP projects for clients in different industries.</li>
                                    <li className="pl-2">Managed the complete software development lifecycle.</li>
                                    <li className="pl-2">Gathered client requirements and provided budget estimates.</li>
                                    <li className="pl-2">Managed time, resources, and risks.</li>
                                    <li className="pl-2">Designed databases and developed all layers of the system.</li>
                                    <li className="pl-2">Ensured a seamless user experience with responsive design.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="Junior Developer"
                            company="Northsouth Studios"
                            location="Lima"
                            startDate="December 2011"
                            endDate="February 2013"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Developed web pages using frameworks, applications, and reports.</li>
                                    <li className="pl-2">Utilized Java (Sean Framework), HTML, CSS, JQuery, and ActionScript 3.0.</li>
                                    <li className="pl-2">Created SQLServer reports and CrystalReports.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="IT Intern Assistant"
                            company="Edelnor"
                            location="Lima"
                            startDate="July 2011"
                            endDate="November 2011"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Oversaw and tracked systems incidents, creating weekly reports.</li>
                                    <li className="pl-2">Monitored project progress and improved communication processes.</li>
                                    <li className="pl-2">Enhanced reporting of project budget execution.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="Programmer Analyst"
                            company="MarketCom"
                            location="Lima"
                            startDate="January 2009"
                            endDate="August 2010"
                            description={
                                <ul className="list-disc pl-8">
                                    <li className="pl-2">Developed interactive games, postcards, presentations, and minisites in ActionScript Flash.</li>
                                    <li className="pl-2">Utilized XML for automated solutions in animated banners and campaigns.</li>
                                    <li className="pl-2">Conducted analysis of web pages and content management systems.</li>
                                    <li className="pl-2">Developed solutions using VBA Macros.</li>
                                </ul>
                            }
                        />
                    </Section>

                    <Section title="Education">
                        <Education
                            title="Bachelor’s Degree in Software Engineer"
                            school="Pontificia Universidad Católica del Perú"
                            startDate="August 2002"
                            endDate="December 2012"
                        />
                        <Education
                            title="Functional Analysis"
                            school="Education IT"
                            startDate="February 2021"
                            endDate="March 2021"
                        />
                        <Education
                            title="Android 8 Mobile Developer"
                            school="Cibertec"
                            startDate="June 2019"
                            endDate="September 2019"
                        />
                        <Education
                            title="Administrator Diploma"
                            school="Zegel – IPAE"
                            startDate="March 2015"
                            endDate="September 2015"
                        />
                        <Education
                            title="JavaScript Workshop"
                            school="InfoPUC"
                            startDate="February 2004"
                            endDate="March 2004"
                        />
                    </Section>

                    <Section title="Skills">
                        <Skills
                            items={[
                                "PHP / Laravel",
                                "React / Vue",
                                "REST APIs",
                                "JavaScript",
                                "jQuery",
                                "HTML5",
                                "CSS",
                                "Tailwind / Bootstrap",
                                "MySQL / SQLServer",
                                "Docker",
                                "Git",
                                "Agile",
                                "Jira / Notion",
                                "Photoshop",
                                "Illustrator",
                                "Figma",
                                "UX/UI"
                            ]}
                        />
                    </Section>

                    <Section title="Languages">
                        <Languages
                            items={[
                                "Spanish — Native",
                                "English — C1",
                                "Portuguese — C1"
                            ]}
                        />
                    </Section>

                </main>
            </div>
            <Footer />
        </div>
    );

};

export default App;