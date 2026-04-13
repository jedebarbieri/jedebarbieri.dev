
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Section from "./components/Section";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import "./style.css";
import ProjectCard from "./components/ProjectCard";

const App = () => {
    useEffect(() => {
        Aos.refresh();
        Aos.init({
            duration: 800,
            easing: "ease-in-out",
        });
    }, []);
    return (
        <div>

            <Hero />

            <div className="page-container">

                <main className="px-6 py-6">
                    <Section title="Work Experience">
                        <WorkExperience
                            position="Airbnb Claims Specialist"
                            company="FoundEver Portugal"
                            location="Lisbon, Portugal"
                            startDate="May 2025"
                            endDate="Present"
                            description={
                                <ul>
                                    <li>Handle complex claims within the AirCover workflow, balancing policy constraints with <b>user expectations</b> in high-pressure scenarios.</li>
                                    <li>Translate ambiguous real-world issues into structured decisions, ensuring consistent and fair outcomes.</li>
                                    <li><b>Communicate</b> complex limitations clearly, managing conflict and maintaining trust in negative-resolution cases.</li>
                                    <li>Strengthened core soft skills critical for senior engineering roles: stakeholder communication, expectation management, and decision-making under uncertainty.</li>
                                </ul>
                            }
                        />
                        <WorkExperience
                            position="Fullstack Developer"
                            company="Enzen Portugal"
                            location="Lisbon, Portugal"
                            startDate="October 2023"
                            endDate="February 2025"
                            description={
                                <ul>
                                    <li>Leadership in the development of a comprehensive ERP system based on <b>Laravel</b> 10 and <b>React</b>, structured as a <b>Restful API</b>.</li>
                                    <li>Development of key modules such as Procurement, Budgets, Operations & Maintenance, and Assets Management, optimizing critical company processes.</li>
                                    <li>Creation of a <b>strategic roadmap</b> based on the analysis of business processes, prioritizing automation and alignment with business objectives.</li>
                                    <li>Embedded <b>software development in C++</b> for solar panel control using MCU with STM32, integrated into the web platform for real-time management.</li>
                                    <li>Implementation of agile methodologies to ensure fast and high-quality deliveries.</li>
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
                                <ul>
                                    <li>Co-founded and managed BigRock Designs, a digital solutions company leading a team of 4 members.</li>
                                    <li>Successfully delivered commercial websites on Squarespace, <b>Shopify</b> and <b>WordPress</b> platforms.</li>
                                    <li>Conducted marketing campaigns on <b>Google Ads</b> and <b>Meta</b>.</li>
                                    <li>Managed client relationships, gathering requirements and presenting results.</li>
                                    <li>Utilized <b>Jira</b> in advanced mode for efficient project planning, budgeting, and advanced team coordination.</li>
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
                                <ul>
                                    <li>Write detailed <b>user stories</b> based on user and <b>stakeholder requirements</b>.</li>
                                    <li>Specify <b>functionality details</b> to define the scope of user stories.</li>
                                    <li>Collaborate with the development team to address any queries.</li>
                                    <li>Supervise UX/UI design and review progress in meetings.</li>
                                    <li>Identify metrics to measure the success of user story development.</li>
                                    <li>Analyze user response and behavior after software deployments.</li>
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
                                <ul>
                                    <li>Evaluate the viability of requested requirements and proposed solutions.</li>
                                    <li>Design and propose <b>innovative solutions</b> while considering technical debt.</li>
                                    <li>Document requirement specifications and <b>technical solutions</b>.</li>
                                    <li>Collaborate with the development team to agree on <b>technical software designs</b>.</li>
                                    <li>Perform <b>project management</b> functions including planning and monitoring progress.</li>
                                    <li>Validate deliverable quality.</li>
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
                                <ul>
                                    <li>Developed applications for banks and clients to manage construction loans.</li>
                                    <li><b>Identified and resolved bugs</b>, contributing to continuous improvement.</li>
                                    <li>Developed a messenger module for communication among loan participants using the <b>AWS services</b>.</li>
                                    <li>Led the restructuring of files and documents for improved security.</li>
                                    <li>Designed and developed a web scraping module in <b>GO</b> language.</li>
                                    <li>Proposed code improvements for <b>scalability</b> and <b>security enhancements</b>.</li>
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
                                <ul>
                                    <li>Developed a module to process sales and calculate commissions.</li>
                                    <li>Implemented the project using <b>Laravel</b> and background workers.</li>
                                    <li>Managed large volumes of data efficiently.</li>
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
                                <ul>
                                    <li>Worked on various <b>PHP</b> projects for clients in different industries.</li>
                                    <li>Managed the complete software development lifecycle.</li>
                                    <li>Gathered <b>client requirements</b> and provided budget estimates.</li>
                                    <li>Managed time, resources, and risks.</li>
                                    <li><b>Designed databases</b> and developed all layers of the system.</li>
                                    <li>Ensured a seamless user experience with responsive design.</li>
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
                                <ul>
                                    <li>Developed web pages using frameworks, applications, and reports.</li>
                                    <li>Utilized Java (Sean Framework), HTML, CSS, JQuery, and ActionScript 3.0.</li>
                                    <li>Created SQLServer reports and CrystalReports.</li>
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
                                <ul>
                                    <li>Oversaw and tracked systems incidents, creating weekly reports.</li>
                                    <li>Monitored project progress and improved communication processes.</li>
                                    <li>Enhanced reporting of project budget execution.</li>
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
                                <ul>
                                    <li>Developed interactive games, postcards, presentations, and minisites in ActionScript Flash.</li>
                                    <li>Utilized XML for automated solutions in animated banners and campaigns.</li>
                                    <li>Conducted analysis of web pages and content management systems.</li>
                                    <li>Developed solutions using VBA Macros.</li>
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
                    <Section title="Projects">
                        <p className="text-regular mb-8">
                            A selection of projects that demonstrate my skills and experience in web development, showcasing a range of technologies and solutions.
                        </p>

                        <ProjectCard
                            title="Solar Panel Enterprise ERP"
                            description="Laravel 10 + React.js. API Restful. Fullstack desarrollado por mí, incluyendo microcontroladores STM32 para controlar paneles solares con C++."
                            techs={["PHP", "Laravel", "React", "C++", "PrimeReact", "Vite"]}
                        />
                        <ProjectCard
                            title="Dulce Jardín"
                            description="Tienda de arreglos frutales. Flujo de compra personalizado con programación de entrega y dedicatoria. CMS a medida."
                            techs={["PHP", "jQuery", "AJAX"]}
                        />
                        <ProjectCard
                            title="Manjares de Casa"
                            description="Es una tienda de bombones y chocolates y dulces variados. Con un diseño simple pero creativo. Tiene su propio CMS a medida y opción para descargar el listado completo de productos en excel."
                            techs={["PHP", "jQuery", "AJAX"]}
                        />
                    </Section>
                </main>
            </div>
            <Footer />
        </div>
    );

};

export default App;