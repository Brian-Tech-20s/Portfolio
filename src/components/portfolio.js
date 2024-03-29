import React from 'react';

export default class Portfolio extends React.Component {
    render() {
        return (

            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-card1">React</li>
                                <li data-filter=".filter-cards">Java</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-cards">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://github.com/Bredding234/Threads_Synchronization" title="Source Code"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-cards">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java2.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://github.com/Bredding234/Tic-tac-toe-client-and-server" title="Source Code"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-cards">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java3.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://github.com/EmilyV99/TicTacToe" title="Source Code"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-cards">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/os1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/os1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card1">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/weather.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://github.com/Bredding234/weather-react" title="Source Code"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card1">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/calorie.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://github.com/Bredding234/Calculate-Calories-Website-Front-End-" title="Source Code"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-md-6 portfolio-item filter-card1">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/sportwebsite.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://github.com/Bredding234/Nba-Website" title="Source Code"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div> 


                    </div>

                </div>
            </section>
        )
    }
}