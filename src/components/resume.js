import React from 'react';


export default class Resume extends React.Component {
    render() {
        return (
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Brian Redding</h4>
                                <p><em>
                                IT Professional with over 3 years of work experience providing technical support to the University of Hartford, Chrysalis Center, CompuCom, and RL Canning Inc. Performed system upgrades and windows migrations, troubleshooting software and hardware, client interaction support, Software Installs, facilitating remote work and collaboration across departments. Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level IT Support Tier 2 position in an IT infrastructure environment. Ready to help team achieve company goals.
                                </em></p>
                                <ul>
                                  
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelors Degree in Computer Science</h4>
                                <h5>Aug, 2016 - Mar, 2020</h5>
                                <p><em>University of Hartford</em></p>
                                <li>
                                 Dean's List: May 2018 GPA: 3.33
                                </li>
                                <p>
                                   	Relevant Coursework Completed:
 
                                </p>

                                <li>
                            CS 114/115: Fundamentals of Computing l and ll
                              </li>
                                <li>
                             CS 220: Data Structures and Algorithms
                                </li>
                                <li>
                              CS 275: Intro to Internet Programming
                                </li>
                                <li>
                                CS 351: Introduction to Artificial Intelligence
                                </li>
                                <li>
                           CS 355: Computer Networks    
                                </li>
                              <li>
                             CS 375: Web Services
                              </li>
                              <li>
                            CS 451 Computer Operating Systems
                            </li>
                             <li>
                                CS 460: Software Development (Capstone)
                            </li>
                            </div>
                            <div className="resume-item">
                                <h4>Master in Software Engineering</h4>
                                <h5>Sep, 2020 - Aug, 2022</h5>
                                <p><em>Walden University</em></p>
                                Relevant Coursework Completed:

                                <li>
                                Software Engineering and System Architecture
                                </li>
                                <li>
                                Software Modeling and Design
                                </li>
                                <li>
                                Algorithms and Computation
                                </li>
                                <li>
                                Software Testing and Quality Assurance
                                </li>
                                <li>
                                Advanced Database Systems
                                </li>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Desktop Support Analyst | RL Canning Inc </h4>
                                <h5>Aug, 2021 - Present </h5>
                                {/* <p><em>Experion, New York, NY </em></p> */}
                                <ul>
                                    <li>
                                    Computer reimaging, ServiceNow ticketing system, and hard drive data whips on old PC's/laptops in an technical-driven environment.
                                    </li>
                                    <li>
                                    I installed SCCM, RAM, SSD, Office 365 update, data backup, and TPM upgrade and enablement on customers computers.
                                    </li>
                                  
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Desktop Support Technician | CompuCom </h4>
                                <h5>Aug, 2020 - Jan, 2021</h5>
                                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                                <ul>
                                    <li>
                                    Computer support: Shipping out equipment, disassembling, and assembling user PC setups.
                                    </li>
                                    <li>
                                    Installed peripherals and helped with E-Waste disposal such as computer peripheral equipment.
                                    </li>

                                </ul>
                            </div>

                           
                            <div className="resume-item">
                                <h4>Computer Support Specialist | University of Hartford </h4>
                                <h5>sep, 2019 - Mar, 2020</h5>
                                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                                <ul>
                                    <li>
                                        I updated the University Faculty Center for Learning Development website using the content management system blackboard website and ensuring that the front-end aspect of the website looks updated or clear for others to access the site.
                                    </li>
                                    <li>
                                        Use HTML, CSS, and JavaScript to recreate the new University of Hartford Blackboard cascade page.
                                    </li>
                                    <li>
                                        Also, I made sure the Blackboard Cascade looks intuitive and follows University of Hartford branding.
                                    </li>

                                </ul>
                            </div>
                           <div className="resume-item">
                                <h4> IT Support Specialist tier 1 | University of Hartford </h4>
                                <h5>Feb, 2018 - Mar, 2020</h5>
                                {/* <p><em>Experion, New York, NY </em></p> */}
                                <ul>
                                    <li>
                                        Face-to-face helpdesk support such as logging into Blackboard, network connection, email, printers, documents, computers, audio issues, etc.
                                    </li>
                                    <li>
                                        I have set up a large group of pc and I detected software, network, and hardware issues using several softwares, assisted students, faculty, staff, and guests with technical issues.
                                    </li>
                                    <li>
                                     I performed technical support for faculty members, students, and guests.
                                    </li>
                                </ul>
                            </div>



                            
                        </div>
                    </div>

                </div>
            </section>

        )
    }
}