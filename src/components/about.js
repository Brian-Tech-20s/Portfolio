import React from "react";

class About extends React.Component {
    render() {
        return (

            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>
                           
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profile.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3> Junior Web Developer</h3>
                            <p className="font-italic">
                                Hello, my name is Brian Redding
                              I am passionate about web programming and working with computers either software or hardware, I was born and raised in Waterbury, CT, I am a Junior Web Developer who uses technologies such as HTML, CSS, JavaScript, React.js, Node.js, and MongoDB as my tech stack.
                                In 2019, I worked as a Computer Support Specialist where I updated the University of Hartford Blackboard’s new website and I ensured that the front-end aspect of the website looks updated or clear for others to access the site. Also, I resolved onsite issues and protected the systems away from external attacks. In 2020, I graduated with a bachelor’s degree in Computer Science. I have a strong interest in learning about new web technologies and how I can be a valuable asset to a tech company that needs problems solved, and building scalable, responsive, intuitive web applications.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li> */}
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.brianredding.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(203) 490-8314</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Residence:</strong> <span>59 Mohawk Street, Apt B</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li> */}
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Science in Computer Science</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>bredding@hartford.edu</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p> */}
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default About;